const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_34_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDM4LFxuICAgICAgICA3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM5LFxuICAgICAgICA0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NCxcbiAgICAgICAgODksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMzLFxuICAgICAgICA4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICA1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzLFxuICAgICAgICA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVHaHQ3Z2NFYnpaWkxHWmJjdnpCTkFWUWUxNTUzbDNleGF6QTdMcTMvTWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImI0elY5RWpiUzN5NVdpZWhCbm5xS2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTExZDMzYzgtZjljZC00MDU5LWE2ZjAtMmE0YjE1Y2EwMmRhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMixcbiAgICAgIDEyMSxcbiAgICAgIDc4LFxuICAgICAgMTQ1LFxuICAgICAgMTM0LFxuICAgICAgMTY4LFxuICAgICAgMjM2LFxuICAgICAgMjEwLFxuICAgICAgMjE2LFxuICAgICAgNjcsXG4gICAgICAxODksXG4gICAgICA4MixcbiAgICAgIDEyNyxcbiAgICAgIDE4NSxcbiAgICAgIDE1NixcbiAgICAgIDEyMSxcbiAgICAgIDkxLFxuICAgICAgMTYzLFxuICAgICAgNTksXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTgsXG4gICAgICA5OSxcbiAgICAgIDIyOCxcbiAgICAgIDI0MyxcbiAgICAgIDIwNSxcbiAgICAgIDg4LFxuICAgICAgMjQzLFxuICAgICAgMTEsXG4gICAgICAxMCxcbiAgICAgIDY4LFxuICAgICAgMjAsXG4gICAgICAxMzEsXG4gICAgICAxLFxuICAgICAgMTQwLFxuICAgICAgMjM2LFxuICAgICAgOTgsXG4gICAgICAyNyxcbiAgICAgIDkxLFxuICAgICAgMTg4LFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRTEzRUQ2TldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNjAwMTczNjg1MDo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRFVklMIEtJTkdcIixcbiAgICBcImxpZFwiOiBcIjE5MjQ0OTQzMTQ5ODg1MDo5NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJenFxQklRdnMzRXVRWVlCU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlQzVFRKcHlNNDhaVkFXOEdjR2t6ZUVnOXZiUjRiUk0zOTlQOWtncmRSWHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWXpsb0lGaEhTS29VOU1aTWNRUFRTNFFaNjZnaEowVG5YajNaWlFsRWNMd2FHUFRGS0hkVjFMM3NwcHJXZzYyc0I4ZnpNOEM2djJ4ODk4NWFmVnIzQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMWJ5M21GdUUyQUIxR2MvL2Q1Y014VHMyUmd2V1JnWmd0a0kwUndQeWwrYU9tY2lhY2VkU25YdFpCeVQrcnJVYkpESk5kdkszQlg0ekRBRWNuQUgyQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE2MDAxNzM2ODUwOjk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTI3NDQzNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxTTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFNMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUlQyZ2huMVVLZVIrL09sbndjVHpRNTAwU1ZqNGJ4V2dpb3l6aFRSdk1Tdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODQxNzY3NixcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxMjczODY3MzkyXCJ9Igp"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
