import React from "react";
import { useTaskContext } from "../context/TaskProvider";

const TaskList: React.FC = () => {
  const { tasks, toggleComplete, deleteTask, filter } = useTaskContext();

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "completed"
      ? tasks.filter((task) => task.completed)
      : tasks.filter((task) => !task.completed);

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <li key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          <span className={`task-text ${task.completed ? "completed" : ""}`}>{task.task}</span>
          <button className="task-delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
