import { render, screen } from "@testing-library/react";
import ClearCompleted from "../components/ClearCompleted";
import { useTaskContext } from "../context/TaskProvider";
import userEvent from "@testing-library/user-event";

jest.mock("../context/TaskProvider", () => ({
  useTaskContext: jest.fn(),
}));

// helper function
const renderWithMockedContext = (completedCount = 0) => {
  const mockClearCompleted = jest.fn();
  (useTaskContext as jest.Mock).mockReturnValue({
    completedCount,
    clearCompleted: mockClearCompleted,
  });

  render(<ClearCompleted />);

  return mockClearCompleted;
};

describe("ClearCompleted", () => {
  test("renders and clears the completed tasks when button is clicked", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const mockClearCompleted = renderWithMockedContext(5);

    const clearCompletedButton = screen.getByRole("button", {
      name: /clear completed/i,
    });

    userEvent.click(clearCompletedButton);

    expect(mockClearCompleted).toHaveBeenCalled();
  });

  test("does not render the button when completedCount is 0", () => {
    renderWithMockedContext(0);

    // Ensure the button is not rendered
    expect(
      screen.queryByRole("button", { name: /clear completed/i })
    ).toBeNull();
  });
});
