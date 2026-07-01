export enum Status {
  Pending = "pending",
  Completed = "completed",
}

export enum Priority {
  Low = "low",
  Medium = "medium",
  High = "high",
}

export interface Task {
  id: number;
  name: string;
  status: Status;
  priority: Priority;
  description?: string;
  notes?: string;
}

export let tasks: Task[] = [];

export function getTaskArray(): Task[] {
  return tasks;
}

export function setTaskArray(newTasks: Task[]): void {
  tasks = newTasks;
}

export const state = {
  nextId: 1,
  currentFilter: "all" as "all" | "pending" | "completed",
};