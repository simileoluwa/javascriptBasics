const simpleInterest = (principal, rate, time) => {
  return (principal * rate * time) / 100;
};

console.log(simpleInterest(12000, 10, 5));
