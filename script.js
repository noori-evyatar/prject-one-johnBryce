let currentNotes = [];
init();
function init() {
    const tasksFromLocalStorage = localStorage.getItem("notes");
    if (tasksFromLocalStorage) {
        currentNotes = JSON.parse(tasksFromLocalStorage);
        console.log(currentNotes);
    }
    for (i = 0; i < currentNotes.length; i++) {
        createNote(currentNotes[i])
    }
}

function changeBtnText() {
    let text = document.getElementById("addTaskBtn");
    text.value == "Add Task" ? text.value = "Close" : text.value = "Add Task";
};

let savedTask = document.getElementById("saveTaskInput");
savedTask.addEventListener("click", function () {
    saveTask();
})

function saveTask() {
    let taskName = document.getElementById("taskName").value;
    let taskDetails = document.getElementById("taskDetails").value;
    let taskDate = document.getElementById("taskDate").value;
    let taskTime = document.getElementById("taskTime").value;
    let taskId = Math.floor(Math.random() * 10000);
    let savedInput = {
        taskId,
        taskName,
        taskDetails,
        taskDate,
        taskTime
    }
    if (!validateText()) {
        return;
    }
    clearForm();

    createNote(savedInput);
    currentNotes.push(savedInput);
    localStorage.setItem("notes", JSON.stringify(currentNotes));
    document.getElementById("taskForm").className += "collapse";
    changeBtnText();

};

let clearFormElement = document.getElementById("clearFormInput");
clearFormElement.addEventListener("click", function () {
    clearForm();
})

function clearForm() {
    let taskName = document.getElementById("taskName");
    let taskDetails = document.getElementById("taskDetails");
    let taskDate = document.getElementById("taskDate");
    let taskTime = document.getElementById("taskTime");

    taskName.value = "";
    taskDetails.value = "";
    taskDate.value = "";
    taskTime.value = '';
    return;
}

function createNote(savedInput) {

    let notesContainer = document.getElementById("tasksContainer");

    let newNote = document.createElement("div");
    newNote.setAttribute("id", savedInput.taskId);
    newNote.setAttribute("class", "newNote");
    newNote.addEventListener("mouseover", () => showDltBtn(savedInput.taskId));
    newNote.addEventListener("mouseleave", () => dontShowDltBtn(savedInput.taskId));
    notesContainer.appendChild(newNote);

    let deleteIcon = document.createElement("button");
    deleteIcon.setAttribute("id", "deleteButton");
    deleteIcon.setAttribute("class", "deleteButton");
    let icon = document.createElement("i");
    icon.setAttribute("id", `deleteIconId-${savedInput.taskId}`);
    icon.setAttribute("class", "bi bi-trash");
    
    icon.style.display = "none";
    deleteIcon.setAttribute("onclick", "deleteNote(this)");
    deleteIcon.append(icon);
    newNote.append(deleteIcon);

    let taskTitle = document.createElement("h2");
    taskTitle.setAttribute("id", "title");
    taskTitle.setAttribute("class", "taskTitle");
    taskTitle.innerText = savedInput.taskName;
    newNote.append(taskTitle);

    let titleAndDltBtnDiv = document.createElement("div");
    newNote.append(titleAndDltBtnDiv);

    let taskDetail = document.createElement("p");
    taskDetail.setAttribute("id", "deatails");
    taskDetail.setAttribute("class", "taskDetail");
    newNote.append(taskDetail);
    taskDetail.innerText = savedInput.taskDetails;

    let dateSet = document.createElement("div");
    dateSet.setAttribute("id", "date");
    dateSet.setAttribute("class", "dateSet");
    newNote.append(dateSet);
    dateSet.innerText = savedInput.taskDate;

    let timeSet = document.createElement("div");
    timeSet.setAttribute("id", "time");
    timeSet.setAttribute("class", "timeSet");
    newNote.append(timeSet);
    timeSet.innerText = savedInput.taskTime;

}



function dontShowDltBtn(taskId) {
    document.getElementById(`deleteIconId-${taskId}`).style.display = "none";
}

function showDltBtn(taskId) {
    document.getElementById(`deleteIconId-${taskId}`).style.display = "block";
}

function deleteNote(deleteTask) {
    const id = deleteTask.parentNode.getAttribute("id");
    deleteTask.parentNode.remove();
    console.log("id: " + id);
    console.log("deleteTask.parentNode: " + deleteTask.parentNode);
    const updatedNotes = currentNotes.filter((note) => {
        return `${note.taskId}` !== id;
    })
    currentNotes = currentNotes.filter((note) => {
        return `${note.taskId}` !== id;
    })
    console.log("updatedNotes: " + updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
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
        return;
    }

    if (!taskDetailsObject.value) {
        taskDetailsObject.style.borderColor = 'red';
        alert("Task Details are missing!");
        return;
    }

    if (!taskDateObject.value) {
        taskDateObject.style.borderColor = 'red';
        alert("Date is missing!");
        return;
    }

    if (!taskTimeObject.value) {
        taskTimeObject.style.borderColor = 'red';
        alert("Time is missing!");
        return;
    }
    else
        return true;

}

