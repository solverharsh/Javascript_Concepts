const { readFile, writeFile } = require("fs");
// Callback hell ;
console.log("Starting the first task....");

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
        console.log("Done with the first task...");
      }
    );
  });
});

console.log("Starting the next task...");
