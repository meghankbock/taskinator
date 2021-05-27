var formEl = document.querySelector("#task-form");
//console.log("save-task " + formEl);
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();
    //console.log(event);

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    //console.dir(taskNameInput);
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // giv it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>"+ taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    
    //listItemEl.textContent = taskNameInput;
    listItemEl.appendChild(taskInfoEl);

    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

    //console.dir(listItemEl);


}

formEl.addEventListener("submit", createTaskHandler);