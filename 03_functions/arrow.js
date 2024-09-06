const user = {
  username: "tatai",
  age: 23,

  welcomeMessage: function () {
    console.log(`Welcome, ${this.username}`); // "this" function refers the current context
  },
};
// user.welcomeMessage();

// *****************Arrow function ******************
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
//  console.log(addTwo(3, 5)); // explicit function

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(3, 5)); // implicit function
