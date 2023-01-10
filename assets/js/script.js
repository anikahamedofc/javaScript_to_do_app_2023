const addTask = document.getElementById("add-task");
const taskInput = document.getElementById("taskInput");
const taskDiv = document.getElementById("all-task");
const errorData = document.getElementById("error-data");

addTask.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = taskInput.value;
  if (taskText) {
    errorData.innerHTML = "";
    taskInput.value = "";

    // create div
    const singleTaskDiv = document.createElement("div");
    singleTaskDiv.classList.add("single-task");

    // create input
    const singleTaskTest = document.createElement("input");
    singleTaskTest.type = "Text";
    singleTaskTest.value = taskText;
    singleTaskTest.setAttribute("readonly", "readonly");

    // edit button
    const editTask = document.createElement("button");
    editTask.classList.add("edit-task");
    editTask.innerText = "Edit";

    // complete button
    const completeTask = document.createElement("button");
    completeTask.classList.add("complete-task");
    completeTask.innerText = "Complete";

    // Delete button
    const deleteTask = document.createElement("button");
    deleteTask.classList.add("delete-task");
    deleteTask.innerText = "Delete";

    // create component
    singleTaskDiv.appendChild(singleTaskTest);
    singleTaskDiv.appendChild(editTask);
    singleTaskDiv.appendChild(completeTask);
    singleTaskDiv.appendChild(deleteTask);

    // add the task
    taskDiv.appendChild(singleTaskDiv);

    // edit task function
    editTask.addEventListener("click", (e) => {
      if (editTask.innerText == "Edit") {
        editTask.innerText = "Save";
        singleTaskTest.removeAttribute("readonly");
        singleTaskTest.focus();
      } else {
        editTask.innerText = "Edit";
        singleTaskTest.setAttribute("readonly", "readonly");
      }
    });

    // COMPLETE Task Function

    completeTask.addEventListener("click", (e) => {
      if (completeTask.innerText == "Complete") {
        completeTask.innerText = "Completed";
        singleTaskDiv.classList.add("task-completed");
      }
    });

    // Delete Task Function
    deleteTask.addEventListener("click", (e) => {
      taskDiv.removeChild(singleTaskDiv);
    });
  } else {
    errorData.innerHTML = "<p>Please Add Some Task !</p>";
  }
});
