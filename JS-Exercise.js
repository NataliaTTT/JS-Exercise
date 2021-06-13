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

//JS Exercise 3 - Whale Talk

const inputString = "Just because it's over doesn't mean it's really over";
const vowels = ["a", "e", "i", "o", "u"];
resultArray = [];
for (let i = 0; i < inputString.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (inputString[i] === vowels[j]) {
      if (inputString[i] === "e" || inputString[i] === "u") {
        resultArray.push(inputString[i] + inputString[i]);
      } else {
        resultArray.push(inputString[i]);
      }
    }
  }
}
console.log(resultArray.join("").toUpperCase());//UUEEAUUEEIOEEOEEEEAIEEAOEE

//JS Exercise 4 - Loops and Arrays 

//1. Display numbers from 1 to 10
const numbersTill10 = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};
numbersTill10();

//2. Print the odd numbers less than 100
const oddNumbers = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
};
oddNumbers();

//3. Print the multiplication table with 7

const multiplication7 = () => {
  for (let i = 1; i <= 10; i++) {
    const result = i * 7;
    console.log(`7 * ${i} = ${result}`);
  }
};
multiplication7();

//4. Print all the multiplication tables with numbers from 1 to 10

const multiplication = () => {
  let i, j;
  for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
      const result = i * j;
      console.log(`${i} * ${j} = ${result}`);
    }
  }
};
multiplication();

//5. Calculate the sum of numbers from 1 to 10

let sum10 = [];
const sumOfNumbers = () => {
  for (let i = 1; i <= 10; i++) {
    sum10.push(i);
  }
  console.log(sum10);
  const reducer = (accumulator, curr) => accumulator + curr;
  sum10.reduce(reducer);
  console.log(sum10.reduce(reducer));
};
sumOfNumbers(); //55

//6. Calculate 10!
let multiply10 = [];
const multiplyOfNumbers = () => {
  for (let i = 1; i <= 10; i++) {
    multiply10.push(i);
  }
  console.log(multiply10);
  const reducer = (accumulator, curr) => accumulator * curr;
  sum10.reduce(reducer);
  console.log(multiply10.reduce(reducer));
};
multiplyOfNumbers(); //3628800

//7. Calculate the sum of odd numbers greater than 10 and less than 30
let odd10Till30 = [];
const sumOfOddNumbers = () => {
  for (let i = 10; i <= 30; i++) {
    if (i % 2 === 1) {
      odd10Till30.push(i);
    }
  }
  console.log(odd10Till30); //(10) [11, 13, 15, 17, 19, 21, 23, 25, 27, 29]
  const reducer = (accumulator, curr) => accumulator + curr;
  odd10Till30.reduce(reducer);
  console.log(odd10Till30.reduce(reducer)); //200
};
sumOfOddNumbers();

//8. Calculate the sum of numbers in an array of numbers
const sumOfArrayNumbers = (array) => {
  const reducer = (accumulator, curr) => accumulator + curr;
  array.reduce(reducer);
  console.log(array.reduce(reducer));
};
sumOfArrayNumbers([1, 2, 3]); //6

//9. Calculate the average of the numbers in an array of numbers
const averigeOfArrayNumbers = (array) => {
  const reducer = (accumulator, curr) => accumulator + curr;
  array.reduce(reducer);
  console.log(array.reduce(reducer) / array.length);
};
averigeOfArrayNumbers([1, 2, 3]); //2

//10. Create a function that receives an array of numbers and returns an array containing only the positive numbers

const positiveNumbers = (array) => {
  return array.filter((value) => value > 0);
};

console.log(positiveNumbers([0, 2, -5, 6, -7])); //2,6

//11.Find the maximum number in an array of numbers
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
console.log(getMaxOfArray([0, 2, -5, 6, -7])); //6

//12.Create a function that will return a Boolean specifying if a number is prime
const isPrime = (num) => {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let x = 2; x < num; x++) {
      if (num % x === 0) {
        return false;
      }
    }
    return true;
  }
};
console.log(isPrime(15)); //true
console.log(isPrime(3)); //false

//13.Calculate the sum of digits of a positive integer number
const integerNumber = (num) => {
  if (num > 0 && Number.isInteger(num)) {
    let sum = num
      .toString()
      .split("")
      .map(Number)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
    console.log(sum);
  } else console.log("The number is not integer!");
};
integerNumber(1359); //17

//14.Print the first 100 prime numbers

const first100Prime = () => {
  let primeArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  let x = 2;

  do {
    x++;

    if (
      x % 2 !== 0 &&
      x % 3 !== 0 &&
      x % 5 !== 0 &&
      x % 7 !== 0 &&
      x % 11 !== 0 &&
      x % 13 !== 0 &&
      x % 17 !== 0 &&
      x % 19 !== 0 &&
      x % 23 !== 0 &&
      x % 29 !== 0
    ) {
      primeArray.push(x);
    }
  } while (primeArray.length < 100);
  console.log(primeArray);
};

first100Prime(); //[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541]

//15.Rotate an array to the left 1 position
let arr15 = [7, 8, 9, 10, 11];
const rotate = () => {
  const first = arr15.shift();
  arr15.push(first);
  console.log(arr15);
};
rotate(); // [8, 9, 10, 11, 7]

//16. Reverse an array
const reverse = (arr) => {
  arr.reverse();
  console.log(arr);
};
reverse([7, 8, 9, 10, 11]); // [11, 10, 9, 8, 7]

//17.Create a function that will merge two arrays and return the result as a new array
const merge = (arr, arr2) => {
  const arr3 = [...arr, ...arr2];
  console.log(arr3);
};
merge([7, 8, 9, 10, 11], ["Saab", "Volvo", "BMW"]); //[7, 8, 9, 10, 11, "Saab", "Volvo", "BMW"]

//18.Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

const unic = (arr, arr2) => {
  //const arr3 = arr.concat(arr2.filter((value) => !arr.includes(value)));//[7, 8, 9, 10, 11, 1, 2, 5, 6]
  const arr2Unic = arr2.filter((value) => !arr.includes(value));
  const arrUnic = arr.filter((value) => !arr2.includes(value));
  console.log(arrUnic, arr2Unic);
  const arr3 = [...arrUnic, ...arr2Unic];
  console.log(arr3);
};
unic([7, 8, 9, 10, 11], [1, 2, 5, 6, 7, 8]); // [9, 10, 11, 1, 2, 5, 6]

//19.Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

const distinct = (arr) => {
  const set = new Set([...arr]);
  const arr19 = Array.from(set);
  console.log(arr19);
};
distinct([2, 4, 10, 15, 10, 22, 44, 51, 4]); // [2, 4, 10, 15, 22, 44, 51]

//20. Create a function that will return the number of words in a text

const numberOfWords = (text) => {
  res = text.split(" ");
  console.log(res); //["I", "have", "a", "dog."]
  console.log(res.length);
};
numberOfWords("I have a dog."); //4
