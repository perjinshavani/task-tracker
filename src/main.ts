

import { Priority, state, getTaskArray } from "./types.js";
import { renderTasks } from "./render.js";
import { loadTasks } from "./storage.js";
import { addTask } from "./tasks.js";

const taskInput = document.querySelector("#task-input") as HTMLInputElement;
const priorityInput = document.querySelector("#priority-input") as HTMLSelectElement;
const taskForm = document.querySelector("#task-form") as HTMLFormElement;
const errorMessage = document.querySelector("#error-message") as HTMLParagraphElement;

const showAllButton = document.querySelector("#show-all") as HTMLButtonElement;
const showPendingButton = document.querySelector("#show-pending") as HTMLButtonElement;
const showCompletedButton = document.querySelector("#show-completed") as HTMLButtonElement;

function validateTask(taskName: string): boolean {
  if (taskName === "") {
    errorMessage.textContent = "Du måste skriva en uppgift.";
    return false;
  }

  if (taskName.length < 3) {
    errorMessage.textContent = "Uppgiften måste innehålla minst 3 tecken.";
    return false;
  }

  if (taskName.length > 40) {
    errorMessage.textContent = "Uppgiften får innehålla högst 40 tecken.";
    return false;
  }

  if (taskExists(taskName)) {
    errorMessage.textContent = "Uppgiften finns redan.";
    return false;
  }

  errorMessage.textContent = "";
  return true;
}

function taskExists(name: string): boolean {
  for (const task of getTaskArray()) {
    if (task.name.toLowerCase() === name.toLowerCase()) {
      return true;
    }
  }

  return false;
}

function clearForm(): void {
  taskInput.value = "";
  priorityInput.value = Priority.Medium;
}

function handleSubmit(event: SubmitEvent): void {
  event.preventDefault();

  const taskName = taskInput.value.trim();
  const priority = priorityInput.value as Priority;

  const isValid = validateTask(taskName);

  if (!isValid) {
    return;
  }

  addTask(taskName, priority);
  clearForm();
  renderTasks();
}

taskForm.addEventListener("submit", handleSubmit);

showAllButton.addEventListener("click", () => {
  state.currentFilter = "all";
  renderTasks();
});

showPendingButton.addEventListener("click", () => {
  state.currentFilter = "pending";
  renderTasks();
});

showCompletedButton.addEventListener("click", () => {
  state.currentFilter = "completed";
  renderTasks();
});

loadTasks();
renderTasks();