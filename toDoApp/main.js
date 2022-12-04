const searchInput = document.querySelector("input.search");
const addForm = document.querySelector("form.add");
const addInput = document.querySelector("input.add");
const ul = document.querySelector("ul");
const taskList = document.getElementsByClassName("task");
const tasksNumber = document.querySelector("span.number");

const removeTask = (e) => {
  e.target.parentNode.remove();
  tasksNumber.textContent = taskList.length;
};

const addTask = (e) => {
  e.preventDefault();
  const taskName = addInput.value;
  const task = document.createElement("li");
  task.classList.add("task");
  task.innerHTML = taskName + ` <button>Remove</button>`;
  ul.appendChild(task);
  addInput.value = "";
  task.querySelector("button").addEventListener("click", removeTask);
  tasksNumber.textContent = taskList.length;
};

const search = (e) => {
  const tasks = [...document.querySelectorAll("li")];
  tasks.forEach((item) => {
    item.style.display = item.textContent.includes(e.target.value)
      ? "list-item"
      : "none";
  });
};

addForm.addEventListener("submit", addTask);
searchInput.addEventListener("input", search);
