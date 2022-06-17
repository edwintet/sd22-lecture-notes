// Introduction to array
["a string", 10, true];
//^start      ^item2   ^end
//      ^item1   ^item3

let value = true; //Boolean, data type
let myNumber = 42; // Number, data type

let hello = function (message) {
  console.log(`Hello, ${message}`);
};
let myArray = []; // Array, Object, data type
myArray = [
  1,
  "some string here",
  true,
  false,
  [
    "look another array",
    "can we have another?",
    ["another array inside an array"],
  ],
  hello,
];
console.log("The array is: ", myArray);
console.log("Calling the funcion, ", myArray[5]("Joshua !"));

let fruits = ["apple", "banana", "cherry"]; //start
//['apple', 'banana', 'cherry', 'blueberry', 'pineaple']
// How should I do this?
//
// 1) fruits[4] = 'blueberry'
// 2) fruits[5] = 'pineaple'
// 3) fruits[42] = 'peache'

console.log(fruits);
//fruits[3] = "blueberry";
fruits[fruits.length] = "blueberry";
console.log(fruits);
fruits[4] = "pineapple";
console.log(fruits);
fruits[42] = "peach";
console.log(fruits);
