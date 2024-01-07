// truthy & falsy

// const userEmail = "virat@outlook.com"
const userEmail = ""

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// Falsy values : 
//{ false , 0 ,-0 , BigInt 0n , "",null,undefined ,NaN }

// Truthy values :
// true , 1 , "0" ,'false'," ", [] , {} , function(){}

// cheking if Array is Empty
const array = []
if(array.length ===0){
    console.log("Array is empty");
}

// cheking if Object is Empty
const myObj = {}

if(Object.keys(myObj).length===0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null / undefined [mostly used in datbase side] 
// Important ;

let val1 = 10 ?? 15 
let val2 = null ?? 15 
let val3 = undefined ?? 15 
let val4 = null ?? 12 ?? 15 // first non-Null value after null/undefined;

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

//Ternary operator ;
// condition ? true : false 

const isPrice =100
isPrice ===100 ? console.log("price is 100"):console.log("price is not 100");