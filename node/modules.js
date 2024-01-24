const name = require("./names");
const sayHi = require("./utils");
const alternative = require("./alternative-flavor");
sayHi("mayank");
sayHi(name.rohit);
sayHi(name.virat);
console.log(alternative.arr[0]);
console.log(alternative.obj.age);
require("./mind-grenade"); // Note this just importing runs the code without exporting in the file but we have called the function in the same file of the function So, it works .

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
