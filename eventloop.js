function sum ()
{
    console.log(2+4);
}
console.log("start")
console.log("run ");
console.log("end");
sum();

setTimeout(() => {
    console.log("this is set timeout");
} , 2000 );

 setInterval(() => {
     console.log("this is set interval");
 } , 2000 );

 console.log("end");


 // what is api 
 // ans = application programming interface , it is a set of rules and protocols that allows different 
 // software applications to communicate with each other. APIs define how requests and responses should be structured, 
 // enabling developers to interact with external services, libraries, or platforms without needing to understand their internal workings.
 // APIs can be used for various purposes, such as accessing data, integrating third-party services, or building complex applications by 
 // leveraging existing functionalities.


 // eventloop structure
 // 1. callback queue
 // 2. microtask queue
 // 3. task queue
    // event loop is a programming construct that allows JavaScript to perform non-blocking operations by offloading tasks to the browser's APIs,
    //  allowing the main thread to continue executing other tasks while waiting for the callbacks to complete.

 