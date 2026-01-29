// const array = [1, 2, 3, 4, {"ashish": 5}, 6, 7, 8, 9];

// console.log(array[4]);

// // second way to create a arrayd ######
// // in constructor. idf we pass single value it will consider as length of array
// let b = new Array(10, 5);
// console.log(b);

//  let c = m=Array.of(1, 2, 3, 4, 5, 6);
//     console.log(c[4]); 



// methods of array #####

//push nad pop ####
// let fruits = ["apple", "banana", "grapes"];
// fruits.push("mango");
// console.log(fruits);

// let removedFruit = fruits.pop();
// console.log(fruits);
// console.log(removedFruit);

// unshift and shift ####

// const cars =["BMW", "Audi", "Mercedes"];
// cars.unshift("Toyota");
// console.log(cars);

// const removedCar = cars.shift();
// console.log(cars);  
// console.log(removedCar);

// // slice 

// const animals = ["cat", "dog", "elephant", "tiger", "lion"];
// const slicedAnimals = animals.slice(1);
// console.log(animals);
// console.log(slicedAnimals);


// const arr = [{name: "ashish"}, {age: 25}, {city: "pune"}];

// const sliced = arr.slice(2);

// console.log(sliced);
// console.log(arr);

// sliced[0].city = "mumbai";

// console.log(sliced);
// console.log(arr);

// splice #####
// remove
const cars = ["BMW", "Audi", "Mercedes", "Toyota", "Honda"];
// let removedCars = cars.splice(1, 3);
// console.log(cars);
// console.log(removedCars);

//add 
//  let removedCar = cars.splice(1, 0, "Ford", "Chevrolet");
// console.log(cars);

// replace
console.log(cars);
 let replacedCars = cars.splice(2, 2, "Hyundai", "Kia");
console.log(cars);
console.log(replacedCars);

