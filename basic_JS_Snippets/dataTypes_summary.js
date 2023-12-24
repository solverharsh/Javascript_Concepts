/*           Notes of data Type [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures]

JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/
// Primitive Type 
// String ,Number ,Boolean ,null ,undefined ,Symbol ,Bigint

const score =100 
console.log(typeof score); //Number

const sym = Symbol("123")
console.log(typeof sym);

const scoreValue =100.5
console.log(typeof scoreValue);
/*
BigInt type :

The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary magnitude. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit (Number.MAX_SAFE_INTEGER) for Numbers.

A BigInt is created by appending n to the end of an integer or by calling the BigInt() function.

JS :
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992 .

Return type of variables in JavaScript
1) Primitive Datatypes

Type	      | typeof return value	
Null	      |   "object"	
Undefined     |  "undefined"
Boolean	      |    "boolean"	
Number	      |    "number"	
BigInt	      |    "bigint"	
String	      |    "string"	
Symbol	      |    "symbol"

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/
// Reference (Non Primitive) 
// Array ,Objects [V.V.I],Functions 

//******************************************************

// Stack(Primitive) and Heap(Non-Primitive)
let name= "Rohit"

let anotherName = name
anotherName = "Virat"

console.log(name);
console.log(anotherName);
// O/P:
// Rohit
// Virat   Here a copy is paased in stack

const person1 ={
       id : 1,
       city : "Pune",
}

const person2 =person1
person2.city = "Banglaore"

console.log(person1);
console.log(person2);
// O/P:
// { id: 1, city: 'Banglaore' }
// { id: 1, city: 'Banglaore' }   Here the references is passed in the heap;