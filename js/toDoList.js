function addTask() {
  var input = document.getElementById("taskText");
  // get current text from input field
  var newTask = input.value;
  // only add new item to list if some text was entered
  if (newTask != "") {
    // create new HTML list item
    var item = document.createElement("li");
    // add HTML for buttons and new task text
    // Note, need to use '' because of "" in HTML
    item.innerHTML =
      '<input type="button" class="done secondary-button" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' +
      '<input type="button" class="remove secondary-button" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
      '<input type="button" class="important secondary-button" onclick="markImportant(this.parentNode)" value="&#x0021;" /> ' +
      newTask;
    // add new item as part of existing list
    document.getElementById("tasks").appendChild(item);
    input.value = "";
    input.placeholder = "Enter task...";
    /* Step 4 below here */
  }
}

// change styling used for given item
function markDone(item) {
  if (item.className != "finished") {
    item.className = "finished";
  } else {
    item.className = "none";
  }
}

/* Step 7 below here */
function remove(item) {
  // remove item completely from document
  if (item.className == "finished") {
    item.remove();
  }
}

function doAbout() {
  var aboutPopup = document.getElementById("aboutPopup");
  aboutPopup.style.display = "block";
}

function closeAboutPopup() {
  var aboutPopup = document.getElementById("aboutPopup");
  aboutPopup.style.display = "none";
}

function markImportant(item) {
  if (item.className != "finished") {
    if (item.classList.contains("important")) {
      item.classList.remove("important");
    } else {
      item.classList.add("important");
    }
  }
}
