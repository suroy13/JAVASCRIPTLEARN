/* Immediately Invoked Function Expressions (IIFI)
The function thats executes immidiately is called IIFE 
*/
(
    function name() {
// its  a named IIFI
        console.log("Hi I am IIFI");
        
    }
)(); // always use : to ternimate the function scope 

//-------
(
 name1 = () => {console.log("Hi I am an IIFE Arrow function")
    // Unnamed IIFE
}
)();
//-------
(
    //Parameter passed IIFE
    (name)=> {console.log(`Hi My name is ${name}`);}
)('Subhankar');