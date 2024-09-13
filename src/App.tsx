import ClearCompleted from "./components/ClearCompleted";
import FilterButtons from "./components/FilterButtons";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskProvider";
import "./App.css";
import TaskStats from "./components/TaskStats";
const App: React.FC = () => {
  return (
    <div className="app-container">
      <TaskProvider>
        <div>
          <h1>Task Manager</h1>
          <TaskInput />
          <TaskStats />
          <FilterButtons />
          <TaskList />
          <ClearCompleted />
        </div>
      </TaskProvider>
    </div>
  );
};

export default App;
