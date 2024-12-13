let thefactorial = 1;

// Iterative;
const mainFactor = (inputNumber) => {
  for (let i = 1; i <= inputNumber; i++) {
    thefactorial *= i;
  }
  return thefactorial;
};

// Recursive;
// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(5));
console.log(mainFactor(3));
