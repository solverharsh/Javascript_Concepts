// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./TextContent/first.txt", "utf8");
// const second = readFileSync("./TextContent/second.txt", "utf8");

// // console.log(first, second);

// writeFileSync(
//   "./TextContent/result-Sync.txt",
//   `Here is the result : ${first} , ${second}`,
//   { flag: "a" }
// );

// const result = readFileSync("./TextContent/result-Sync.txt", "utf8");
// console.log(result);

const { readFile, writeFile } = require("fs");

readFile("./TextContent/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./textContent/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./TextContent/result-async.txt",
      `Here is the result : ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
