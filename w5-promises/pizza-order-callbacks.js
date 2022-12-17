// Asynchronous Operations

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name?", (userName) => {
  rl.question("What kind of pizza crust you like?", (pizzaCrust) => {
    rl.question("What kind of pizza toppings you like?", (pizzaToppings) => {
      rl.question("What kind of pizza sauce you like?", (pizzaSauce) => {
        console.log(
          `Hi! ${userName}, you ordered pizza with ${pizzaCrust} crust, toppings [${pizzaToppings}], ${pizzaSauce} sauce.`
        );
        rl.close();
      });
    });
  });
});
