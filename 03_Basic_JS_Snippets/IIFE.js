// Immediately Invoked Function Expression (IIFE);
// An IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop. Having a function that behaves that way can be useful in certain situations. IIFEs prevent pollution of the global JS scope.
// Two paranthesis 
// Note : () ()
// #Use cases :
// Avoid polluting the global namespace
// Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

(function chai(){
    console.log("DB Connected");
})();

((name)=>{
    console.log(`DB Connected again by ${name}`);
})("Rahul");

// OUTPUT:-
//-----------------------------------------------------------------------------------
// @solverharsh ➜ /workspaces/Javascript_Concepts (main) $ node 03.Basic_JS_Snippets/IIFE.js
// DB Connected
// DB Connected again by Rahul