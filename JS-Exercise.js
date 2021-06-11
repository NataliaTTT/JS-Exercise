//JS Exercise 1 - Training Days

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// The scope of `days` is too tight
const getTrainingDays = (event) => {
  let days;
  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }
  return days;
};

// The scope of `name` is too tight
const name = "Nala";
const logEvent = (name, event) => {
  //const name = "Nala";
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  //const name = "Nala";
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime

logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = "Warren";

logEvent(name2, event2);
logTime(name2, days2);

//JS Exercise 2 - Secret Message
let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];
console.log(secretMessage.length);
let last = secretMessage.pop();
console.log(secretMessage.length);
let newLength = secretMessage.push("to", "Program");
console.log(secretMessage.length);
console.log(secretMessage.indexOf("easily"));
secretMessage[7] = "right";
let first = secretMessage.shift();
console.log(secretMessage.length);
let newLength1 = secretMessage.unshift("Programming");
console.log(secretMessage.length);
console.log(secretMessage.indexOf("get"));
console.log(secretMessage.indexOf("time,"));
let remove = secretMessage.slice(6, 11);
let replace = secretMessage.splice(6, 5, "know,");
console.log(secretMessage.join(" ")); //Programming is not about what you know, it is about what you can figure out. -2015, Chris Pine, Learn to Program

