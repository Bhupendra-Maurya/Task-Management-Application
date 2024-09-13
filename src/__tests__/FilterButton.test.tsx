import userEvent from "@testing-library/user-event";
import FilterButtons from "../components/FilterButtons";
import { render, screen } from "@testing-library/react";
import { useTaskContext } from "../context/TaskProvider";

// Mock the useTaskContext hook
jest.mock("../context/TaskProvider", () => ({
  useTaskContext: jest.fn(),
}));

// Helper function to mock useTaskContext and render component
export const renderWithMockedContext = (filter = "all") => {
  const mockSetFilter = jest.fn();

  (useTaskContext as jest.Mock).mockReturnValue({
    filter,
    setFilter: mockSetFilter,
  });

  render(<FilterButtons />);

  return mockSetFilter;
};
describe("FilterButton", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const testCases = [
    { filter: "all", buttonText: /all/i },
    { filter: "active", buttonText: /active/i },
    { filter: "completed", buttonText: /completed/i },
  ];

  test.each(testCases)(
    "calls setFilter when '%s' filter button is clicked",
    ({ filter, buttonText }) => {
      // eslint-disable-next-line testing-library/render-result-naming-convention
      const mockSetFilter = renderWithMockedContext(filter);

      const button = screen.getByRole("button", { name: buttonText });
      userEvent.click(button);

      // Ensure setFilter is called when the button is clicked
      expect(mockSetFilter).toHaveBeenCalled();
    }
  );
});
