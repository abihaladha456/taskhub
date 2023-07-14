// Array to store tasks
var taskList = [];

function AddTask() {
  var taskName = document.getElementById("taskName").value;
  var dueDate = document.getElementById("dueDate").value;
  var category = document.getElementById("category").value;

  var task = {
    taskName: taskName,
    dueDate: dueDate,
    category: category
  };

  // Add task to the task list
  taskList.push(task);

  // Clear the textboxes
  document.getElementById("taskName").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("category").value = "";

  // Refresh the task list
  refreshTaskList();

  // Save the task data somewhere (e.g., local storage or a database)
  saveTaskData();

  alert("Task added successfully!");
}

function refreshTaskList() {
  var taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";

  // Render the task list
  for (var i = 0; i < taskList.length; i++) {
    var task = taskList[i];

    var listItem = document.createElement("li");
    listItem.textContent = task.taskName + " - " + task.dueDate + " - " + task.category;

    taskListElement.appendChild(listItem);
  }
}

function saveTaskData() {
  // Implement the logic to save the task data (e.g., to local storage or a database)
  // You can use the taskList array to store and retrieve the task data as needed
}
