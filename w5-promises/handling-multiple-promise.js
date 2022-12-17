// Promise.all

const { generateFakePromise, generateFakeRejectedPromise } = require("./utils/helpers")

const veggieDelight = generateFakeRejectedPromise(500, "Veggie Delight");
const margherita = generateFakePromise(1000, "Margherita");
const canadian = generateFakePromise(5000, "Canadian");


Promise.all([veggieDelight, margherita,canadian]).then((value)=>{
  console.log("Your pizzas are ready!")
  console.log(value);
});

// Promise.any

Promise.any([veggieDelight, margherita, canadian]).then((value) => {
  console.log("Your first pizza status is here!");
  console.log(value);
});

// Promise.allSettled

Promise.allSettled([veggieDelight, margherita,canadian]).then((value)=>{
  console.log("Your pizzas status ready!")
  console.log(value);
});

// Promise.race

Promise.race([veggieDelight, margherita,canadian]).then((value)=>{
  console.log("Your first pizza status is here!")
  console.log(value);
}).catch(()=>{
  console.log("Promise is rejected!")
});



