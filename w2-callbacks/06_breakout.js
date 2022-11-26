/*

Implement a function forEachInReverse (HOF)
Loop through the elements in reverse
It should take in callback as parameter
It shuld run the callback against each parameter

*/

const cars = ["Tesla X", "Volkswagen", "Mercedes","Honda"];

const printValue = (item) => console.log(`Your item is ${item}`);

const printValueAndIndex = (apple, index) => console.log(`Your item is ${apple} and it is at index ${index}`);

const forEachInReverse = (array, cb, callee) => {
  for(let i = array.length-1; i >=0; i--){
    cb(array[i], i);
  }
  console.log(`Your callee is ${callee}`)
}

forEachInReverse(cars, printValue, "printValue");
forEachInReverse(cars, printValueAndIndex, "printValueAndIndex");


// Your item is Honda and it at index 3