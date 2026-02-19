// function user (name, age) {
//    ((this.name = name),(this.age = age));
//     // this.login = function() {
//     //     console.log(`${this.name} has logged in`);
//     // }
// }
// user.prototype.login = function(){
//     console.log(`${this.name} has logged in`);
// }
// const u1 = new user( "ashish",21);
// const u2 = new user( "savan",22);
// // console.log("user1", u1);
// // console.log("user2" , u2);

// u1.login();
// u2.login();
// console.log(u1.login ===u2.login); // true, because both instances share the same login method from the prototype
// console.log(u1.login === u2.login); // false, because each instance has its own copy of the login method


// constructor ques

function user(name)
 { this.name = name; }

const u4 = user("deep");
    console.log(u4); // undefined, because the function is called without 'new', so it doesn't return an object and
                //  'this' refers to the global object (window in browsers), which is not what we want. 
                // The name property is added to the global object instead of a new user instance.

console.log(name) // error, name is not defined in the global scope

function person(name) {
    this.name = name;
    return { name: "satyam" }; 
    // in short the return statement in a constructor function can override the default behavior of returning
    //  the newly created object.
}
const p1 = new person("ashish");
console.log(p1.name);