 const generateFakePromise = (afterDelay, value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), afterDelay);
  });
};

 const generateFakeRejectedPromise = (afterDelay, value) => {
   return new Promise((resolve, reject) => {
     setTimeout(() => reject(value), afterDelay);
   });
 };

module.exports = { generateFakePromise, generateFakeRejectedPromise };