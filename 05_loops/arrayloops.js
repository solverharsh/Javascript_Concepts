// for of loop :
// ["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for (const iterator of arr) {
    console.log(iterator);
}

str = "Rohit Sharma"
 
for(const char of str){
    if(char==" ")
    continue

    console.log(`Each character is ${char}`);
}


// Maps :
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.
// Passing an Array to new Map()
// Create a Map and use Map.set()

const map = new Map()
map.set("apples",500)
map.set("orange",600)
map.set("banana",700)
map.set("cherry",800)

console.log(map.keys());
console.log(map.values());
// [Map Iterator] { 'apple', 'orange', 'banana', 'cherry' }
// [Map Iterator] { 500, 600, 700, 800 }
console.log(map.get("apples"));
console.log(map.get("cherry"));
// // 500
// // 800

console.log(map.size);
// 4

// map.delete("cherry")

for(const it of map){
    console.log(it);
}

for(const [key,value] of map){
    console.log(key ,":-",value);
}
// apples :- 500
// orange :- 600
// banana :- 700
// cherry :- 800

const myObject = {
    'game1':'NFS',
    'game2':"spiderman"
}

// We can't use for of because of below error
// TypeError: myObject is not iterable

for(const it in myObject){
    console.log(it,":-",myObject[it]);
}
// game1 :- NFS
// game2 :- spiderman

const num = [1,2,3,4,5,6,7,8,9]

for(const index of num){
    console.log(index);
}
// It directly gives the values present in the array
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
for(const i in num){
    console.log(num[i]);
}
//It gives the values which can be used to accces the vlue present in the array as below.

// for each loop : 
const coding = ["js","c++","python","java","kotlin"]
// In foreach we need to pass a callback function of any function as parameter.
coding.forEach(function (item){
    console.log(item);
})
coding.forEach((item)=>{
    console.log(item);
})

function printItem(item){
    console.log(item);
}
coding.forEach(printItem)  // passing a s reference not method call

coding.forEach((index,item,arr)=>{
    console.log(index,item,arr);
})
// js 0 [ 'js', 'c++', 'python', 'java', 'kotlin' ]
// c++ 1 [ 'js', 'c++', 'python', 'java', 'kotlin' ]
// python 2 [ 'js', 'c++', 'python', 'java', 'kotlin' ]
// java 3 [ 'js', 'c++', 'python', 'java', 'kotlin' ]
// kotlin 4 [ 'js', 'c++', 'python', 'java', 'kotlin' ]

const myCoding=[
    {
        languageName :"javascript",
        languageFileName:"js"
    },
    {
        languageName :"java",
        languageFileName:"java"
    },
    {
        languageName :"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})
// javascript
// java
// python

let result=coding.forEach((item)=>{
    return item
    // console.log(item);
})

// console.log(result);
// forEach doesn't return even returned any values;

const myNums = [1,2,3,4,5,6,7,8,9,10]

const res = myNums.filter((num)=>num>5)
console.log(res);

const result = myNums.filter((num)=>{
    return num>5
})
console.log(result);
// [ 6, 7, 8, 9, 10 ]
// [ 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let newBook = books.filter((book)=>book.genre==="Science")
//   console.log(newBook);

  newBook = books.filter((book)=>{
    return book.genre==="Science" && book.publish===2011
  })
  console.log((newBook));
//   [
//     {
//       title: 'Book Eight',
//       genre: 'Science',
//       publish: 2011,
//       edition: 2016
//     }
//   ]

const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const res = myNumber.map((num)=>num+10)
// chaining :
const res = myNumber.map((num)=>num*10)
                    .map((num)=>num+1)
                    .filter((num)=>num>40)
console.log(res);

//Reduce :
const myNumber = [1,2,3,4,5]

// const myTotal = myNumber.reduce(function (acc,currval){
//     console.log(`accumulator:${acc} currentValue: ${currval}`);
//     return acc+currval
// },0)

const myTotal = myNumber.reduce((acc,currval)=>acc+currval,0)
console.log(`Sum of number in array is : ${myTotal}`);
// Sum of number in array is : 15

// accumulator:0 currentValue: 1
// accumulator:1 currentValue: 2
// accumulator:3 currentValue: 3
// accumulator:6 currentValue: 4
// accumulator:10 currentValue: 5
// Sum of number in array is : 15 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((acc,currval)=>acc+currval.price,0)
console.log(totalPrice);