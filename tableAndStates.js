/* 

Allow us to associate strigns with a list of other values.

It's quick and efficient.

Ex: months { "January": ["Jan", 01, 1, "I"]}
*/

function getPoemTitle(authorUserSelect) {
  let poemTitlesByAuthor = {
    "Robert Frost": "Stopping by Woods on a Snowy evening",
    "Shell Silverstein": "Falling Up",
    "Sylvia Plath": ["The Bell Jat", "Daddy", "Lady Lazarus"],
  };
  return poemTitlesByAuthor[authorUserSelect];
}

console.log(getPoemTitle("Sylvia Plath"));

function getSongFromMusician(musician) {}

//State Machine

/* 
   System with finite and defined states. States are just information. The information is realiant upo logic in order to transition or be reassigned.
   
*/

let trafficLight = {
  red: ["green", "yield"],
  yellow: ["red"],
  green: ["yellow"],
  yield: ["red"],
};

let currentState = "green";

function enterState(newState) {
  let validTransitions = states[currentState];
  if (validTransitions.includes(newState)) {
    validTransitions.includes(newState);
    currentState = newState;
  } else {
    throw `Invalid state transition from ${currentState} to ${newState}`;
  }
}

enterState();
