let count = 0 ;
count = count+1;
console.log(`The value of count is ${count}`);

// let myAge = 26;
// console.log(`My age is ${myAge}`);

// let sum =10+11;
// console.log(`The value of sum is ${sum}`);

// let firstbatch =5;
// let num = firstbatch;
// console.log(num);

// let Age=25, humanDogRatio  = 7;
// let myDogAge = Age * humanDogRatio;
// console.log(myDogAge);

//Basic challenges : =
let bonusPoints =50;

bonusPoints+=50;
   

bonusPoints-=75;
console.log(bonusPoints);

bonusPoints+=45;
console.log(bonusPoints);

// function increment(){
//     console.log("The button was clicked");
// }

countdown = () =>{
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
    
};

// Before first race:
console.log("Before first race , stopwatch goes here : ");
countdown();
// Before second race:
console.log("Before second race , stopwatch goes here :");
countdown();
// Before third race:
console.log("Before third race , stopwatch goes here :");
countdown();

// Create a function myLogger that logs the number 42 to the console
// call/invoke the function


myLogger = () => {
    let num = 42
    console.log(`The value of number is ${num}`);
}

myLogger();

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

sumLap = () => {
    let totalTime = lap1+lap2+lap3;
    console.log(`The summation of all lap is ${totalTime}`);
    
}

sumLap();

let userName = "Avinash";
console.log(userName);

// Create  a variable , message ,that stored the string : "You have three new notifications"

let message = "You have three new notifications";
console.log(message);

// let result = userName+" "+message;
// console.log(result);

let result = `${userName} ${message}`;
console.log(result);

let myName = "Vipin";
let greeting = "Hi , my name is ";
// let myGreeting = greeting + myName;
let myGreeting = `${greeting} ${myName}`;
console.log(myGreeting);


let points = "12" ;
let bonusPoint = 5;

let totalPoint = points+bonusPoint;
console.log(totalPoint);
// understanding concatenation in strings:
console.log(5+5);
console.log("5"+5);
console.log("5"+"5");
console.log(5+"5");























