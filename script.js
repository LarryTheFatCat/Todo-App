const taskInput = document.getElementById("task_input");
const removeAllTasks = document.getElementById("remove_all_task");

let task_list = [];
function renderTask(event) {
    const userInput = document.getElementById("task_input").value;
    const unorderedList = document.getElementById("unordered_list");
    const icon = document.createElement("i");
    const list = document.createElement("li");

    // basically e.preventDefault(); lol
    if (userInput.length <= 0) {
        return;
    }

    task_list.push(userInput);
    task_list.forEach(task_item => {
        list.textContent = task_item;
        icon.classList.add("bi", "bi-x", "float-end");
        icon.style.cursor = "pointer";
        unorderedList.appendChild(list);
        list.appendChild(icon);

    });
    icon.addEventListener("click", function () {
        this.remove();
        list.remove();

    });

    removeAllTasks.addEventListener("click", function () {
        unorderedList.textContent = "";
    });
}

/**
 * calls renderTask() if key is equal to enter
 */
taskInput.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        renderTask();
    }
});