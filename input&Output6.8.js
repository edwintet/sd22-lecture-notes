// IO & Callbacks Lesson

/*
   * Process is an event that currently runs in the foreground or background on your local machine.

   * Node.js allows acces to its processes via a process object.

   *  This helps us deal with processing external input and internal output (IO) into and out of our file/program. The file becomes a process when it's executed.

   * This is done using process.stdin and process.stdout properties.

*/

// import { stdin, stdout } from "node:process"

// console.log("Hello")

//process.stdin.once("data", (input) =>{
//  console.log(input.toString())
//} )

// Event Listeners

/*
     Ex:  .once() method

     * Away to handling user input
     * They take two parameters: (event, and action)
       * Event specifies when the action will fire
       * Action is a callback function that does something when the event occurs.
       

 */

// Callback Functions

/*
         * Are simply function thath will be called upo inside of another function or a method when an event occurs.
     
     */

// Example of callback function inside another function

function getName(name) {
  return name;
}

function getPorsche(winnerName) {
  let winner = getName(winnerName); // getName() calls back to its creation and executes, then returns its result and saves into the winner variab
  console.log(`Congrats! You won a Porsche 911, ${winner}`);
}

// getPorsche("Edwin");

//process.stdin.once("data", function (input) {
//console.log(input.toString());
//});

/*
   Let's setup a listen on standard-input (stdin)
   so that when we type something, node will
   reply with what we say + the world... butss".

   We also created thanksForPlaying function 
   that is being used as a callback when the 
   event listener inside handleInput senses
   an event. This prints lines 69-70 to the
   console and exits node process.
*/

function handleInput(input) {
  console.log(input.toString().trim() + " ...butts.");
  process.stdin.once("data", thanksForPlaying);
}

function thanksForPlaying(input) {
  console.log(input.toString().trim() + "... Thanks for playing");
  console.log("All done.");
}

//process.stdin.once("data", handleInput);

// import { stdin, stdout } from "node:process";

process.stdin.on("data", (input) => {
  //Writable Stream (0) of IO
  process.stdout.write(`This is the input: ${input.toString()}`);
});

process.stdin.on("end", () => {
  process.stdout.write("Fire only during graceful end.");
});
