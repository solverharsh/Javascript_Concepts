const path = require("path");

console.log(path.sep);

const filepath = path.join("/TextContent/", "Content", "randomtext.txt");
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolute = path.resolve(
  __dirname,
  "TextContent",
  "Content",
  "randomtext.txt"
);
console.log(absolute);
