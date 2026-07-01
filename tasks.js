import { Priority, Status, state, getTaskArray } from "./types.js";
import { saveTasks } from "./storage.js";
export function addTask(name, priority) {
    const newTask = {
        id: state.nextId,
        name,
        status: Status.Pending,
        priority,
    };
    getTaskArray().push(newTask);
    state.nextId++;
    saveTasks();
}
export function toggleTask(taskId) {
    for (const task of getTaskArray()) {
        if (task.id === taskId) {
            task.status =
                task.status === Status.Pending
                    ? Status.Completed
                    : Status.Pending;
        }
    }
    saveTasks();
}
export function deleteTask(taskId) {
    const tasks = getTaskArray();
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
    saveTasks();
}
//# sourceMappingURL=tasks.js.map