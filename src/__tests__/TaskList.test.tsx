import { screen, render, waitFor } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { useTaskContext } from "../context/TaskProvider";
import userEvent from "@testing-library/user-event";
import { Task } from "../types/Task";

jest.mock("../context/TaskProvider", () => ({
  useTaskContext: jest.fn(),
}));

// Helper function to mock useTaskContext
const mockUseTaskContext = (tasks: Task[], filter = "all") => {
  const toggleCompleteMock = jest.fn();
  const deleteTaskMock = jest.fn();
  (useTaskContext as jest.Mock).mockReturnValue({
    tasks,
    toggleComplete: toggleCompleteMock,
    deleteTask: deleteTaskMock,
    filter,
  });
  render(<TaskList />);
  return { toggleCompleteMock, deleteTaskMock };
};

describe("TaskList", () => {
  const tasksMock = [
    { id: 1, task: "Task 1", completed: false },
    { id: 2, task: "Task 2", completed: true },
  ];

  beforeEach(() => {
    jest.clearAllMocks(); // Reset all mocks before each test
  });

  test("renders a list of tasks", () => {
    mockUseTaskContext(tasksMock);

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });

  test("renders the correct number of tasks", async () => {
    mockUseTaskContext(tasksMock);

    await waitFor(() => {
      expect(screen.getAllByRole("listitem").length).toBe(2);
    });
  });

  test("marks task as complete when checkbox is clicked", () => {
    const {toggleCompleteMock} = mockUseTaskContext(tasksMock);

    const checkbox = screen.getAllByRole("checkbox")[0];
    userEvent.click(checkbox);

    expect(toggleCompleteMock).toHaveBeenCalledWith(1);
  });

  test("deletes task when delete button is clicked", () => {
    const {deleteTaskMock} = mockUseTaskContext(tasksMock);

    const deleteButton = screen.getAllByRole("button", { name: /delete/i })[0];
    userEvent.click(deleteButton);

    expect(deleteTaskMock).toHaveBeenCalledWith(1);
  });

  test("filters tasks based on the filter value active", () => {
    mockUseTaskContext(tasksMock, "active");

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.queryByText("Task 2")).toBeNull();
  });

  test("filters tasks based on the filter value completed", () => {
    mockUseTaskContext(tasksMock, "completed");

    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.queryByText("Task 1")).toBeNull();
  });
});
