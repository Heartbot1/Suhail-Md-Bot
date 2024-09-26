const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347034845999";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_21_09_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk0LFxuICAgICAgICA1NixcbiAgICAgICAgMTU1LFxuICAgICAgICAzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwLFxuICAgICAgICA2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc4LFxuICAgICAgICA5OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDkxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkwLFxuICAgICAgICAzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDMzLFxuICAgICAgICAzNixcbiAgICAgICAgMjEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzMixcbiAgICAgICAgMjMxLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc4LFxuICAgICAgICA5MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDM4LFxuICAgICAgICA1NixcbiAgICAgICAgMjMxLFxuICAgICAgICA4MixcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAzMixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDY5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyLFxuICAgICAgICA1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgOSxcbiAgICAgICAgODksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDc3LFxuICAgICAgICAzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxOSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIsXG4gICAgICAgIDM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkw1YnRXRUJ2LzNhMGpPYS8vUjRMT1dIb3ZMckdxM3UwWGNPODJDS2NrOFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZKeEJCbTdHVEdleS1ldGVSQnZoSUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzM5ODBkMzAtNGZlNi00YjY5LTkwYjktOTcxZDMwY2UzYTMzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDIzNyxcbiAgICAgIDY2LFxuICAgICAgMjUsXG4gICAgICAxOTcsXG4gICAgICAxMzYsXG4gICAgICA0NCxcbiAgICAgIDE1MyxcbiAgICAgIDMzLFxuICAgICAgMjE4LFxuICAgICAgNzIsXG4gICAgICAxOTcsXG4gICAgICA5MixcbiAgICAgIDIzNCxcbiAgICAgIDIxLFxuICAgICAgMTgyLFxuICAgICAgNjksXG4gICAgICAyMTAsXG4gICAgICAxMzAsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgMTk1LFxuICAgICAgNTIsXG4gICAgICAxNzIsXG4gICAgICAxMTAsXG4gICAgICA4NyxcbiAgICAgIDIwMixcbiAgICAgIDk2LFxuICAgICAgODcsXG4gICAgICAxNjgsXG4gICAgICA3NCxcbiAgICAgIDcxLFxuICAgICAgMjMsXG4gICAgICAxMixcbiAgICAgIDE0MyxcbiAgICAgIDYxLFxuICAgICAgNzAsXG4gICAgICA0OSxcbiAgICAgIDUzLFxuICAgICAgNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUko4Mk03SkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMzQ4NDU5OTk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIZWFydCBTdGl0Y2hlc1wiLFxuICAgIFwibGlkXCI6IFwiNjg3NzU0OTU4ODA4NjU6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFd6bHNJRUVNV0UxN2NHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiRzN5c2hPSDgybWxDMUdUZjd4RWdpUmdyNGp0eHQwU1dZMVh2QW9ZMVVBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklmU1Nvd3g0M1VLS1BhMC96WU11UDBIRFhSZ2Z1bk1MWk1acVNEaTBxZ0xTZGpBTTc1SG50dVNiRDk1R1B3NGQzb1RaSHdFWUhaT2RrS0VEUk9ORUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjczZ1dmZXFmc0ZuUkFVQWljeFFHR1dpMklUck5uOXQ2TW93dy9GeDB5WWloSWhlVzJaUXMzVkxKSVdnaENwSFFsTks4Vno1Vjg0clhYTEZZSmJVTmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzQ4NDU5OTk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjczODIwODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPS1JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9LUi5qc29uIjogIntcImtleURhdGFcIjpcImRvWXczLy9HM0pVMmxxbjlLS0kreHdCak93YWg0bm81ajk5d0NMakxkTFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIxMjUyMDg4NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI2ODcxMzI3NDM2XCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
