// Classes

/* 
  Templates or blueprints for creating objects.

  They encapsulate data with code. JS is a protoype-based language that also has access to OOP principles.

  Classes are considered special 

*/

class Teacher {
  // class method for creation and initilization of a class object
  constructor(name, subject, tenure, isPolyglot) {
    this.name = name;
    this.subject = subject;
    this.tenure = tenure;
    this.isPolyglot = isPolyglot;
  }
  // Class body
}

// Creating new instance of Teache class
let pNiemczyk = new Teacher("Paul", "software dev", 2022, true);
// Creates new instance of a Teacher class using new operator.
// Creates an object that is a copy of a Teacher class with our defined constructors
console.log(pNiemczyk);

pNiemczyk.subject = "Physics"; // reassigns our class instance subject property

// class Expression
let House = class {
  constructor(address, bedrooms, bathrooms) {
    this.address = address;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }
};

let $10070rangeSt = new House("1007 Orange St", null, 2);

// Class Methods

/* 
    Method is a function that lives inside of a class that can be reused on any class instance.
*/

class Car {
  constructor(make, model, year, transmission) {
    this.make = make;
    this, (model = model);
    this.year = year;
    this.transmission = transmission;
  }
  greetCar() {
    console.log(`Welcome to your ${this.year}${this.make}${this.model}`);
  }
  greetDriver(driver) {
    return `Hello, ${driver}, your ${this.make} is looking sick!`;
  }
  modifyMake(make) {
    this.make = make;
  }
}

let maserati = new Car("Maserati", "GranTurismo S", 2015, "auto");

console.log(maserati.greetCar);
console.log(maserati.greetDriver("Paul"));
maserati.modifyMake("Porsche");
console.log(maserati);

// Challenge

/* 
  Create a class object called Avengers.
  It will have properties of name, superpower, age, isDead, keyMovie

  Creat an instance of that object with the superhero name and its properties

  ? Create a method that console logs the name and keyMovie together

  ! SPICEY MODE

  Create a method that takes the name of the superhero and checks it against two arrays: one with teamCap and one with teamStark and returns which team the superhero is on as part of Civil War
*/

class Avengers {
  constructor(name, superpower, age, isDead, keyMovie) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.isDead = isDead;
    this.keyMovie = keyMovie;
  }
  greetAvenger() {
    return `Hello ${this.name}, wonderfull ${this.keyMovie}`;
  }
  whichTeam() {
    let teamCap = [
      "Steve Rogers",
      "Captain America",
      "Bucky",
      "Wanda",
      "Hawkeye",
      "AntMan",
    ];
    let teamStark = [
      "Tony Stark",
      "Vision",
      "War Machine",
      "Black Panther",
      "Black Widow",
      "Natasha Romanoff",
    ];
    if (teamCap.includes(this.name)) {
      return `${this.name} is a Team Captain`;
    } else if (teamStark.includes(this.name)) {
      return `${this.name} is team Stark`;
    } else {
      return `${this.name} is not in either of our array.`;
    }
  }
}

let Thor = new Avengers("Joseph Morris", "Strong", 45, true, "Thor");
console.log(Thor.greetAvenger());

console.log(Thor.whichTeam());

//console.log(Avengers.greetAvenger());

class makeCircle {
  constructor(radius) {
    if (typeof radius === "number") {
      this.radius = radius;
    } else {
      throw "Your parameter needs to be a number";
    }
  }

  calCircumference() {
    return (this.radius * Math.PI * 2).toFixed(2);
  }
  calArea() {
    return (this.radius ** 2 * Math.PI).toFixed(2);
  }
}

let circle = new makeCircle(6);

console.log(circle.calArea());
console.log(circle.calCircumference());

class pizza {
  constructor(type) {
    if (type.includes("pineapple")) {
      throw "We dont allow to use fruits in our pizzas";
    } else {
      this.type = type;
    }
  }
}

let pineapplePizza = new pizza("peperoni");
console.log(pineapplePizza.pizza);

// Factory Functions

/* 
   Functions that accept data and return new instance of a class back to you.

   Good for modifying the data comming in for instance

  */

function circleFromDiameter(diameter) {
  return new circle(diameter / 2);
}

let newCircle = circleFromDiameter(5);

class CircleNew {
  static creatCircleUsingDiamter(diameter) {
    return new CircleNew(diameter / 2);
  }

  constructor(radius) {
    if (radius <= 0) {
      throw "Radius must be positive";
    }
    this.radius = radius;
  }
}

// Static Factory Methods
