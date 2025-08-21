require('./daveenv')
const makeWASocket = require("@whiskeysockets/baileys").default
const { color } = require('./library/lib/color')
const NodeCache = require("node-cache")
const readline = require("readline")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const { Low, JSONFile } = require('./library/lib/lowdb')
const yargs = require('yargs/yargs')
const fs = require('fs')
const chalk = require('chalk')
const path = require('path')
const axios = require('axios')
const _ = require('lodash')
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./library/lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./library/lib/function')
const { default: connConnect, getAggregateVotesInPollMessage, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@whiskeysockets/baileys")
const createToxxicStore = require('./library/database/basestore');
const store = createToxxicStore('./store', {
  logger: pino().child({ level: 'silent', stream: 'store' }) });

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    database: {},
    chats: {},
    game: {},
    settings: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

if (global.db) setInterval(async () => {
   if (global.db.data) await global.db.write()
}, 30 * 1000)

const settings = require('./daveenv')
let phoneNumber = "254104260236"
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const sessionDir = path.join(__dirname, 'session');
const credsPath = path.join(sessionDir, 'creds.json');

async function downloadSessionData() {
  try {
    await fs.promises.mkdir(sessionDir, { recursive: true });

    if (!fs.existsSync(credsPath)) {
      if (!global.SESSION_ID) {
        return console.log(color(`Session id not found at SESSION_ID!\nCreds.json not found at session folder!\n\nWait to enter your number`, 'red'));
      }

      const base64Data = global.SESSION_ID.split("DAVE-XMD-WHATSAPP-BOT;;;=>")[1];
      const sessionData = Buffer.from(base64Data, 'base64');

      await fs.promises.writeFile(credsPath, sessionData);
      console.log(color(`Session successfully saved, please wait!!`, 'green'));
      await startdave();
    }
  } catch (error) {
    console.error('Error downloading session data:', error);
  }
}

async function startdave() {
  let { version, isLatest } = await fetchLatestBaileysVersion()
  const { state, saveCreds } = await useMultiFileAuthState(`./session`)
  const msgRetryCounterCache = new NodeCache()
  const dave = makeWASocket({
    version: [2, 3000, 1023223821],
    logger: pino({ level: 'silent' }),
    printQRInTerminal: !pairingCode,
    mobile: useMobile,
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
    },
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    getMessage: async (key) => {
      let jid = jidNormalizedUser(key.remoteJid)
      let msg = await store.loadMessage(jid, key.id)
      return msg?.message || ""
    },
    msgRetryCounterCache,
    defaultQueryTimeoutMs: undefined,
  })

  store.bind(dave.ev)

  if (pairingCode && !dave.authState.creds.registered) {
    if (useMobile) throw new Error('Cannot use pairing code with mobile api')

    let phoneNumber
    if (!!global.phoneNumber) {
      phoneNumber = global.phoneNumber
    } else {
      phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number 😍\nFormat: 2547XXXXX (without + or spaces) : `)))
    }

    phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

    const pn = require('awesome-phonenumber');
    if (!pn('+' + phoneNumber).isValid()) {
      console.log(chalk.red('Invalid phone number. Please enter your full international number (e.g., 255792021944 for Tanzania, 254798570132 for Kenya, etc.) without + or spaces.'));
      process.exit(1);
    }

    setTimeout(async () => {
      try {
        let code = await dave.requestPairingCode(phoneNumber)
        code = code?.match(/.{1,4}/g)?.join("-") || code
        console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
        console.log(chalk.yellow(`\nPlease enter this code in your WhatsApp app:\n1. Open WhatsApp\n2. Go to Settings > Linked Devices\n3. Tap "Link a Device"\n4. Enter the code shown above`))
      } catch (error) {
        console.error('Error requesting pairing code:', error)
        console.log(chalk.red('Failed to get pairing code. Please check your phone number and try again.'))
      }
    }, 3000)
  }

  store?.bind(dave.ev)
  
  dave.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update
    try {
      if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
        if (reason === DisconnectReason.badSession) {
          console.log(`Bad Session File, Please Delete Session and Scan Again`);
          startdave()
        } else if (reason === DisconnectReason.connectionClosed) {
          console.log("Connection closed, reconnecting....");
          startdave();
        } else if (reason === DisconnectReason.connectionLost) {
          console.log("Connection Lost from Server, reconnecting...");
          startdave();
        } else if (reason === DisconnectReason.connectionReplaced) {
          console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
          startdave()
        } else if (reason === DisconnectReason.loggedOut) {
          console.log(`Device Logged Out, Please Delete Session and Scan Again.`);
          startdave();
        } else if (reason === DisconnectReason.restartRequired) {
          console.log("Restart Required, Restarting...");
          startdave();
        } else if (reason === DisconnectReason.timedOut) {
          console.log("Connection TimedOut, Reconnecting...");
          startdave();
        } else dave.end(`Unknown DisconnectReason: ${reason}|${connection}`)
      }
      if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
        console.log(color(`\nConnecting...`, 'white'))
      }
      if (update.connection == "open" || update.receivedPendingNotifications == "true") {
        console.log(color(` `, 'magenta'))
        console.log(color(`Connected to => ` + JSON.stringify(dave.user, null, 2), 'green'))
        await delay(1999)

        const botNumber = dave.user.id.split(':')[0] + '@s.whatsapp.net';
        await dave.sendMessage(botNumber, {
          text:
            `
╔══❐ *𝐃𝐀𝐕𝐄-𝐗𝐌𝐃 CONNECTED* ❐══╗
║ ➤ *Bot:* 𝐃𝐀𝐕𝐄-𝐗𝐌𝐃
║ ➤ *Time:* ${new Date().toLocaleString()}
║ ➤ *Status:* Online ✅
║ ➤ *User:* ${botNumber}
╚════════════════════════════╝`,
          contextInfo: {
            forwardingScore: 1,
            isForwarded: false,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363400480173280@newsletter',
              newsletterName: '𝐃𝐀𝐕𝐄-𝐌𝐃',
              serverMessageId: -1
            }
          }
        });
        console.log(color('>DAVE-MD is Connected< [ ! ]', 'red'))
      }

    } catch (err) {
      console.log('Error in Connection.update ' + err)
      startdave();
    }
  })

  dave.ev.on('creds.update', saveCreds)
  dave.ev.on("messages.upsert", () => { })

  return dave
}

async function tylor() {
  if (fs.existsSync(credsPath)) {
    console.log(color("Session file found, starting bot...", 'yellow'));
    await startdave();
  } else {
    const sessionDownloaded = await downloadSessionData();
    if (sessionDownloaded) {
      console.log("Session downloaded, starting bot.");
      await startdave();
    } else {
      if (!fs.existsSync(credsPath)) {
        if (!global.SESSION_ID) {
          console.log(color("Please wait for a few seconds to enter your number!", 'red'));
          await startdave();
        }
      }
    }
  }
}


tylor()

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})
