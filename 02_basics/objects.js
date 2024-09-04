// declearing objects and inserting values and keys into them
const person = {};
person.name = "John";
person.age = 30;
person.isLoggedIn = false;
// console.log(person); // { name: 'John', age: 30 }

const obj1 = { 1: "a", 2: "B" };
const obj2 = { 3: "C", 4: "D" };

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3); // { '1': 'a', '2': 'B', '3': 'C', '4': 'D' }

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty("age"));
