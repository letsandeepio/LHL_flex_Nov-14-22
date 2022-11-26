
const pies = ["Apple Pie",'Mango Pie', "Pineapple Pie"];
const pizzas = ["Veggie Deligth",'Pepperoni', "Pineapple Pizza"];

// for (const pie of pies){
//   console.log(pie);
// }

const each = (array, cb) => {
for (const item of array) {
  cb(item);
}
}

// forEach(pies, console.log);
// forEach(pizzas, console.log);

pies.forEach(console.log);

pizzas.forEach(console.log);

const scrabbleWords = ["apple","bat","cat","category","zoo"]