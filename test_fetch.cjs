const https = require("https");
const fs = require("fs");

https.get("https://www.behance.net/gallery/252095251/Fruzi-Relaunch-Campaign", {
  headers: {
    "User-Agent": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
  }
}, (res) => {
  let data = "";
  res.on("data", c => data += c);
  res.on("end", () => {
    fs.writeFileSync("project_sample.html", data);
    console.log("Length:", data.length);
    const imgs = data.match(/https:\/\/[^"'<>\s]+\.(jpg|jpeg|png|webp|gif)/gi) || [];
    console.log("Found image urls:", imgs.length);
    console.log("Sample image urls:", imgs.slice(0, 15));
  });
});
