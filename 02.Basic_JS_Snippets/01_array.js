//Array
// const myArray = [0,1,2,3,4,5]
// const myArray2 = new Array ("hello","hi","bye")
// console.log(myArray);
// console.log(myArray2);
// console.log(myArray2[2]);
// console.log(myArray.length);

// myArray.push(10)
// myArray.push(20)
// console.log(myArray);
// myArray.pop()
// console.log(myArray);

// myArray.unshift(50)
// console.log(myArray);
// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(10));
// console.log(myArray.indexOf(10));

// const newArr = myArray.join()

// console.log(myArray);
// console.log(newArr);

// // Slice && Splice 

// console.log("A" , myArray);
// const myn1 = myArray.slice(1,3)
// console.log(myn1);
// console.log("B" , myArray);
// const myn2 = myArray.splice(1,3)
// console.log(myn2);
// console.log("c" , myArray);

//-----------------------------------------------------------------------
const marvel_heros = ["thor" ,"IronMan" , "Spiderman"]
const dc_heros = ["superman" , "flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

//Using concat :

const newJoin = marvel_heros.concat(dc_heros)
console.log(newJoin)

//using spread operator :

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)
//O/P:
// [ 'thor', 'IronMan', 'Spiderman', 'superman', 'flash', 'batman' ]
// [ 'thor', 'IronMan', 'Spiderman', 'superman', 'flash', 'batman' ]

//Learning the use of flat :
const newArray  = [1,2,3 ,[4,5,6],7,[6,7,[4,5]]]

const real_newArray = newArray.flat(Infinity)
console.log(real_newArray)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
// O/P :
// [ 100, 200, 300 ]
const array = [
    'H', 'a', 'r',
    's', 'h', 'd',
    'e', 'e', 'p'
  ]
console.log(Array.isArray(array));
console.log(Array.from("CodeSpaces"));