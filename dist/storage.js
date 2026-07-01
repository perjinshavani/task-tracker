import { getTaskArray, setTaskArray, state } from "./types.js";
export function saveTasks() {
    const json = JSON.stringify(getTaskArray());
    localStorage.setItem("tasks", json);
}
export function loadTasks() {
    const json = localStorage.getItem("tasks");
    if (json === null) {
        return;
    }
    const loadedTasks = JSON.parse(json);
    setTaskArray(loadedTasks);
    state.nextId =
        loadedTasks.length > 0
            ? Math.max(...loadedTasks.map(task => task.id)) + 1
            : 1;
}
//# sourceMappingURL=storage.js.map