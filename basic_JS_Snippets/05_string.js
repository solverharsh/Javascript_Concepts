//https://www.w3schools.com/js/js_string_methods.asp

const firstName = "Rohit"
const lastName ="Sharma"

console.log(firstName+" "+lastName);
//String interpolation ,creating placeholders;
console.log(`Hello my name is ${firstName} ${lastName} .`);

const gameName = new String ('Pokemon')
console.log(gameName);  //array objects;
console.log(gameName[0]);
console.log(gameName.__proto__);

// Methods of String
// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString =gameName.substring(0,4) //It cannot take negative value it just ignores it ;
console.log(newString);

const str =  gameName.slice(-8,4) //It can take negative value;
console.log(str);

const str1 = "     Hello      ";
console.log(str1);
console.log(str1.trim());    //It removes the leading and trailing spaces;

const url = "https://harsh.com/hrsh%20rohit"
const newUrl = url.replace('%20','-')
console.log(newUrl);
console.log(url.includes('s')); //searching a character ;

const str2 = "hello-world-universe"
console.log(str2.split('-'));   //It breaks the string nto array based on dash;

// String length : The length property returns the length of a string:
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
// Note :
// JavaScript counts positions from zero.
// First position is 0.
// Second position is 1.
// If you omit the second parameter, the method will slice out the rest of the string:
// If a parameter is negative, the position is counted from the end of the string:

let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(-12);
console.log(part);
let text2 = "Apple, Banana, Kiwi";
let part1 = text2.slice(-12, -6);
console.log(part1);
// substring(start, end)
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
let strrr = "Apple, Banana, Kiwi";
let part3 = strrr.substring(7, 13);
console.log(part3);
//If you omit the second parameter, substring() will slice out the rest of the string.
// substr(start, length)
//substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
let str3 = "Apple, Banana, Kiwi";
let part4 = str3.substr(7, 6);
console.log(part4);

//String replace()
//The replace() method replaces a specified value with another value in a string:
let line = "Please visit Microsoft!";
let newText = line.replace("Microsoft", "W3Schools");
console.log(newText);

// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match

// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");
console.log(newText);
//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
//To replace case insensitive, use a regular expression with an /i flag (insensitive):
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText);
//Regular expressions are written without quotes.

//replaceAll() :
// replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
const text = "cats mew Cats mew"
newText = text.replaceAll(/Cats/g,"Dogs");
newText = text.replaceAll(/cats/g,"dogs");
console.log(newText);

// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);
let text1 = "Hello World!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower
console.log(text2);

//concat() joins two or more strings:
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

// All string methods return a new string. They don't modify the original string.
// Formally said:
// Strings are immutable: Strings cannot be changed, only replaced.

// The trim() method removes whitespace from both sides of a string:
let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2);
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

//JavaScript String padStart() :
// The padStart() method pads a string from the start.

// It pads a string with another string (multiple times) until it reaches a given length.

// Examples :
const text = "5"
const padded =text .padStart(4,"0")
console.log(padded);

//Pad a string with "x" until it reaches the length 4:
let text = "5";
let padded =text.padStart(4,"x");
console.log(padded);

// Note :
// The padStart() method is a string method.
// To pad a number, convert the number to a string first.

let num = 5;
let text = num .toString()
let padded = text .padStart(4,"h")
console.log(padded);

// JavaScript String padEnd()
// The padEnd() method pads a string from the end.

// It pads a string with another string (multiple times) until it reaches a given length.
let text = "5";
let padded = text.padEnd(4,"x");
console.log(padded);
//
// The padEnd() method is a string method.
// To pad a number, convert the number to a string first.

let num = 5 
let text = num.toString()
let padded = text .padEnd(5,"0")
console.log(padded);