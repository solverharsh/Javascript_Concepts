const obj = {
    a:1,
    b:2,
    c:3,
}

const {a,b,c} = obj
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
// const c = obj.c;
console.log(a,b,c);

// The destructuring assignment uses similar syntax but uses it on the left-hand side of the assignment instead. It defines which values to unpack from the sourced variable.

// Array :
const arr = [1,2,3,4,5]
const [y,z] = arr

console.log(y);
console.log(z);

// JSON :
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data-interchange format
// JSON is plain text written in JavaScript object notation
// JSON is used to send data between computers
// JSON is language independent *
// The JSON syntax is derived from JavaScript object notation, but the JSON format is text only.
// Code for reading and generating JSON exists in many programming languages.

'{"name":"John", "age":30, "car":null}'

// JavaScript has a built in function for converting JSON strings into JavaScript objects:

// JSON.parse()

// JavaScript also has a built in function for converting an object into a JSON string:

// JSON.stringify()

// You can receive pure text from a server and use it as a JavaScript object.

// You can send a JavaScript object to a server in pure text format.

// You can work with data as JavaScript objects, with no complicated parsing and translations.