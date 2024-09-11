// for of loop

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }

// const greeting = "hello world!";
// for (const greet of greeting) {
//   console.log(`each char is ${greet}`);
// }
const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

//console.log(map); // it only store the unique value // it not iterable

// to make object iterable we use "for in" loop
// const arr = {
//   1: "bey",
//   2: "sea",
//   3: "dear",
// };

// for (const num in arr) {
//   //console.log(num); // it only shows keys
//   console.log(arr[num]); // for values
// }

// callback function with foreach loop

const codding = ["js", "python", "ruby", "cpp"];

// // callback function (arrow function)

// codding.forEach((val) => {
//   console.log(val);
// });

const myCooding = [
  {
    languageName: "python",
    shoertForm: "py",
  },
  {
    languageName: "javascript",
    shoertForm: "js",
  },
  {
    languageName: "java",
    shoertForm: "java",
  },
];

// myCooding.forEach((item) => {
//   console.log(item.shoertForm);
// });
