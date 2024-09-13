import React, { useState } from "react";
import { useTaskContext } from "../context/TaskProvider";

const TaskInput: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const { addTask } = useTaskContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form className="task-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="task-input-button">Add Task</button>
    </form>
  );
};

export default TaskInput;
