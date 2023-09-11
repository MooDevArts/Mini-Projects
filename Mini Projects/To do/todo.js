// TO DO list Code

function initializeApp() {
  fetchList();
  document.addEventListener("click", target);
  let input = document.getElementById("input");
  input.addEventListener("keyup", takeInput);
}

let tasks = [];
initializeApp();

//fetching to dos
function fetchList() {
  if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  } else {
    localStorage.setItem("tasks", "");
  }
  renderList();
}
//List Interaction

function target(e) {
  if (e.target.className == "delete") {
    let toRemove = tasks.filter(function (removal) {
      return removal.id == e.target.id;
    });
    removeTask(toRemove[0]);
  }

  if (e.target.className == "item") {
    let item = document.getElementById(e.target.id);
    let currTask = tasks.filter(function (task) {
      return task.id == e.target.id;
    });
    toggleTask(currTask[0]);
    item = document.getElementById(e.target.id);
  }
}

//List

function renderList() {
  let counter = document.getElementById("counter");
  let noOfTasks = 0;
  let list = document.getElementById("list");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    addTaskToDOM(tasks[i]);
    let item = document.getElementById(tasks[i].id);
    if (tasks[i].done == true) {
      item.style.textDecoration = "line-through";
      item.style.fontStyle = "italic";
    } else {
      item.style.textDecoration = "";
      item.style.fontStyle = "";
    }
    noOfTasks++;
  }
  counter.innerHTML = noOfTasks;
  noOfTasks = 0;
}

function addTaskToDOM(task) {
  list.innerHTML =
    list.innerHTML +
    `<li id = "${task.id}"><label class = "item" id = "${
      task.id
    }"><input class = "item" id = "${task.id}" type = "checkbox" ${
      task.done ? "checked" : ""
    }>${task.text}</label><span class = "delete" style = "color:red" id = "${
      task.id
    }">Delete</span></li>`;
}

// Tasks

function addTask(task) {
  if (task) {
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderList();
  } else {
    showNotification("cannot add task");
  }
}

function removeTask(task) {
  let newTasks = tasks.filter(function (removal) {
    return removal.id != task.id;
  });
  tasks = newTasks;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderList();
}

function toggleTask(task) {
  task.done = !task.done;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderList();
}

//Notification

function showNotification(text) {
  alert(text);
}

//handling input

let text;

function takeInput(e) {
  if (e.key == "Enter") {
    text = input.value;
    input.value = "";

    if (text == false) {
      showNotification("Pls enter text");
    } else {
      let task = {
        text: text,
        id: Date.now().toString(),
        done: false,
      };
      addTask(task);
    }
  }
}
