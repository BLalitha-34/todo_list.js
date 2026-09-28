let tasks = [];
function addTask(task) {
    tasks.push({
        name: task,
        completed: false
    });
    console.log("Task added successfully!");
}
function viewTasks() {
    console.log("\n===== TO-DO LIST =====");
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }
    tasks.forEach((task, index) => {
        let status = task.completed ? "Completed" : "Pending";
        console.log((index + 1) + ". " + task.name + " - " + status);
    });
}
function completeTask(taskNumber) {
    if (taskNumber >= 1 && taskNumber <= tasks.length) {
        tasks[taskNumber - 1].completed = true;
        console.log("Task completed successfully!");
    } else {
        console.log("Invalid task number.");
    }
}
function deleteTask(taskNumber) {
    if (taskNumber >= 1 && taskNumber <= tasks.length) {
        tasks.splice(taskNumber - 1, 1);
        console.log("Task deleted successfully!");
    } else {
        console.log("Invalid task number.");
    }
}
console.log("===== TO-DO LIST APP =====");
addTask("Complete JavaScript assignment");
addTask("Study for exam");
addTask("Read a book");
viewTasks();
completeTask(1);
viewTasks();
deleteTask(2);
viewTasks();
OUTPUT:
===== TO-DO LIST APP =====
Task added successfully!
Task added successfully!
Task added successfully!
===== TO-DO LIST =====
1. Complete JavaScript assignment - Pending
2. Study for exam - Pending
3. Read a book - Pending
Task completed successfully!
===== TO-DO LIST =====
1. Complete JavaScript assignment - Completed
2. Study for exam - Pending
3. Read a book - Pending
Task deleted successfully!
===== TO-DO LIST =====
1. Complete JavaScript assignment - Completed
2. Read a book - Pending
