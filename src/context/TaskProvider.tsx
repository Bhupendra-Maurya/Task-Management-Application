import React, { useState, ReactNode } from "react";
import TaskContext from "./TaskContext";
import { Task } from "../types/Task";

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const addTask = (task: string) => {
    setTasks([...tasks, { id: Date.now(), task, completed: false }]);
    console.log("Add function called");
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  const getTaskCounts = () => {
    return {
      total: tasks.length,
      completed: tasks.filter((task) => task.completed).length,
      active: tasks.filter((task) => !task.completed).length,
    };
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleComplete,
        deleteTask,
        clearCompleted,
        filter,
        setFilter,
        completedCount,
        getTaskCounts,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = React.useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

