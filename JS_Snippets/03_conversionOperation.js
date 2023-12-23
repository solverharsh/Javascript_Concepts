let score = 33

console.log(typeof score);
console.log(typeof (score));

let value ="33ambmd"
let valueinNumber = Number(value);
console.log(typeof valueinNumber);
console.log(valueinNumber); 
//---------------------Note----------------------------
//"33"  => 33
//"33abc" => NaN
//true =>1 ;false =>0;

let isLoggedIn = "" ;
let booleanIsLogged = Boolean(isLoggedIn)
console.log(booleanIsLogged);

//---------------------------Note----------------------------
//1 =>true ; 0 =>false ;
//"" =>false ; " " =>true /space counted as true note it;
//"name" => true ;

let num = 67 
let stringNumber =String(num);
console.log(stringNumber);
console.log(typeof stringNumber);

//*****************************OPERATIONS*****************************/

// Basic Arithmetic Operations

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%3);
console.log(2**3);

//Negation of a number

let val =3
let negVal =-val
console.log(negVal);

let str1 ="Hello"
let str2 = " Welcome to CodeSpaces"
let str3 = str1 + str2   //Concatenation

console.log(str3);

//Tricky Questions & concepts ;

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 +"2");
console.log(1 + "2" +3);

console.log(+true)
console.log(+"")

// postfix++ & ++prefix :

let gameCounter =100
++gameCounter
console.log(gameCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

/*
The ++ operator is overloaded for two types of operands: number and BigInt. It first coerces the operand to a numeric value and tests the type of it. It performs BigInt increment if the operand becomes a BigInt; otherwise, it performs number increment.

If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

The increment operator can only be applied on operands that are references (variables and object properties; i.e. valid assignment targets). ++x itself evaluates to a value, not a reference, so you cannot chain multiple increment operators together.

JS : 
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
*/ 

let x1 = 3;
const y1 = x++;
// x1 is 4; y1 is 3

let x4 = 3n;
const y4 = x2++;
// x4 is 4n; y4 is 3n

let x3 = 3;
const y3 = ++x;
// x3 is 4; y3 is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n