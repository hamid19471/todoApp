//get query by querySelector
const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");
const todoList = document.querySelector("#todo-lists");
const todoFilter = document.querySelector(".todo-filter");

//add event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkRemove);
todoFilter.addEventListener("change", filterTodo);

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

function checkRemove(event) {
  const classList = [...event.target.classList];
  const items = event.target;
  const row = items.parentElement.parentElement;
  if (classList[1] === "fa-square-check") {
    row.classList.toggle("done");
  } else if (classList[1] === "fa-trash-can") {
    row.remove();
  }
}

function filterTodo(event) {
  const todos = [...todoList.childNodes];
  todos.forEach((todo) => {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("done")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("done")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
