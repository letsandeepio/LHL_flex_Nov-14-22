// Anonymous & Arrow Functions

const numbers = [1,2,3,4,5,6]


const total = numbers.reduce((curr,prev)=>curr+prev,0)

function multiplyBy10(item){
  return item * 10;
}

const mapEach = (array, cb) => {
  const result = [];
  for (const item of array){
    result.push(cb(item));
  }
  return result;
}

const numbersMultipliedBy10 = mapEach(numbers, multiplyBy10);

// console.log("numbersMultipliedBy10");
// console.log(numbersMultipliedBy10);

const numbersMinus5 = mapEach(numbers, () => item - 5);
const numbersMinus10 = mapEach(numbers, () => item - 10);

console.log("numbersMinus5")
console.log(numbersMinus5)