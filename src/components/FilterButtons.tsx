import React from "react";
import { useTaskContext } from "../context/TaskProvider";

const FilterButtons: React.FC = () => {
  const { filter, setFilter } = useTaskContext();

  return (
    <div className="filter-buttons">
      <button
        onClick={() => setFilter("all")}
        className={`filter-button ${filter === "all" ? "active" : ""}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`filter-button ${filter === "active" ? "active" : ""}`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`filter-button ${filter === "completed" ? "active" : ""}`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
