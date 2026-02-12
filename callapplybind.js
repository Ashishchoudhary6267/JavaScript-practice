// const array = [1, 2, 3, [4, 5]];

// let arraycopy = [...array];
// console.log(arraycopy,"test1");
// console.log(array, "test2")
// arraycopy.push(6);
// arraycopy[3][0] = 10;
// console.log(arraycopy, "test3"); 
// console.log(arraycopy,"test4");


// let array = [1, 2, 3, [4, 5]];


// let arraycopy = structuredClone(array);

// arraycopy[3][0]=20;
// console.log("original" ,array);
// console.log("copy", arraycopy);


// same this with object with changes in nested object

// const obj = {
//     a :1,
//     b :{
//         c :2,
//     },
// };

// const objcopy = structuredClone(obj);
// objcopy.b.c = 10;
// console.log("original", obj);
// console.log("copy", objcopy);


// function test (...numbers)
// {
//     console.log(numbers);

// }
// test(1, 2, 3, 4, 5);



function sum (first,second,...numbers)
{
    console.log(first);
    console.log(second);
    console.log(numbers);
    return numbers.reduce((acc, curr) => acc + curr);    
}
console.log(sum(1, 2, 3, 4, 5));