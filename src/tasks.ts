import { Priority, Status, state, getTaskArray } from "./types.js";
import type { Task } from "./types.js";
import { saveTasks } from "./storage.js";

export function addTask(name: string, priority: Priority): void {
  const newTask: Task = {
    id: state.nextId,
    name,
    status: Status.Pending,
    priority,
  };

  getTaskArray().push(newTask);
  state.nextId++;

  saveTasks();
}

export function toggleTask(taskId: number): void {
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

export function deleteTask(taskId: number): void {
  const tasks = getTaskArray();
  const index = tasks.findIndex(task => task.id === taskId);

  if (index !== -1) {
    tasks.splice(index, 1);
  }

  saveTasks();
}