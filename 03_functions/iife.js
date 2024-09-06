// Immediately invoked function expressions(iife)

(function chai() {
  // named iife
  console.log("DB CONNECTED");
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("tatai");
