// Promise is something that is going to happen in the future

// -> Pending - waiting to be processed
// -> Fullfilled (resolved) -> promise has been fullfilled
// -> Rejected -> promise cannot be fullfilled

// Readable & easy to understand
// chain async operations
// built in error handling (.catch)
// easy to test etc 

// composable (promise.any, promise.race)


const readlinePromise = require("./utils/readline-promise");

const rlp = readlinePromise.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const new_order = {};

rlp
  .question("What is your name?")
  .then((userName) => {
    new_order.name = userName;
    return rlp.question("What kind of pizza crust you like?");
  })
  .then((pizzacrust) => {
    new_order.pizzacrust = pizzacrust;
    return rlp.question("What kind of pizza sauce you like?");
  })
  .then((pizzaSauce) => {
    new_order.pizzaSauce = pizzaSauce;
    rlp.close();
  })
  .catch((reason) => {
    console.log("sorry order cannot be placed!");
  })
  .finally(() => {
    console.log(new_order);
  });
