function addTask() {
    // Get input values
    var taskName = document.getElementById("taskName").value;
    var dueDate = document.getElementById("dueDate").value;

    // Create a new list item
    var li = document.createElement("li");
    li.innerHTML = '<span>' + taskName + ' - ' + dueDate + '</span>' +
        '<button onclick="deleteTask(this)">Delete</button>';

    // Append the new item to the task list
    document.getElementById("taskList").appendChild(li);

    // Clear the form inputs
    document.getElementById("taskForm").reset();
}

function deleteTask(button) {
    // Remove the parent list item when the delete button is clicked
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}