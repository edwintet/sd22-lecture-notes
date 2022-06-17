// Objects

/* 
    Object - container for values in JavaScript Object Notation format (JSON)
    -  exists as a string
    -  has properties and methods
        - .property
        - .method()
    - has .this keyword    

*/

let abby = {
  species: "dog",
  color: "brown",
  spayed: true,
  breed: "mutt",
  weight: 40,
  favoriteActivity: "chasing squirrels",
};

console.log(abby); //shows us entire object with all key:value pairs

console.table(abby); // display objects in a table format
console.log(abby.species); // acces property values abby.species returns "dog"
console.log(abby["color"]); // acces object using keys

let returnKeys = Object.keys(abby); //returns an array of all properties/keys of our object literal
console.log(returnKeys);

let returnValues = Object.values(abby); // returns an array of all properties/keys of our object literal
console.log(returnValues);

// ? Property & Value Creation

// Creat an object mcmChair with property of frame, frameFinish; cushion; upholstery

let mcmChair = {
  frame: "",
  frameFinish: undefined,
  cushion: undefined,
  upholstery: "leather",
};
mcmChair.frame = "stainless chrome"; // value reassignment
mcmChair["frameFinish"] = "chrome"; // value reassignment
mcmChair.newWhat = "haha"; // property creation

// ! Property creation requires a value be assigned.
console.log(mcmChair);

let netflix = {
  id: 9,
  likes: 932,
  name: "The God Place",
  seasonInf: {
    season1: {
      numberOfEpisodes: 5,
      episodeInfo: [
        { episode: 1, episodeName: "Pilot" },
        { episode: 2, episodeName: "Flying" },
        { episode: 3, episodeName: "Tahani Al-Jamil" },
        { episode: 4, episodeName: "Jason Mendoza" },
        { episode: 5, episodeName: "Category 55 Emergency" },
      ],
    },
    season2: {
      numberOfEpisodes: 6,
      episodeInfo: [
        { episode: 1, episodeName: "Everything" },
        { episode: 2, episodeName: "Dance Dance Resolution" },
        { episode: 3, episodeName: "Team Cockroach" },
        { episode: 4, episodeName: "Existential crisis" },
        { episode: 5, episodeName: "Emergency" },
        { episode: 6, episodeName: "The Trolley Problem" },
      ],
    },
  },
};

// Console log me the episodeName property of season1 episode 1

console.log(netflix.seasonInf.season1.episodeInfo[1].episodeName);

// add a season 3 that looks just like seasons 1 & 2
//Assign episodeInfo property to season 3 with an array with two episodes
netflix.seasonInf.season3 = {
  numberOfEpisodes: 2,
  episodeInfo: [
    { episode: 1, episodeName: "Nothing" },
    { episode: 2, episodeName: "Everything" },
  ],
};
//Assign a property called total seasons to the object with a value of what the total seasons are
netflix.totalSeasons = 3;

console.log(netflix.seasonInf.season3);

// ? Deletion
console.log(mcmChair);

delete mcmChair.newWhat; // deletex a property from an object

// ! Dangerous - future acces compromised and error-prone

// INstead

mcmChair.newKey = null; // reassign to null instead

/* function gpa(grade) {
  let gradesToWeight = Object.values(grade);
  let gradeSum = 0;
  let weightSum = 0;
  gradesToWeight.forEach((key) => {
    gradeSum += grade[key].grade * grade[key].weight;
    weightSum += grade[key].weight;
  });
  return gradeSum / weightSum;
}
 */

// Creating Methods

/* 
Method is a function attached to an object as a property.

*/

let dog = {
  name: "Bentley",
  color: "fawn",
  age: 8,

  speak() {
    console.log("Bark!");
  },
  sti() {
    console.log("Sat down.");
  },
  getName() {
    console.log(`Hello, my name is ${this.name}`);
  },
  getBreed(breed) {
    console.log(`Hello, my name is ${this.name} and I'm an ${breed}`);
  },
};

dog.speak();
