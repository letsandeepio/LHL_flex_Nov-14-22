// Code golfing - trying to do everything on one line :)
// PS: line 8-15 is one line of code

const totalSum = calculateTotalSum(arguments);

const array = [1, 2, 3, 4, 5, 6, 7];

const addNumbers = (pineAppleArray) =>
  pineAppleArray.reduce(
    (acc, currValue) =>
      Number.isInteger(Number(currValue))
        ? Number(currValue) + Number(acc)
        : acc,
    0
  );

const fancyTotalSum = addNumbers(arguments);

console.log(totalSum);
console.log(fancyTotalSum);
