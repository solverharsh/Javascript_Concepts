 // Global & Local Scope ;
 var c= 1000
 let a = 1200

 if(true){
    let a = 300
    const b =200
    c= 400
    console.log("Inner Value of a is : ",a); // local scope : Block level;
 }

 console.log("Outer value of a is : ",a); // Global Scope;
//  console.log(b);
 console.log("The value of C is : ",c); // the value gets overwritten; 

 function one(){
   const username = "Ankit"

   function two (){
      const website = "youtube"
      console.log(username);
   }
   // console.log(website);  not defined error ;
   // two()
 }
//  console.log(username);   not defined error ; 
 one() 


//  --------------------Iteresting case----------------------

console.log(addOne(5)); // can be called before function declaration in this type of fn declaration;

function addOne(num){
   return num+1
}

// Another case
// console.log(addTwo(5));
const addTwo = function(num){
   return num+2
}
console.log(addTwo(5));    // Will be explained in Hoisting in details;
// Error Below ::
// console.log(addTwo(5));
//             ^

// ReferenceError: Cannot access 'addTwo' before initialization
