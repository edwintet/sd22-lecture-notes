let addOne = (i) => console.log(i + 1);
addOne(1); 
addOne(2); 
addOne(41); 
addOne(-2); 
addOne(-43); 

let age = 27;
function ageCalc(num) {
  let secondsInMin = 60;
  let minInHour = 60;
  let hrInDay = 24;
  let dayInYr = 365.25;

  let secInYr = secondsInMin * minInHour * hrInDay * dayInYr;

  let ageInSec = num * secInYr;

  return ageInSec;
}

console.log(ageCalc(age));

// let date = new Date(1992, 05, 12, 3, 14); //new Date(year, month, day, hour, minute)

// let ageInMilliSec = Date.now() - date;

function supplyCal( age, perDay, itemName){
    let perYear = perDay *365;
    let numberOfYear = 100 - age;
    let totalNeeded = perYear * numberOfYear

    return `You will need ${totalNeeded} ${itemName}s to last the rest of your life.`
}
console.log(supplyCal(20, 3, "cookie")) // => "You will need 87600 cookies to last the rest of your life"
console.log(supplyCal(99, 3, "cookie")) // => "You will need 1095 cookies to last the rest of your life"
console.log(supplyCal(0, 3, "cookie")) // => "You will need 109500 cookies to last the rest of your life"

function madLib(subject, action, object){
    let firstWord = subject[0];
    let restOfWord = subject.slice(1);
    let newSubject = firstWord.toUpperCase() + restOfWord.toLowerCase();
    let lowerAction = action.toLowerCase();
    let lowerObject = object.toLowerCase();
    return `${newSubject} ${lowerAction}ed the ${lowerObject}!`
}
console.log(madLib('bill', 'JUMP', 'Dog'))