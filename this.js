// console.log(this);

// function test()
// {
//     console.log(this);
// }
// test();


// console.log(this);

// // here this keyword refer to global object which
// //  is window in browser and global in node js
// function test()
// {
//     console.log(this);
// }
// test();


// const user ={
//     name: "ashish",
//     greet:() => {
//         console.log(this);
//     }
// }
// user.greet();




// function inside object  called method #####
// const obj = {
//     name : "ashish",
//     regular(){
//         console.log(this);
//     },
//     anonymous : function(){
//         console.log(this);
//     },
//     arrowfn : ()=>{
//         console.log(this);
//     }
// };

// obj.regular();
// obj.anonymous();
// obj.arrowfn();

// const test = () => {
//     console.log("this is the test");
// };

// const testobj = {
//     test,
// };
//  test ();  // function
//  testobj.test();  // method

//  console.log(testobj);  // function definition


// const playing ={
//     name : "ashish",
//     greet : function() {
//         const football = () => {
//             console.log(this);
//         }
//        football();
//     }
    
// }
// playing.greet();


// function greet(){   
//     console.log(this);
// }
// const person1 ={
//     name : "ashish1",

// }
// const person2 ={
//     name : "ashish2",
    
// }
// greet.call(person1);
// greet.call(person2);

const user ={
    name : "ashish",
    anonymousfn : function() {
        console.log("anonymous function", this.name);
        const arrowfn = () => {
            console.log("arrow function", this.name);
        }
        arrowfn();
    }
}
const anotherUser = {
    name : "another user",
}
user.anonymousfn();
user.anonymousfn.call(anotherUser);