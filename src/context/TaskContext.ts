import { createContext } from "react";
import { Task } from "../types/Task";

interface TaskContextType {
  tasks: Task[];
  addTask: (task: string) => void;
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
  clearCompleted: () => void;
  filter: string;
  setFilter: (filter: string) => void;
  completedCount:number,
  getTaskCounts: () => { total: number; completed: number; active: number };
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export default TaskContext;
