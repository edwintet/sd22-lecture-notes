// this is a single line comment.
/*

this is a multi comment

I can have multiple lines

*/

// Variables
/* 
     Containers that store data in memory.
     * variable declaration
        * allowing the memory space to be reserved
        * declarations start with let, var, or const
        * declarations cannot start with a number, or most characters other than $ or _
        * default value is undefined (apart from const)
        * weakly typed language (no need to declare data type)
     * vaiable initilization
        * assigning a value to our variable  
*/
// (1)    (2)   (3)  (4)
   let firstName = "Edwin";
console.log(firstName);

// 1. variable declaration
// 2. variable's identifier
// 3. assigment operator
// 4. value initialization

let lastName;
console.log(lastName);

lastName = "Tesen"
console.log(lastName);

var age = 27;
console.log(age);
// ! old, you will encounter it but use let instead.

// const isInstructor;
// console.log(isInstructor);
// isInstructor = true;
// console.log(isInstructor);

// ! Const must always be declaed AND initialized

const isInstructor = true;
console.log(isInstructor);

let checkingBools;
console.log(Boolean(checkingBools));

// let age = 46;
// console.log(age)
// ! SyntaxError: Identifier has already been declared.
// ! Common problem. Variable declaration can only happen once in scope.

// Best Practices for Variables
/* 
     * Be concise (ex: firstName instead of myusersfirstname)
     * Be specific (ex: getValue instead of i)
     * Utilize camelCase, snake_case, PascalCase, or skewer-case
     * You can use nocase and SCREAMING_CASE.
     * Think of a variable as a name that points to a value (ex: let snack = "apple")
*/

// Assigning Variables to other variables

let sisterName = "None";
console.log(sisterName);
let mySiblings = sisterName;
console.log(mySiblings);
console.log("++++++++++");
console.log(sisterName);
sisterName = "Julia";
console.log(mySiblings);




if () {
    //block scope

    {

    }
}

function fxName() {

}


// Equal and Strict Equal Operators

/*
   Comparision Operators ( == and ===) are used to check if the values to the left and right of the operator are equal.
*/

console.log(5 == 5);

console.log(3 == 5);

// Equality comparison operator checks if values of the expression are the same. Ex:

console.log ( 2 == "2"); // return true

// Strict equality comparison operator checks if values AND data types of both sides of the expression are true.

console.log( 2 === "2"); // return false


/* 
    Set 7 to 8 variables:
    fName; lName; houseNumber; (if applicable)
    ; street; city; state; post code; and concatenate
    them together to create your address stamp.
    Assign all of these values to console log to a new variable called myAddress
*/

let fName = "Edwin ";
let lName = "Tesen";
let houseNumber = ", 700";
let street = " West Meade Blvd,";
let city = " Franklin";
let state = " TN"; 
let postCode = ", 37064";

let myAddress = fName + lName + houseNumber + street + city + state + postCode
console.log(myAddress)