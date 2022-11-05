const addTask = () => {
    let list = document.getElementById("task-list");
    let task = document.getElementById("base-task");
    let newTask = task.cloneNode(true);
    list.appendChild(newTask);
}

const popTask = () => {
    let list = document.getElementById("task-list");
    list.removeChild(list.lastChild);
}
