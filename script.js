function changeBtnText() {
    var text = document.getElementById("addTaskBtn");
    text.value == "Add Task" ? text.value = "Close" : text.value = "Add Task";
};

var savedTask = document.getElementById("saveTaskInput");
savedTask.addEventListener("click", function() {
    saveTask();
})

function saveTask() {
    var taskName = document.getElementById("taskName").value;
    var taskDetails = document.getElementById("taskDetails").value;
    var taskDate = document.getElementById("taskDate").value;
    var taskTime = document.getElementById("taskTime").value;
    var savedInput = {
        taskName,
        taskDetails,
        taskDate,
        taskTime
    }
    createNote(savedInput);
    localStorage.setItem(taskName, JSON.stringify(savedInput));
    
};

var clearForm = document.getElementById("clearFormInput");
clearForm.addEventListener("input", function() {
    clearForm();
})

function clearForm() {
    taskName.innerText= "";
}

function createNote(savedInput) {
    var notesContainer = document.getElementById("tasksContainer");

    var newNote = document.createElement("div");
    newNote.setAttribute("id", "note");
    newNote.setAttribute("class", "newNote");
    newNote.className= savedInput.taskName;
    notesContainer.append(newNote);

    var deleteIcon = document.createElement("deleteBtn");
    deleteIcon.setAttribute("class", "glyphicon glyphicon-remove-sign");
    deleteIcon.setAttribute("id", "deleteButton");
    deleteIcon.setAttribute("onclick", "deleteNote");
    newNote.append(deleteIcon);

    var taskTitle = document.createElement("h2");
    taskTitle.setAttribute("id", "title");
    taskTitle.innerText = savedInput.taskName;
    newNote.append(taskTitle);

    var taskDetail = document.createElement("p");
    taskDetail.setAttribute("id", "deatails");
    newNote.append(taskDetail);
    taskDetail.innerText = savedInput.taskDetails;

    var dateSet = document.createElement("div");
    dateSet.setAttribute("id", "date");
    newNote.append(dateSet);
    dateSet.innerText = savedInput.taskDate;

    var timeSet = document.createElement("div");
    timeSet.setAttribute("id", "time");
    newNote.append(timeSet);
    timeSet.innerText = savedInput.taskTime;
}


