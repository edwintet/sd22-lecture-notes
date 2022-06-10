/*
Overview:
  Use a variable to represent the current number, starting at 1
  If the number is evenly divisible by three
    Then print 'Fizz'
  If the number is evenly divisible by five
    Then print 'Buzz'
  If the number is evenly divisible by five and three
    Then print 'FizzBuzz'
  Otherwise, print the number itself
  Increment the number by one
  Keep looping while the number is less or equal to thirty
*/

/* function fizzBuzz(maxiumum) {
  let currentNumber = 1;

  while (currentNumber <= maxiumum //some condition ) {
    if (currentNumber % 5 == 0 && currentNumber % 3 == 0) {
      console.log("FizzBuzz");
    } else {
      if (currentNumber % 3 == 0) {
        console.log("Fizz");
      } else {
        if (currentNumber % 5 == 0) {
          console.log("Buzz");
        } else {
          console.log(currentNumber);
        }
      }
    }
    currentNumber += 1;
  } 
}
fizzBuzz(30);*/
/* // Do not update below this line
  module.exports = { fizzBuzz }; */

let fizzBuzz = (number) => {
  if (!isNaN(number)) {
    for (let i = 0; i <= number; i++) {
      if (i % 15 == 0) {
        console.log("FizzBuzz");
      } else if (i % 3 == 0) {
        console.log("Fizz");
      } else if (i % 5 == 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  } else {
    console.log("Try with a number!");
  }
};

//fizzBuzz("Hola");

/*  fizzBuzz(30) */

//process.stdin.on("data", (input) => {
//process.stdout.write(typeof parseInt(input));
//});

process.stdin.on("data", fizzBuzz); //Inputs data from outside of node into our fizzbuzz
