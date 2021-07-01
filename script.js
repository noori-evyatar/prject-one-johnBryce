console.log(localStorage);

function changeBtnText() {
    var text = document.getElementById("addTaskBtn");
    text.value == "Add Task" ? text.value = "Close" : text.value = "Add Task";
};

var savedTask = document.getElementById("saveTaskInput");
savedTask.addEventListener("click", function () {
    saveTask();
})

function saveTask() {
    var taskName = document.getElementById("taskName").value;
    var taskDetails = document.getElementById("taskDetails").value;
    var taskDate = document.getElementById("taskDate").value;
    var taskTime = document.getElementById("taskTime").value;
    var taskId = Math.floor(Math.random() * 10000);
    var savedInput = {
        taskId,
        taskName,
        taskDetails,
        taskDate,
        taskTime
    }
    // if (validateText()) {
    //     createNote(savedInput);
    //     localStorage.setItem(taskId, JSON.stringify(savedInput));
    // }
    // clearTheForm();
    // document.getElementById("taskForm").className = "collapse-show";
    createNote(savedInput);
        localStorage.setItem(taskId, JSON.stringify(savedInput));
};

var clearForm = document.getElementById("clearFormInput");
clearForm.addEventListener("click", function () {
    clearTheForm();
})

function clearTheForm() {
    var taskName = document.getElementById("taskName");
    var taskDetails = document.getElementById("taskDetails");
    var taskDate = document.getElementById("taskDate");
    var taskTime = document.getElementById("taskTime");

    taskName.value = "";
    taskDetails.value = "";
    taskDate.value = "";
    taskTime.value = '';
    return;
}

function createNote(savedInput) {

    var notesContainer = document.getElementById("tasksContainer");

    var newNote = document.createElement("div");
    newNote.setAttribute("id", savedInput.id);
    newNote.setAttribute("class", "newNote");
    newNote.addEventListener("mouseover", showDltBtn);
    newNote.addEventListener("mouseleave", dontShowDltBtn);
    notesContainer.appendChild(newNote);

    var deleteIcon = document.createElement("button");
    deleteIcon.setAttribute("id", "deleteButton");
    deleteIcon.setAttribute("class", "deleteButton");
    var icon = document.createElement("i");
    icon.setAttribute("id", "deleteIconId");
    icon.setAttribute("class", "bi bi-trash");
    deleteIcon.append(icon);
    icon.style.display = "none";
    deleteIcon.setAttribute("onclick", "deleteNote(this)");
    newNote.append(deleteIcon);

    var taskTitle = document.createElement("h2");
    taskTitle.setAttribute("id", "title");
    taskTitle.setAttribute("class", "taskTitle");
    taskTitle.innerText = savedInput.taskName;
    newNote.append(taskTitle);

    var taskDetail = document.createElement("p");
    taskDetail.setAttribute("id", "deatails");
    taskDetail.setAttribute("class", "taskDetail");
    newNote.append(taskDetail);
    taskDetail.innerText = savedInput.taskDetails;

    var dateSet = document.createElement("div");
    dateSet.setAttribute("id", "date");
    dateSet.setAttribute("class", "dateSet");
    newNote.append(dateSet);
    dateSet.innerText = savedInput.taskDate;

    var timeSet = document.createElement("div");
    timeSet.setAttribute("id", "time");
    timeSet.setAttribute("class", "timeSet");
    newNote.append(timeSet);
    timeSet.innerText = savedInput.taskTime;

}

function dontShowDltBtn() {
    document.getElementById("deleteIconId").style.display = "none";
}

function showDltBtn() {
    document.getElementById("deleteIconId").style.display = "block";
}

function deleteNote(deleteTask) {
    deleteTask.parentNode.remove();
    var id = deleteTask.getAttribute("id");
    localStorage.removeItem(id);

}

function validateText() {

    let taskNameObject = document.getElementById("taskName");
    let taskDetailsObject = document.getElementById("taskDetails");
    let taskDateObject = document.getElementById("taskDate");
    let taskTimeObject = document.getElementById("taskTime");

    taskNameObject.style.borderColor = '';
    taskDetailsObject.style.borderColor = '';
    taskDateObject.style.borderColor = '';
    taskTimeObject.style.borderColor = '';

    if (!taskNameObject.value) {
        taskNameObject.style.borderColor = 'red';
        alert("Task Name is missing!");
    }

    if (!taskDetailsObject.value) {
        taskDetailsObject.style.borderColor = 'red';
        alert("Task Details are missing!");
    }

    if (!taskDateObject.value) {
        taskDateObject.style.borderColor = 'red';
        alert("Date is missing!");
    }

    if (!taskTimeObject.value) {
        taskTimeObject.style.borderColor = 'red';
        alert("Time is missing!");
    }
    else
        return;

}

