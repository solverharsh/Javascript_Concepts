// In real life, a car is an object.
// A car has properties like weight and color, and methods like start and stop:
// All cars have the same properties, but the property values differ from car to car.
// All cars have the same methods, but the methods are performed at different times.
// Objects are variables too. But objects can contain many values.

// singleton 
// pbject .create 

// object literals :
// Examples :

const person = {
    name : "Virat",
    age : 35,
    location :"Delhi",
    email : "virat@gmail.com",
    profession : "cricketer",
}

console.log(person);

// You can access object properties in two ways:

console.log(person.email);
console.log(person["email"]);

// It is a common practice to declare objects with the const keyword.
const car = {
    type:"Fiat",
    model:"500",
    color:"white",
}

console.log(car);
console.log(car["model"]);  // better approach ;
console.log(car.color);

// JavaScript objects are containers for named values called properties.

const person2 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
// " this " is not a variable. It is a keyword. You cannot change the value of " this ".

// If you access a method without the () parentheses, it will return the function definition:
  console.log(person2["fullName"]); // [Function: fullName] ;

// You access an object method with the following syntax:
// objectName.methodName() ;

  console.log(person2.fullName())

// Do Not Declare Strings, Numbers, and Booleans as Objects !!
// When a JavaScript variable is declared with the keyword "new", the variable is created as an object.
// Avoid String, Number, and Boolean objects.They complicate your code and slow down execution speed.

// x = new String();        // Declares x as a String object
// y = new Number();        // Declares y as a Number object
// z = new Boolean();       // Declares z as a Boolean object

const mySym = Symbol("key1")

const JsUser = {
    firstName : "Virat",
    lastName : "Kohli",
    age : 34 ,
    [mySym] : "myKey1",
    location : "Delhi",
    lastPlayed : ["December","January"],
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(JsUser);
console.log(JsUser.fullName());
console.log(JsUser[mySym]);

JsUser.location = "Mumbai"
console.log(JsUser["location"]);
Object.freeze(JsUser)  //After frezing the object the update will not work on the properties of objects ;
JsUser.location = "Patna"
console.log(JsUser.location);
