// 1. create an array of numbers [5,6] . Add 4 at the beginning and 7 at the end of the array.
// let arr = [5,6];
// arr.push(7);
// arr.unshift(4);
// console.log(arr);

// 2. Create a method to return an element at a particular position in the array;
// let numbers = [1,2,3,4,5,6];

// function returnElement(arr,pos){
//     for(let i = 0 ;i <arr.length ; i++){
//         if(i === pos-1){
//             return arr[i];
//         }
//     }
// }

// let result = returnElement(numbers ,4);
// console.log(`The element at position 4 is ${result}`);

// 3. Create an array copy using slice method ; 

// let array = [1,2,3,4];
// let n = array.length;
// let res = array.slice(0,n);
// console.log(res);
// console.log(array);

// 4. Create a while loop that exits after counting 5 prime numbers ;

// function isPrime(num){
//     for(let i=2 ;i<num ;i++){
//         if(num%i == 0)
//             return false;
//     }
//     return true;
// }

// let num = 2 ;
// let count = 0;

// while(count<5){
//     if(isPrime(num)){
//         console.log(num);
//         count++;
//     }
//     num++;
// }

// 5. Modify the above loop to finish using break ; 

// while(1){
//     if(isPrime(num)){
//         console.log(num);
//         count++;
//         if(count>=5)
//             break;
//     }
//     num++;
// }

// 6. Create a for loop that prints number 1 to 10 in reverse order ;

// for(let i = 10 ;i>0;i--){
//     console.log(i);
// }

// 7. Using continue only print positive numbers from the given array [1,-6,5,7,-98]

// let nums = [1,-6,5,7,-98]

// for(let i = 0 ;i < nums.length ;i++){
//     if(nums[i]<0)
//         continue;
//     console.log(nums[i]);
    
// }

// 8. Using accumulator pattern concatenate all the strings in the given array ['KG','Coding','Javascript','Course','is','Best'];

// let strArr = ['KG','Coding','Javascript','Course','is','Best'];
// let str = '';
// for(let i =0 ;i<strArr.length ;i++){
//     str+=strArr[i];
// }
// console.log(str);

// KGCodingJavascriptCourseisBest