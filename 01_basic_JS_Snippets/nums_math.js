const balance =new Number(100)
console.log(balance);

console.log(balance.toString().length);  //It got converted to String;
console.log(balance.toFixed(2));

const otherNumber =123.8966

console.log(otherNumber.toPrecision(5));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++MATH+++++++++++++++++++++++++++++
 console.log(Math)
 console.log(Math.abs(-4));
 console.log(Math.round(4.6));
 console.log(Math.ceil(4.2));
 console.log(Math.floor(4.9));

console.log(Math.random());             //Values between 0 & 1;
console.log((Math.random()*10)+1);   

const min =10
const max=20
console.log(Math.floor(Math.random()*(max - min + 1))+min)
