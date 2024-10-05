// let obj  = {
//   message:'Good job',
//   status:'complete',
// }

// console.log(obj);
// let {message , status} = obj;
// console.log(message);
// console.log(status);

let product = {
  name:'Tshirt',
  price:500,
  rating:{
    stars:4.5,
    noOfReviews:455,
  },
};
console.log(product);
console.log(typeof(product));
let str = JSON.stringify(product);
console.log(str);
console.log(typeof(str));
 
let obj = JSON.parse(str);
console.log(obj);
console.log(typeof(obj));