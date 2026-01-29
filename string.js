// // const str = "ashish ";

// // console.log(`hello ${str}`);
// // console.log(str, "hello");
// // console.log(typeof str);


// //  ###### string methods ######

// // const str1 = new String("asdfgh");
// // console.log(typeof str1)

// // name 
// // const str3 =("ashish");
// // console.log(str3.length)

// // //empty string length 
// // const str4 = "" ;
// // console.log(str4.length) ;

// // // string with single space

// // const str5 = " ";
// // console.log(str5.length);

// // // last letter
// // const name2 = "choudhary";
// // let lastLetter = "";

// // for (let i = 0; i < name2.length; i++) {
// //     lastLetter = name2[i]; 
// // }

// // console.log("last letter", lastLetter); 

// // // find first
// // let firstLetter = "";

// // for (let i = 0; i < name2.length; i++) {
// //     if (i === 0) {
// //         firstLetter = name2[i];
// //     }
// // }
// // console.log("first letter", firstLetter);

// const name2 = "choudhary";

// console.log(name2.charAt(4));
// console.log(name2.charCodeAt(0)); // utf -8
// // extracting 
// console.log(name2.slice(-6, -2));
// console.log(name2.substring(8 , 4));

// console.log(name2.substring(4, 3));

// // searching
// //includes
// const str = "ashish choudhary";
// console.log(name2.includes("ii"));

// console.log(name2.startsWith("dhary"));

// // indexof


// const str2 = "ashish choudhary choudhary";
// console.log(str2.indexOf("a"));
// console.log(str2.lastIndexOf("a"));
// // replace 
// console.log(str2.replace("choudhary", "kumar"));
// //split
//  // const myArray = str2.split(" ");
// const myArray = str2.split(" ").reverse().join("_");
// console.log(myArray);

//reverse a string
// const str4 = "ashish kumar choudhary";
// const reversedStr = str4.split("").reverse().join("");
// console.log(reversedStr);

//prototype to reverse the string  (#####)

// console.log(String.prototype);
// console.log(Object.getOwnPropertyNames(String.prototype));

// String.prototype.ashish_reverse_method = function() {
//     return this.split("").reverse().join("");
// }
// const str5 = "ashish";
// console.log(str5.ashish_reverse_method());
// console.log(Object.getOwnPropertyNames(String.prototype));

// // prototype to change string first letter to uppercase (#####)
// String.prototype.ashish_uppercase_method = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// }
// const str6 = "ashish";
// console.log(Object.getOwnPropertyNames(String.prototype));

// console.log(str6.ashish_uppercase_method());


//   #### number  ####


// let a = "12"  ;
// let b = 47.5 ;
// let c = 30 ;
// // console.log(typeof a);
// // console.log(typeof b);

// console.log(a /0);
// console.log(-a /0);
// console.log("ashish" / 2);
// console.log("5" - 5 ); 


// // arithmetic methods

// console.log(Number.isFinite(a));
// console.log(Number.isInteger(b));
 
// // + , -
// console.log(a + c);
// console.log(b - c);

//  ### constructor ###
// console.log(Number("23a"));

// console.log( Number.isNaN("25a"));

// console.log( Number.isInteger(10));
// console.log(Number.isInteger(10.5));
// console.log(0.8 +0.8 === 0.16);
 //toFixed it is a strig method 
//  console.log((0.8 +0.8).toFixed(1) == 1.6); 

 //epsilon   refer to smallest value in js ###################

// console.log(0.1 +0.2 -0.3  < Number.EPSILON);
// console.log(Number.EPSILON < 0)

// const a= 0.3 +0.4;
// // console.log(a === 0.3);
// console.log(Math.abs(a - 0.3) );
// console.log(Math.abs(a - 0.3) < Number.EPSILON);
// console.log(a)
// console.log(Number.EPSILON)

// console.log(Number.isFinite("25"));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isNaN(Number("ashisha3")));

// // parseInt
// console.log(Number.parseInt("23.5abc")); //23
// console.log(Number.parseInt("asd23.5abc")); //NaN
// console.log(parseInt("2.asd67")); 

// // parsefloat 
//  console.log(Number.parseFloat("23.5abc")); //23.5

//     console.log(Number.parseFloat("asd23.5abc")); //NaN

// iseven #####
// Number.prototype.ashish_isEven = (num)=> {
//      return num % 2 === 0;   
// }
// const num1 = 24;
// console.log(num1.ashish_isEven(num1));
// console.log(Object.getOwnPropertyNames(Number.prototype));

// // isodd #####
// Number.prototype.ashish_isOdd = (num) => {
//     return num % 2 !== 0;
// }  
// const num2 = 25;
// console.log(num2.ashish_isOdd(num2));
// console.log(Object.getOwnPropertyNames(Number.prototype));
// //postive #####
// Number.prototype.ashish_isPositive = (num) => {
//       return num > 0;
// }
// const num3 = -5;
// console.log(num3.ashish_isPositive(num3));
// console.log(Object.getOwnPropertyNames(Number.prototype));

// // negtaive #####
// Number.prototype.ashish_negative = (num) =>{
//    return num  < 0;
// }
// const num4 = -10;
// console.log(num4.ashish_negative(num4));
// console.log(Object.getOwnPropertyNames(Number.prototype));

// maths #####

// precedence
//()
//*
//*/ %
//+ -

// console.log(3 + 5 * 2); // 13
// console.log((3 + 5) * 2); //16

// console.log(Math.PI);
// console.log(Math.E);

// console.log(Math.round(4.6)); // it will return nearest integer
// console.log(Math.floor(4.9)); // it will return previous integer
// console.log(Math.ceil(4.1)); // it will return next integer
// console.log(Math.abs(-5));  // it will return positive value
// console.log(Math.trunc(42345.9)); // it will remove decimal value 
// console.log(Math.pow(2, 8)); // it will return power value
// console.log(Math.sqrt(64)); // it will return square root value
// console.log(Math.min(2, 5, -1, 0, 9)); // it will return minimum value
// console.log(Math.max(2, 5, -1, -1, 9)); // it will return maximum value
// console.log(Math.sign(-5)); // it will return -1 for negative , 1 for positive ,0 for zero
// console.log(Math.random()); // it will return random value between 0 and 1

// math.rendom  to generate random number between 1 to 10 but no negative value only postive value
const randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);

// make number.prototype to generate random number between two numbers
Number.prototype.ashish_randomBetween = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const num5 = 0;
console.log(num5.ashish_randomBetween(23, 100));
console.log(Object.getOwnPropertyNames(Number.prototype));

console.log(num5);
