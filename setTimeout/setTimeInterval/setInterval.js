let alarm = () => {
    console.log('Subah ho gayi uth jao !!');   
}

// console.log('Alaram has been set');
let timerId = setInterval(alarm , 1000);

setTimeout(() => clearInterval(timerId),5000);


// -----------------------------------------------------------------------------------
/* It repeats the task after interval ;

@solverharsh ➜ /workspaces/Javascript_Concepts/setTimeOut (main) $ node setInterval.js
Alaram has been set
Subah ho gayi uth jao !!
Subah ho gayi uth jao !!
Subah ho gayi uth jao !!
Subah ho gayi uth jao !!
Subah ho gayi uth jao !!
Subah ho gayi uth jao !!
Subah ho gayi uth jao !!
^C
@solverharsh ➜ /workspaces/Javascript_Concepts/setTimeOut (main) $ clear

*/