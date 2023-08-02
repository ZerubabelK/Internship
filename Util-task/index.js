const lod = require("lodash");

const numbers = [1, 2, 3, 4, 5];

const sum = lod.sum(numbers);
const sorted = lod.sortBy(numbers);

const filtered = lod.filter(numbers, (n) => n % 2 === 0);

const max = lod.max(numbers);

const chunks = lod.chunk(numbers, 3);

console.log("Chunks:", chunks);
console.log("Original array:", numbers);
console.log("Sorted array:", sorted);
console.log("Filtered array:", filtered);
console.log("Maximum value:", max);
console.log(`The sum of the array is: ${sum}`);

const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Developer",
};

const propertyNames = lod.keys(person);
console.log(`Property names: ${propertyNames}`);

const pickedProperties = lod.pick(person, ["name", "occupation"]);
console.log(`Picked properties: ${JSON.stringify(pickedProperties)}`);

const sentence = "The quick brown fox jumps over the lazy dog";

const capitalizedSentence = lod.startCase(sentence);
console.log(`Capitalized sentence: ${capitalizedSentence}`);
