export declare enum Status {
    Pending = "pending",
    Completed = "completed"
}
export declare enum Priority {
    Low = "low",
    Medium = "medium",
    High = "high"
}
export interface Task {
    id: number;
    name: string;
    status: Status;
    priority: Priority;
    description?: string;
    notes?: string;
}
export declare let tasks: Task[];
export declare function getTaskArray(): Task[];
export declare function setTaskArray(newTasks: Task[]): void;
export declare const state: {
    nextId: number;
    currentFilter: "all" | "pending" | "completed";
};
//# sourceMappingURL=types.d.ts.map