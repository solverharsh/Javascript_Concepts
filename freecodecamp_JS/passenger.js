// passenger entererd project code ;

let counter = 0 ;

increment = () => {
    counter+=1; 
    document.getElementById("count-el").innerText = counter;
}


save = () =>{
    // console.log(counter);  
    document.getElementById("save-el").innerText = "The number of people entered are -"+counter;
}