// fmn that is call after some time after the argumments is called called callback function


// function greet(name ) {
 
//     console.log("cal back function " , name );
//     return 1;
// }


// function printresult( callBack) {
//     console.log(callBack("ashish choudhary"),"test");
    
// }
// printresult(greet);

// parent function

// function calculate(a, b, operation) {
//     return operation( a , b );
// }    

// // callback 1 
// function add(a, b) {
//     return a + b;
// }

// // callback 2   
// function multiply(a, b) {
//     return a *b ;
// }
// // callback 3
// function subtract(a, b) {
//     return a - b;
// }

// // callback 4 
// function divide (a, b ){
//     return a /b ;
// }
// console.log(calculate( 10 , 20  , multiply));

// console.log(calculate( 10 , 20  , add));
// console.log(calculate( 100 , 20  , subtract));
// console.log(calculate( 10 , 20  , divide));



// function multiply(factor )
// {
//     return function (number) {
//         return number * factor;
//     }
// }

// const triple = multiply(3) 
// console.log(triple(10));

// now we have to do for penta number


// function multiply(factor)
// {
//     return function (number) {
//         return number * factor;
//     }
// }

// const penta = multiply(3);
// console.log(penta(10));


function outer ()
{
    let count  =0;
    function increment ()
    {
        count ++;
        console.log(count);        
    }
    return increment;
}
const result = outer ();
result();
result();   





