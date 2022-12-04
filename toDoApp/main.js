(function () {
  const searchInput = document.querySelector("#search-input");
  const addForm = document.querySelector("#add-task-form");
  const addInput = document.querySelector("#add-task-input");
  const ul = document.querySelector("ul");
  const taskList = document.getElementsByClassName("task");
  const tasksNumber = document.querySelector("span");

  const removeTask = (e) => {
    e.target.parentNode.remove();
    tasksNumber.textContent = taskList.length;
  };

  const addTask = (e) => {
    e.preventDefault();
    const taskName = addInput.value.trim();
    if (taskName === "") {
      return;
    }
    const task = document.createElement("li");
    task.classList.add("task");
    task.innerHTML = taskName + ` <button>Remove</button>`;
    ul.appendChild(task);
    addInput.value = "";
    task.childNodes[1].addEventListener("click", removeTask);
    tasksNumber.textContent = taskList.length;
  };

  const search = (e) => {
    [...taskList].forEach((item) => {
      item.style.display = item.textContent
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
        ? "list-item"
        : "none";
    });
  };

  addForm.addEventListener("submit", addTask);
  searchInput.addEventListener("input", search);
})();
