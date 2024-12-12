// const area = function (raise) {
//   pi = 3;
//   decide = pi ** raise;
//   return decide;
// };

// console.log(area(4));

// area();

// const simpleInterest = function (principal, rate, time) {
//   return (principal * rate * time) / 100;
// };

// console.log(simpleInterest(1000, 5, 2));

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
//   setTimeout(() => {
//     console.log(i);
//   });

//   console.log(i);

//   setTimeout(() => {
//     console.log(i);
//   }, i * 3000);
// }

let newUser = {
  name: "Simileoluwa",
  age: 20,
  email: "sZ2Gd@example.com",
  address: "Ilorin",
  getDetails: function () {
    console.log(
      `I am ${this.name} and I am ${this.age} years old. I live in ${this.address}`
    );
  },
};
console.log(newUser);
// console.log(this);
