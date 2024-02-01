const { readFileSync, writeFileSync } = require("fs");
console.log("starting the reading of file..");
const first = readFileSync("./TextContent/first.txt", "utf8");
const second = readFileSync("./TextContent/second.txt", "utf8");

// console.log(first, second);

writeFileSync(
  "./TextContent/result-Sync.txt",
  `Here is the result : ${first} , ${second}`,
  { flag: "a" }
);

const result = readFileSync("./TextContent/result-Sync.txt", "utf8");
console.log(result);
console.log("Done with this task...!!");
console.log("starting the next task...");
