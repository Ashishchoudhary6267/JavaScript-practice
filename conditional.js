// conditionl statements #####
//falsy : false , 0 , "" , null , undefined , NaN
//truthy : 1 , -1 , "ashish" , [] , {}, "0", " ", function(){}

// if( " ")
// {
//     console.log("truthy value");
// }
// else{
//     console.log("falsy value");
// }
// if("")
// {
//     console.log("truthy value" );
// }
// else{
//     console.log("falsy value");
// }
// if([])
// {
//     console.log("truthy value" );   
// }else{
//     console.log("falsy value");
// }

// console.log([] == false);

// use elseuf for multiple conditions #####

// let age = 17;

// if(age >= 19){
//     console.log("you can vote");
// }
// else if(age >= 18){
//     console.log("you can vote");
// }
// else{
//     console.log("you can't vote");
// }
// use else if method for grading system
// can we use here a operator ?
// and operator &&
// or operator |
// for all the grades above 50 pass else fail make all the grades a ,b ,c ,d ,e, fail ###

// let marks = 76;
// if(marks >= 50 && marks < 60){  
//     console.log("E grade");
// }
// else if(marks >= 60 && marks < 70){
//     console.log("D grade");
// }
// else if(marks >= 70 && marks < 80){
//     console.log("C grade");
// }
// else if(marks >= 80 && marks < 90){
//     console.log("B grade");
// }
// else if(marks >= 90){
//     console.log("A grade");
// }
// else{
//     console.log("F grade");
// }

// trafic signal  ####
let signal = "green" ;

if(signal === "red"){
    console.log("stop");
}
else if(signal === "yellow"){
    console.log("wait");
}
else if(signal === "green"){
    console.log("go");
}

// //switch stagement
// let day = 40;
// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     default:
//         console.log("invalid day");
// }
// // trafic light with switch statement
// let signal2 = "green";
// switch(signal2){
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("wait");
//         break;
//     default:
//         console.log("go");
//}


// whenn evere run the dice it should give a random number between 1 to 6  with math.random()  and math.floor()  and switchstatement  ###
const dice = Math.floor(Math.random() * 6) + 1;

switch(dice){
    case 1:
        console.log("you rolled 1");
        break;
    case 2 :
        console.log("you rollled  2");
        break;
    case 3:
        console.log("you rolled  3");
        break;
    case 4:
        console.log("you rolled  4");
        break;
    case 5:
        console.log("you rolled  5");
        break;
    case 6:
        console.log("you rolled  6");
        break;

}

//ternary operator ###

//condition ? true block : false block
const  isadult = 23;
console.log( isadult >= 18 ? "you can vote" : "you can't vote");
// for drive license
console.log(isadult >= 18 ? "you can drive" : "you can't drive");
