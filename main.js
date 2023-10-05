const express = require("express");
const fs = require("fs");
const port = 3000;

const app = express();

app.use(express.static("public"));

let totalViews = 0;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  totalViews++;
  let html = fs.readFileSync(__dirname + "/index.html", "utf8");
  html = html.replace("{{views}}", totalViews);
  res.send(html);
});
