document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addBtn = document.getElementById("addBtn");

    addBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        deleteBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            li.remove();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    });
});