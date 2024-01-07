// if condition :

if(true){
    console.log("Welcome to conditional statement")
}

const isUserLoggedIn =true

if(isUserLoggedIn){
    console.log("User is Logged in");
}
// < ,> <= ,>=,==,!=,===

if(2=="2"){
    console.log("Executed");
}
else{
    console.log("Not Executed");
}
// strict Equality operator ;
if(2==="2"){
    console.log("Executed");
}
else{
    console.log("Not Executed");
}

if(!false){
    console.log("You understood negation");
}
const temp = 40  
if(temp<50){
    console.log("Temperature is less than 50");
}
else{
    console.log("Temperature is greater than 50");
}

const score = 200

if(score > 100){
    const power= "fly"
    console.log(`User power:${power}`);
}
// console.log(`User power:${power}`);

const price =1000

if(price<500){
    console.log("The price is less than 500");
}else if(price <800){
    console.log("The price is less than 800");
}else if(price<100){
    console.log("The price is less than 1000");
}else{
    console.log("The price is less than 1500");
}

const userLoggedIn =true
const debitCard =true
const loggedInFromGoogle =false
const loggedInFromEmail = false

if(userLoggedIn && debitCard ){
    console.log("Allowed to buy the course");
}
else{
    console.log("Check the login and debit card to buy the course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Alowed to buy  the course");
}else{
    console.log("Not allowed to buy the course");
}


