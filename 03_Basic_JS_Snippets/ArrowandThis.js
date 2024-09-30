// Arrow and This in JavaScript ;

const user = {
    username : "Ankit",
    price : 999 ,

    welcomeMessage : function(){
        console.log(`${this.username} welcome to the website`);
        console.log(this)
    }
}
user. welcomeMessage()
user.username = "Bayanpuriya"
user.welcomeMessage()
console.log(this) 
//  {}   : empty in node environment but window in browser ;

function hello (){
    let username = "Mohit" ;
    // console.log(this .username);
    console.log("Hello",username);
}
hello()   // undefined ;

// If this is consoled in function it also shows the window properties ;
const chai = function(){
    console.log(this);
}
chai()

//Arrow function snippets ;

// const sum = (num1,num2) => {
//     return num1+num2  
// }

// const sum = (num1,num2) => (num1+num2)

const sum = (num1,num2) => num1+num2

console.log("The sum of number is  : ",sum(3,5))
