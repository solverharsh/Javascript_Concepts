array = [1,2,3,4,5,6,7,8,9]
for (let index = 0; index < array.length; index++) {
    console.log(array[element]);   
}

for(let i=0;i<=10;i++){
    const element =i
    if(i==5)
    console.log(`5 is the best number`)

    console.log(element);
} 

for(let i = 0 ;i<=5;i++){
    console.log(`outer loop value ${i}`)
    for(let j = 0;j<=5;j++){
        console.log(`outer loop value ${i} : Inner loop value ${j}`);
    }
}
 
for(let i = 1 ;i<=5;i++){
    console.log(`outer loop value ${i}`)
    for(let j = 1;j<=5;j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
 
for(let i=1;i<=20;i++){
    if(i===5)
    // break              //breaks the loop
    continue              // skips the current continue the iteration 

    console.log(i);
}

let x = 5
while(x>0){
    console.log("keep coding")
    x--
}         

let i = 0
while(i<=10){
    console.log(`value of index is ${i}`)
    i+=2
}
// value of index is 0
// value of index is 2
// value of index is 4
// value of index is 6
// value of index is 8
// value of index is 10

let score = 11     // (Exception in do - while)

do{
    console.log(`value of score is ${score}`)
    score++
}while(score<=10)

// value of score is 11
