
import { Priority, Status, state, getTaskArray } from "./types.js";
import { toggleTask, deleteTask } from "./tasks.js";

const app = document.querySelector("#app") as HTMLDivElement;
const summary = document.querySelector("#summary") as HTMLDivElement;

export function renderTasks(): void {
  app.innerHTML = "";

  const tasks = getTaskArray();

  const completed = tasks.filter(task => task.status === Status.Completed).length;
  const pending = tasks.filter(task => task.status === Status.Pending).length;

  summary.innerHTML = `
    <p><strong>Totalt antal uppgifter:</strong> ${tasks.length}</p>
    <p><strong>Klara:</strong> ${completed}</p>
    <p><strong>Ej klara:</strong> ${pending}</p>
  `;

  let filteredTasks = tasks;

  if (state.currentFilter === "pending") {
    filteredTasks = tasks.filter(task => task.status === Status.Pending);
  }

  if (state.currentFilter === "completed") {
    filteredTasks = tasks.filter(task => task.status === Status.Completed);
  }

  for (const task of filteredTasks) {
    const card = document.createElement("div");
    card.classList.add("task");

    if (task.status === Status.Completed) {
      card.classList.add("completed");
    }

    if (task.priority === Priority.Low) {
      card.classList.add("low-priority");
    }

    if (task.priority === Priority.Medium) {
      card.classList.add("medium-priority");
    }

    if (task.priority === Priority.High) {
      card.classList.add("high-priority");
    }

    const taskTitle = document.createElement("h3");
    taskTitle.textContent = task.name;

    const priorityBadge = document.createElement("span");
    priorityBadge.classList.add("priority-badge");
    priorityBadge.textContent = task.priority;
    priorityBadge.classList.add(task.priority);

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");
    taskInfo.append(taskTitle, priorityBadge);

    const completeButton = document.createElement("button");
    completeButton.textContent =
      task.status === Status.Pending ? "Klar" : "Ångra";

    completeButton.addEventListener("click", () => {
      toggleTask(task.id);
      renderTasks();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Ta bort";

    deleteButton.addEventListener("click", () => {
      deleteTask(task.id);
      renderTasks();
    });

    card.append(taskInfo, completeButton, deleteButton);
    app.append(card);
  }
}
























