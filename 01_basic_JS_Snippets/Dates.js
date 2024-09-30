// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);                      // object


let myCreateddate = new Date(2023,0,12)
console.log(myCreateddate);
console.log(myCreateddate.toString());

let newDate = new Date("01-12-2023")
console.log(newDate.toString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log((newDate.getTime()));
console.log(Math.floor(Date.now()/1000));

console.log(myDate.getDay());
console.log(myDate.getMonth()+1); // as month starts from '0' in array;


myDate.toLocaleDateString('default',{
    weekday:"long",
})
console.log(myDate);


