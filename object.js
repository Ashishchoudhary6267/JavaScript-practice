// // destructing objects
// const user ={
//     name :"ashish",
//     age: 33 ,
//     city: "pune",
// }
// //  console.log(user);

// //  const {name, age, city} = user;

// //  console.log(name);


//  // renaming while destructing
//     const {name: userName, age: userAge, city: userCity} = user;

//     console.log(userName);
//     console.log(userAge);
//     console.log(userCity);


//     // nested objects destructing   
//     const person = {
//         name: "ashish",
//         age: 33,
//         city: "pune",
//         address: {
//             street: "main road",
//             zip: 411001,
//         },
//     };

//     const {address: {street, zip}} = person;
//     console.log(street);
//     console.log(zip);
        


// const name = 'Harman';
// const age = 24;
// const state = 'Punjab'

// const user = {
//   name,
//   age,
//   state
// }

// console.log(user);

// const { name : username, age: userage , state: delhi 
// } = user;

// console.log(name);
// console.log(age);
// console.log(state);


// const major = {
//     name : "savan ",
//     greet : () => {
//         console.log("greet");
//     }
// }
// major.greet();


// object questions


// const obj = {
//     a :10 ,
//     b :{
//         a: 20,
//     },
// };

// const x = obj.b;
// x.a = 30;

// console.log(obj.b.a);


// const obj = {
//     a :1
// }
// Object.seal(obj);
// obj.a = 10;
// delete obj.a;
// console.log(obj);

// const obj ={
//     a :1,
//     b :{
//         c :2,
//     },

// }
// Object.freeze(obj);
// obj.b.c = 10;
// console.log(obj.b.c);

// function inside object  called method #####
const obj = {
    name : "ashish",
    regular(){
        console.log(this);
    },
    anonymous : function(){
        console.log(this);
    },
    arrowfn : ()=>{
        console.log(this);
    }
};

obj.regular();
obj.anonymous();
obj.arrowfn();
const test = () => {
    console.log("this is the test");
};

const testobj = {
    test,
};
 test ();  // function
 testobj.test();  // method

 console.log(testobj);  // function definition

