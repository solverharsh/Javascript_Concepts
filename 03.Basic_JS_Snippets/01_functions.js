// Functions :
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
// Function parameters are listed inside the parentheses () in the function definition.

// Why Functions???

// With functions you can reuse code.
// You can write code that can be used many times.
// You can use the same code with different arguments, to produce different results.

// variables passed in function while defining is "parameters" ;

function addTwoNumber (number1 ,number2){  
    console.log("Sum :" , number1+number2);
}

// Function arguments are the values received by the function when it is invoked.
// whereas the values passed during function call or execution is called "arguments";

addTwoNumber(5,10)
// addTwoNumber(5,"a")

//When JavaScript reaches a return statement, the function will stop executing.
function addNumber (number1 ,number2){  
   return number1+number2;
}
const result = addNumber(4,4)
console.log(`Result : ${result}`);

// Function with default parameter ;
function loginUserMessage(username="Subham"){

    // if(username===undefined){
    //     console.log("Please enter the user name");
    //     return ;
    // }
    if(!username){
        console.log("Please enter the user name");
        return ;
    }

    return `${username} Just Logged In`
}
// console.log(loginUserMessage("Rohit"));

// As you see from the examples above, loginUserMessage refers to the function object, and loginUserMessage() refers to the function result.
console.log(loginUserMessage());

function calculateCartPrice(price1 ,price2,...price3){
    // return price1
    return price3
}
console.log(calculateCartPrice(100,200,500,2000)); //will return REST after price1 & price2;

const user = {
    username : "Jasprit" ,
    price :199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username:"Subhman" ,
    price :399
})

const myNewArray =[200,400,600,800,1000]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100,300,500,700]));

// Local Variables :

// Variables declared within a JavaScript function, become { LOCAL } to the function.
// Local variables can only be accessed from within the function.

// code here can NOT use carName

// function myFunction() {
//     let carName = "Volvo";
//     // code here CAN use carName
//   }
  
//  code here can NOT use carName