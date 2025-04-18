document.addEventListener("DOMContentLoaded", function () {
    let tasks = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
      
    function renderTask(task) {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
      if (task.complete) {
        taskDiv.classList.add("complete");
      }
  
      const titleDiv = document.createElement("div");
      titleDiv.classList.add("task-title");
      titleDiv.innerHTML = task.title;
  
      const completeButton = document.createElement("button");
      const completeImage = document.createElement("img");
      completeImage.src = `icons/${task.complete ? "check-" : ""}square.svg`;
      completeImage.alt = "un/complete task";
      completeButton.appendChild(completeImage);
      completeButton.addEventListener("click", function () {
        completeTask(task.title);
      });
  
      // const completeCheck = document.createElement("input");
      // completeCheck.type = "checkbox";
      // completeCheck.checked = task.complete;
      // completeCheck.addEventListener("click", function () {
      //   completeTask(task.title);
      // });
  
      const deleteButton = document.createElement("button");
      deleteButton.disabled = !task.complete;
      const deleteImage = document.createElement("img");
      deleteImage.src = `icons/x-circle.svg`;
      deleteImage.alt = "delete task";
      deleteButton.appendChild(deleteImage);
      deleteButton.addEventListener("click", function () {
        deleteTask(task.title);
      });
  
      taskDiv.appendChild(titleDiv);
      taskDiv.appendChild(completeButton);
      // taskDiv.appendChild(completeCheck);
      taskDiv.appendChild(deleteButton);
      return taskDiv;
    }
  
    function renderTasks() {
      const container = document.querySelector("#tasks");
      // container.innerHTML = null;
      container.replaceChildren();
      tasks.forEach((task) => container.appendChild(renderTask(task)));
  
      if (tasks.length) {
        document.querySelector("#task-reset").classList.remove("hidden");
      } else {
        document.querySelector("#task-reset").classList.add("hidden");
      }
  
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    function addTask() {
      const titleInput = document.querySelector("#new-task-title");
      const title = titleInput.value.trim();
      if (title && !tasks.find((task) => task.title === title)) {
        tasks.push({
          title,
          complete: false,
        });
        titleInput.value = "";
        renderTasks();
      }
    }
  
    function clearTasks() {
      tasks = [];
      renderTasks();
    }
  
    function completeTask(title) {
      const task = tasks.find((task) => task.title === title);
      task.complete = !task.complete;
      renderTasks();
    }
  
    function deleteTask(title) {
      // const index = tasks.findIndex((task) => task.title === title);
      // tasks.splice(index, 1);
      tasks = tasks.filter((task) => task.title !== title);
      renderTasks();
    }
  
    document.querySelector("#add-task").addEventListener("click", addTask);
    document.querySelector("#clear-tasks").addEventListener("click", clearTasks);
  
    renderTasks();
  });
  