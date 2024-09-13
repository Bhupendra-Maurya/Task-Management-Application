import { render, screen } from "@testing-library/react";
import { useTaskContext } from "../context/TaskProvider";
import TaskStats from "../components/TaskStats";

jest.mock("../context/TaskProvider", () => ({
  useTaskContext: jest.fn(),
}));

// Helper function to mock useTaskContext
const renderWithMockedContext = (total = 0, completed = 0, active = 0) => {
  (useTaskContext as jest.Mock).mockReturnValue({
    getTaskCounts: () => ({
      total,
      completed,
      active,
    }),
  });

  render(<TaskStats />);
};

describe("TaskStats", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("renders the task stats correctly", () => {
    // Mock values
    renderWithMockedContext(10, 6, 4);

    // Assert total, completed, and active task counts are displayed correctly
    expect(screen.getByText("Total Tasks: 10")).toBeInTheDocument();
    expect(screen.getByText("Completed Tasks: 6")).toBeInTheDocument();
    expect(screen.getByText("Active Tasks: 4")).toBeInTheDocument();
  });
  test("renders zero task stats correctly", () => {
    // Mock values
    renderWithMockedContext(0, 0, 0);

    // Assert the task counts for zero
    expect(screen.getByText("Total Tasks: 0")).toBeInTheDocument();
    expect(screen.getByText("Completed Tasks: 0")).toBeInTheDocument();
    expect(screen.getByText("Active Tasks: 0")).toBeInTheDocument();
  });
});
