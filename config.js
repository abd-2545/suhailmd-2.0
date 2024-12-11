const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© U S A M A" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923370416077,923152779104,97433820720,923434984563,923096256183";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071003071";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false";
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_45_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMixcbiAgICAgICAgMCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NixcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk2LFxuICAgICAgICA2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMixcbiAgICAgICAgMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTksXG4gICAgICAgIDU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM2LFxuICAgICAgICAyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NixcbiAgICAgICAgMTg1LFxuICAgICAgICA4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM1LFxuICAgICAgICA5NixcbiAgICAgICAgNzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDg0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4LFxuICAgICAgICAzMixcbiAgICAgICAgMTUyLFxuICAgICAgICA1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUzNsTXVVRnVnYUdGcHdQMkNTcUtONVFtWVdaNWJFZVdaaXI0Nkw3WUt6OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzEwMDMwNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcyODE3NThEOTNFNTdFRkY5QkYzMUI0MzA1MkU2MjdFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDU1NTEyMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTAwMzA3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E4REYwNEU5ODlEMEJBQTNDNUZFRjBDQURENzkyQ0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNTU1MTIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxMDAzMDcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRUQyQ0FENDFGMDg2QkUyNTlDODQ0M0E4NjZEQjk5OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA1NTUxMjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzEwMDMwNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY0MEExMkM3Q0U5MkU3ODdGRURCQUQ1MzlEMDg0N0FEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDU1NTEyNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5b1kwNjNwV1NJZUxfWWJUbTFHRTFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUwYzczZDI0LWQ1Y2ItNDZkZC1hZGU2LTg0ZGI4MWQ2MWYyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICAxMDIsXG4gICAgICAyNDYsXG4gICAgICA0MixcbiAgICAgIDEzMSxcbiAgICAgIDM3LFxuICAgICAgMjMwLFxuICAgICAgMTE4LFxuICAgICAgMzQsXG4gICAgICAyOSxcbiAgICAgIDE3OCxcbiAgICAgIDE2NyxcbiAgICAgIDM1LFxuICAgICAgNDksXG4gICAgICAyOCxcbiAgICAgIDI0OSxcbiAgICAgIDY2LFxuICAgICAgMTAyLFxuICAgICAgMTc0LFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDM0LFxuICAgICAgMTM5LFxuICAgICAgNTksXG4gICAgICA0MSxcbiAgICAgIDIzOSxcbiAgICAgIDE3MSxcbiAgICAgIDIyNSxcbiAgICAgIDI1MyxcbiAgICAgIDc0LFxuICAgICAgMTQxLFxuICAgICAgMTQzLFxuICAgICAgMTQ0LFxuICAgICAgOTUsXG4gICAgICA0OSxcbiAgICAgIDIxMSxcbiAgICAgIDE3NixcbiAgICAgIDIzNixcbiAgICAgIDI2LFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTNDWVIxR0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3MTAwMzA3MTo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhBS0VFTVwiLFxuICAgIFwibGlkXCI6IFwiMjQ0NTI1NjkxODcxMjU3OjQ0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xpV3l2QUNFT3pabUxrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTkZYRElXRVhDYm5RTlpIK1k1THB5c3YrQ3NMWXdrS2Ixc0pLV0pOQXAzTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwdGMxNWx4T3NEcGNzQ3NtdGpPYVdMd0g1dE5pTHdML1hrMGxtdWhkbGhraHBsckZUczhMZDRGYzYxQjJZLzhqRVhNTWdzZjY5a2l1cnZUZERwelNDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuRlVlRU9NbUxOT0pGaHI4Yk01Wml0UmZhc1RYcytYKzE0QWx2UzFpVlVNUk1wZ1hhQm81b2F3bHdDbjY5czA0TThFbU8yWU54Nit1THNkRllPOFBndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzEwMDMwNzE6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNTU1MTE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQUV2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBRXYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMTjhHMjBxZFErQURYOFh2bTZkckRsMExPbG8yNlZXbTVyVjdFZEVla2hBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc3Mjk2NzIyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNTU1MTIwMTkyXCJ9Igp9="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "HAKEEM",
  ownername:process.env.OWNER_NAME|| "USAMA",


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
