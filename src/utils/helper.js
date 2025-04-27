const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emily",
  "Frank",
  "Grace",
  "Henry",
  "Ivy",
  "Jack",
];

const exampleMessages = [
  "Hello, world!",
  "Have a great day!",
  "JavaScript is fun!",
  "Coding is awesome!",
  "Keep learning and growing!",
];

function generateRandomIndex() {
  return this[Math.floor(Math.random() * this.length)];
}

export const generateRandomNames = generateRandomIndex.bind(names);
export const generateRandomMessages = generateRandomIndex.bind(exampleMessages);
