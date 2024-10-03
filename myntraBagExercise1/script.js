let itemQuantity = 0;
const addOne = () =>{
    itemQuantity++;
    document.querySelector('#item-summary').innerText = `Your bag has ${itemQuantity} items`;
}
const addTwo = () =>{
    itemQuantity+=2;
    document.querySelector('#item-summary').innerText = `Your bag has ${itemQuantity} items`;
}

const subOne = () =>{
    if(itemQuantity!=0){
        itemQuantity--;
        document.querySelector('#item-summary').innerText = `Your bag has ${itemQuantity} items`;
    }
}
    