// alert("I dey work");

const todoList = document.querySelector(".todoList");
const todoBtn = document.querySelector(".todoBtn");
const li = document.querySelector("li");

todoBtn.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.innerText = "This is the new List";
  todoList.appendChild(newLi);
});
