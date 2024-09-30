const accountId =12345;
let accountEmail ="abc@gmail.com";
var accountpassword ="4845594";
accountCity="Jaipur";
let accountState;             // op -undefined ;

//accountId =1314; // variable defined with const can't be changed;
accountEmail= "hello@gmail.com";
accountPassword = 4475448;
accountCity="Pune";
//console.log(accountId); // printing to the console;
console.table([accountId,accountEmail,accountpassword,accountCity,accountState]); //Printing in table;

//-----------------------------------Note----------------------------------------
/* 

We prefer not to use var because of isssue in block scope & functional scope;

*/