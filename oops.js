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

// function user(name)
//  { this.name = name; }

// const u4 = user("deep");
//     console.log(u4); // undefined, because the function is called without 'new', so it doesn't return an object and
//                 //  'this' refers to the global object (window in browsers), which is not what we want. 
//                 // The name property is added to the global object instead of a new user instance.

// console.log(name) // error, name is not defined in the global scope

// function person(name) {
//     this.name = name;
//     return { name: "satyam" }; 
//     // in short the return statement in a constructor function can override the default behavior of returning
//     //  the newly created object.
// }
// const p1 = new person("ashish");
// console.log(p1.name);




// classes in js ########

// class user {
//     constructor(name, age) {
//         this.name = name ;
//         this.age = age ;
//     }
// }

// const u1 = new user("ashish", 21);
// console.log(u1); // user { name: 'ashish', age: 21 }


// class person{
//     internaly ()
//     {
//         console.log(this)
//     }
// }
// const p1 = new person();
// console.log(p1);
// p1.internaly();

// inheritance in js #######################

// class user2  {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     } 
//      login() {
//         console.log(`${this.name} has logged in`);
//     }
// }
// class admin extends user2 {
//     constructor(name, email, role) {
//         super(name, email); // call the parent class constructor to initialize the name and email properties
//         this.role = role;
//     }
//     test() {
//         console.log(this);
//     }
// }
// const a1 = new admin("ashish", "ashish@gmail", "admin");
// console.log(a1); // admin { name: 'ashish', email: 'ashish@gmail', role: 'admin' }
// a1.login(); 


// inhertance concept  ##########################

// class employee{
//     constructor(name, salary) {
//         this.name = name;
//         this.salary = salary;
//     }

//     getdetails()
//     {
//         return `${this.name} earns rs ${this.salary}`;
//     }
// }
// class manager extends employee {
//     constructor(name, salary, teamSize, ) {
//         super(name, salary);
//         this.teamSize = teamSize;
//     }
//     getdetails()
//     {
//          return `${this.name} earns rs ${this.salary} and manages a team of ${this.teamSize} members`;
//     }
// }
// const e1 = new employee("ashish", "50","5");
// console.log(e1.getdetails()); // ashish earns rs 50
// console.log(e1); // employee { name: 'ashish', salary: '50' }
// const m1 = new manager("satyam", "100", "10");
// console.log(m1.getdetails());



// class royalenfield {
//     constructor(name, model) {
//         this.name = name;
//         this.model = model;
//     }
//     readyToGo() {
//         console.log(`${this.name} ${this.model} is ready to go!`);
//     }
// }
// class interceptor650 extends royalenfield {
//     readyToGo() {
//         console.log(`Interceptor 650 is ready to go!`);
//         super.readyToGo();  
//     }
// }
// class continentalgt650 extends royalenfield {
//     readyToGo() {
//         console.log(`Continental GT 650 is ready to go!`);
//         super.readyToGo();  
//     }
// }
// const bike1 = new interceptor650("Royal Enfield", "Interceptor 650");
// bike1.readyToGo(); 
// const bike2 = new continentalgt650("Royal Enfield", "Continental GT 650");
// bike2.readyToGo(); 


// // multi level inheritance  ##################

// // defination : Multi-level inheritance is a type of inheritance in object-oriented programming where a class is derived from another class,
// //  which is itself derived from a third class. In this hierarchy, the child class inherits properties and behaviors from the parent class,
// //  and the parent class inherits from the grandparent class.

// class grandparent {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class parent extends grandparent {
//     constructor(name, age) {
//         super(name);
//         this.age = age;
//     }
// }   
// class  child extends parent{
//     constructor(name, age, school)
//     {
//         super(name, age )
//         this.school= school;
//     }
// }
// const c1  = new child ("ashish" , 21, "DAV public school");
// console.log(c1);


// hierarchical inheritance ##############################

// class animal{
//     constructor(name){
//         this.name = name;
//     }
// }
// class dog1 extends animal{
//     constructor(name, breed, color){
//         super(name);
//         this.breed = breed ;
//         this.color = color;
//     }
// }
// class dog2 extends animal{
//     constructor(name , breed , color){
//         super(name);
//         this.breed = breed;
//         this.color = color;
//     }
// }
// class dog3 extends animal{
//     constructor(name, breed, color){
//         super(name);
//         this.breed= breed ;
//         this.color = color ;
//     }
// }
// const d1 = new dog1("gimu","labrador", "brown");
// console.log(d1);
// const d2 = new dog2("tommy", "german shepherd","black");
// console.log(d2);
// const d3 = new dog3 ("rocky", "bulldog", "white");
// console.log(d3);



// class user {
//     constructor(name , age){
//         this.name = name ;
//         this.age = age ;
//     }
//     login(){
//         console.log(`${this.name} logged in`);
//     }
// }
// // child 1
// class customer extends user {
//     deleteuser() {
//         console.log(`${this.name}  deleted a user`);
//     }

// }
// // child 2
// class customer2 extends user {
//     buyproduct() {
//         console.log(`${this.name} has bought a product`); 
//     } // buyproduct
// }
// const c1 = new customer("ashish", 25);
// const c2 = new customer2("satyam", 30);

// c1.login();
// c2.login();
// c1.deleteuser();
// c2.buyproduct();



//mixins in js #########################
// Mixins are a way to add functionality to classes in JavaScript without using traditional inheritance.


//  class animal{
//     eat(){
//         console.log("Animal is eating");
//     }
//  }
//  // mixin 
//   const canrun =  (base)=>
//      class extends base {
//         run (){
//             console.log("Animal is running");
//         }
//     }
//     class dog extends canrun(animal) {
//         bark() {
//             console.log("Dog is barking");
//         }
//     }
//     const d1 = new dog();
//     d1.bark();
//     d1.run();
//     d1.eat();


    // pronblem = multiple inheritsnce (dimond problem) ##################

class person {
    constructor(name) {
        this.name = name;
    }
    breathe() {
        console.log("person is breathing");
    }
}
// first mixin
 const canrun = (base )=> class extends base {
    run ()
    {
        console.log(`${this.name} is running`);
    }
}
    // second mixin
const canfly = (base) => class extends base {
    fly() {
        console.log(`${this.name} is flying`);
    }   
}
// third mixin
const canSwim = (base) => class extends base {
    swim() {
        console.log(`${this.name} is swimming`);
    }
} 
            // superman class that inherits from all three mixins
class superman extends canrun(canfly(canSwim(person))) {
    constructor(name) {
        super(name);
    }
}
const s1 = new superman("clark");
s1.run();
s1.fly();
s1.swim();
s1.breathe();
