// let name = "Rick Sanchez";

// const sayHi3 = (nameToSayHi) => {
//   console.log("Hello", nameToSayHi);
// };

// // sayHi3(name);

// // name = "David Beckham"

// // sayHi3(name);

// const orderPizza = (pizzaName) => {
//   console.log("ordering pizza", pizzaName);
// };

// const reorderPizza = orderPizza;

// reorderPizza("veggie delight");


// Passing functions as arguments
const myCustomZZZLogs = (value) => {
    console.log("zzz"+value);
}

const print = (myCustomLog) => {
  myCustomLog("Hello World");
};

print(console.log);
print(myCustomZZZLogs);

// returning functions

const multiplyBy = (value) => {
  return function(valueToAct){
    return value * valueToAct;
  }
}

const multiplyBy10 = multiplyBy(10);

console.log(multiplyBy10(3));
