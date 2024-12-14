"use strict";
// const jahElo = document.getElementsByClassName("welcome");
// jahElo.style.color = "red";

// const jahElo = document.getElementsByClassName("welcome");
// for (let element of jahElo) {
//   element.style.color = "red";
// }

// const lecture = document.querySelector(".welcome");

// console.log(lecture.innerHTML);
// console.log(lecture.innerText);
// console.log(lecture.textContent);

const features = document.querySelectorAll("p");
// console.log(features);

features.forEach((feature) => {
  feature.style.color = "orange";
  feature.innerText += " desire";
  console.log(feature.innerText);
});
