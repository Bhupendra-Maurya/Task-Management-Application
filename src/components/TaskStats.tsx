import React from 'react';
import { useTaskContext } from '../context/TaskProvider';

const TaskStats: React.FC = () => {
  const { getTaskCounts } = useTaskContext();
  const { total, completed, active } = getTaskCounts();

  return (
    <div className="task-stats">
      <p>Total Tasks: {total}</p>
      <p>Completed Tasks: {completed}</p>
      <p>Active Tasks: {active}</p>
    </div>
  );
};

export default TaskStats;
