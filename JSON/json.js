// localStorage.setItem('Name','Prashant');
// localStorage.setItem('Price','1000');

console.log(localStorage.getItem('Name'));
console.log(localStorage.getItem('Price'));

let product = {
    name:'Tshirt',
    price:500,
    rating:{
      stars:4.5,
      noOfReviews:455,
    },
  };

  localStorage.setItem('product',JSON.stringify(product));
  console.log(localStorage.getItem('product'));

  localStorage.removeItem('Price');
  localStorage.clear();
  