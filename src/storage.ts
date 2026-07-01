
    
 
  import { getTaskArray, setTaskArray, state } from "./types.js";
import type { Task } from "./types.js";

export function saveTasks(): void {
  const json = JSON.stringify(getTaskArray());
  localStorage.setItem("tasks", json);
}

export function loadTasks(): void {
  const json = localStorage.getItem("tasks");

  if (json === null) {
    return;
  }

  const loadedTasks: Task[] = JSON.parse(json);
  setTaskArray(loadedTasks);

  state.nextId =
    loadedTasks.length > 0
      ? Math.max(...loadedTasks.map(task => task.id)) + 1
      : 1;
}