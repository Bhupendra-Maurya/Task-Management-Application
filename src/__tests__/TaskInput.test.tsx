import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskInput from "../components/TaskInput";
import { useTaskContext } from "../context/TaskProvider";

// Mock useTaskContext to control the context behavior in tests
jest.mock("../context/TaskProvider", () => ({
  useTaskContext: jest.fn(),
}));

// Common setup function for rendering and returning key elements
const renderWithSetup = () => {
  render(<TaskInput />);
  const input = screen.getByPlaceholderText(/add a new task/i);
  const button = screen.getByRole("button", { name: /add task/i });
  return { input, button };
};

describe("TaskInput", () => {
  const addTaskMock = jest.fn();

  beforeEach(() => {
    // Reset the mock before each test
    addTaskMock.mockReset();
    // Mock the return value of useTaskContext
    (useTaskContext as jest.Mock).mockReturnValue({
      addTask: addTaskMock,
    });
  });

  test("renders input field and button", () => {
    const { input, button } = renderWithSetup();
    // Ensure the input field and button are in the document
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("updates input field value", () => {
    const { input } = renderWithSetup();

    // Simulate typing into the input field
    userEvent.type(input, "New Task");

    // Ensure the input value updates
    expect(input).toHaveValue("New Task");
  });

  test("addTask on form submission", () => {
    const { input, button } = renderWithSetup();

    // Simulate typing and submitting the form
    userEvent.type(input, "New Task");
    userEvent.click(button);

    // Ensure addTask was called with the correct argument
    expect(addTaskMock).toHaveBeenCalledWith("New Task");
  });
});
