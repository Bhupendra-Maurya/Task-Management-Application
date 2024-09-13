import React from "react";
import { useTaskContext } from "../context/TaskProvider";

const ClearCompleted: React.FC = () => {
  const { completedCount, clearCompleted } = useTaskContext();

  if (completedCount === 0) {
    return null;
  }

  return (
    <button className="clear-completed-button" onClick={clearCompleted}>
      Clear Completed
    </button>
  );
};

export default ClearCompleted;
