//get query by querySelector
const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");
const todoList = document.querySelector("#todo-lists");
//add event listeners
todoButton.addEventListener("click", addTodo);
//functions

function addTodo(event) {
  event.preventDefault();
  console.log(event);
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = `
    <li>${todoInput.value}</li>
    <span><i class="fa-solid fa-square-check"></i></span>
    <span><i class="fa-solid fa-trash-can"></i></span>`;
  todoDiv.innerHTML = newTodo;
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}
