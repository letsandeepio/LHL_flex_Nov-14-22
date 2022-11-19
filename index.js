/*

- Get the Arguments [done]

 - We need atleast two arguments [done]
  - if any argument is not number, throw an error [done]
 

- Goes through each of them and prints the sum [done]
  - If any number is not whole number, skip it [done]
  - Support for negative numbers [done]

*/

const arguments = process.argv.slice(2);

if(arguments.length < 2) {
  console.log("Please provide two arguments");
  process.exit();
}

for (const argument of arguments){
  if (isNaN(argument)) {
    console.log("Please provide valid numbers");
      process.exit();
  }
}

const sum = (arrayToSum) => {
  let output = 0
  /** Summation logic */
  for (const num of arrayToSum) {
    const converted = Number(num);
    if (Number.isInteger(converted)){
      output = output + converted;
    } 
  }
  return output;
}

const totalSum = sum(arguments);
console.log(totalSum);