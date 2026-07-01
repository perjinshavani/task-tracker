export var Status;
(function (Status) {
    Status["Pending"] = "pending";
    Status["Completed"] = "completed";
})(Status || (Status = {}));
export var Priority;
(function (Priority) {
    Priority["Low"] = "low";
    Priority["Medium"] = "medium";
    Priority["High"] = "high";
})(Priority || (Priority = {}));
export let tasks = [];
export function getTaskArray() {
    return tasks;
}
export function setTaskArray(newTasks) {
    tasks = newTasks;
}
export const state = {
    nextId: 1,
    currentFilter: "all",
};
//# sourceMappingURL=types.js.map