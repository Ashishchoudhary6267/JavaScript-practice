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




// this refer to the objevct which is calling the function



//
const obj = {
  name: "Ashish",
  show: function(){
    console.log(this.name);
  }
};

const fn = obj.show;
fn();
