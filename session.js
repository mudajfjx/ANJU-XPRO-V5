//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZEWDA1L25MUDA3RlJFYm1WV2pVYmo0NHdvL1JNQ1VjRVplK20vZ1pFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEczejgwU0NCNmlpOXpraWVvRjAvQ3FvRU4wOW9NZTZNTmtUK3FpV1dScz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Q09lempzOFB2TFd6NlZscTIzd3pxM0k2RDVnTU5VR0gzQjR2ODNLQWxBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFbnZZSHM0KzBmMVFSM0NVcFVIWERVNlhleVk2YnhhWjhqL0lDS2RnV21zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtIaW4rcmZnTDhkdmdxdmcwTXFwSkRDdWQ5TWRCRDg5WUpzSS9RWUx2WEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill4VXlFUkdKVDFpNEZub3VOZTFSeWUxYUpIQlZ2Q1VETHJ6NVc2eFIxeWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0VrOTczbmJZOHZDMHZQOThFRjN4UEUrS0NhaDFJMi9uc2VkNFJUZjVFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURCV2Q4OXFSbUtRZkdpcm5zN1BnYWlOSWVGR3ZLSFA0RURiMmNFZjRRQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjM1WjdsQm9aMGkvclFaOWdWRmtnWGxXaEgwY08wb0t6MVhnYnlBOGNpbUxaWi8wMFZiNlFlcjQrLzFZeGVodlRJVHlVd1ozY3dLU2o3cFlBYjE4d0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiIxS0RLM1FnaUpXL3dWRkRoeDZ6Y0FxVmY5ZWdlYTdXbENGYldIL2g1VlBZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGUVBIMGROLVRFeVMtRWNwc0JkVm5RIiwicGhvbmVJZCI6ImU3MmE2Yzc5LWM3ZDgtNDk1Mi05N2JkLTViN2ZkOGJmODBkMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjeEcwZDNrMzNMZnJiYWNqVUNxS1VOc3ZNcjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmkra1Rjbk90UXlHY05EWEdhVFdMNmhYTk93PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdHTFlGVjZTIiwibWUiOnsiaWQiOiI5MjMyODY2OTMxOTU6MjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMTk1ODA3Mzk5MzYyNjQ6MjJAbGlkIiwibmFtZSI6IvCfkpTZhdit2YXYryDwn5KUINmF2K/Yq9ixIPCfkpQg2KzZiNim24zbgSDwn5KUIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMejZ3SVFHRUphem9NVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCYUd2VGZDOVRmZktNSE44dlg2eG1kR3JLM1lkUUgvMmtTZGtZU01hU0J3PSIsImFjY291bnRTaWduYXR1cmUiOiJpdnNlZURyV3NvLzI0R3NTdS9iTjV1SHhGNURheklJOEVRL3RrZ2F1cG1DZG5pRjlFRzN6S0NPaW9IQ0IzRjZ1MFFQR2Y4ZmtvV2J4Z0ZITEovZjVEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ0R0NC9PZ2RFYkVPbTVWekhTYTRDVnBjc0VOTnFVNjY4YTJlWGJrZlVzbTJ1eTFIZFBNazZqR1FJNWZVdTUrbGlQa3c3eVMzM2E2a2xKc0cvYW5PRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyODY2OTMxOTU6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUVdocjAzd3ZVMzN5akJ6ZkwxK3NablJxeXQySFVCLzlwRW5aR0VqR2tnYyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1ODQ3MDc1LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUY0TSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
