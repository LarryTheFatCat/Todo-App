const taskInput = document.getElementById("task_input");

let task_list = [];
function renderTask() {
    const userInput = document.getElementById("task_input").value;
    const unorderedList = document.getElementById("unordered_list");
    const list = document.createElement("li");
    // basically e.preventDefault(); lol
    if(userInput.length <= 0) {
        return;
    }

    task_list.push(userInput);
    task_list.forEach(task_item => {
        list.textContent = task_item;
        unorderedList.appendChild(list);    
    });
}

/**
 * calls renderTask() if key is equal to enter!
 */
taskInput.addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        renderTask();
    }
});
