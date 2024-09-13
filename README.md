
# Task Management Application

Welcome to the Task Management Application! This is a React-based project that allows users to manage tasks efficiently. The application features task creation, filtering, and completion functionality. It leverages the React Context API for state management and includes a range of features designed to help users keep track of their tasks.

### Watch the demo

[![Watch the video](https://github.com/user-attachments/assets/746baf44-ddc0-4ca3-9779-489f5c12a07b)](https://drive.google.com/file/d/14AIye7YI_FN4q9qG0ZlOOQJHPqIO7Vs9/view?usp=sharing)


## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)
7. [Testing](#testing)
8. [Contributing](#contributing)


## Features

- **Add Tasks**: Users can add new tasks through an input field.
- **Toggle Task Completion**: Mark tasks as completed or active.
- **Filter Tasks**: View tasks based on their completion status with filters for "All", "Active", and "Completed".
- **Clear Completed Tasks**: Remove all completed tasks with a single click.
- **Task Stats**: View the total number of tasks, completed tasks, and active tasks.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **React Context API**: For state management and sharing state across components.
- **React Testing Library**: For testing React components in a way that simulates user interactions.
- **Jest**: A testing framework used for running unit tests.

## Getting Started

To get started with the Task Management Application, follow these steps:

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Bhupendra-Maurya/Task-Management-Application.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd Task-Management-Application
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

### Usage

1. **Run the development server**:

   ```bash
   npm start
   ```

   This will start the application and open it in your default web browser. The app will be available at `http://localhost:3000`.

2. **Build for production**:

   ```bash
   npm run build
   ```

   This command creates a production-ready build of the application in the `build` directory.

### Folder Structure

The project is organized into the following main folders and files:

- **`src/`**: Contains the main application code.
  - **`__tests__/`**: Contains test files and test utilities.
  - **`components/`**: React components for the application.
    - `TaskList.tsx`: Component displaying the list of tasks.
    - `TaskInput.tsx`: Component for adding new tasks.
    - `FilterButtons.tsx`: Component for filtering tasks.
    - `ClearCompleted.tsx`: Component for clearing completed tasks.
    - `TaskStats.tsx`: Component for displaying task statistics.
  - **`context/`**: Contains context providers and hooks.
    - `TaskContext.ts`: Creates context for task management.
    - `TaskProvider.tsx`: Provides context for task management.
  - **`types/`**: Contains TypeScript interfaces.
  - **`App.tsx`**: Main application component.
  - **`index.tsx`**: Entry point of the application.
- **`public/`**: Public assets and the main HTML file.
- **`package.json`**: Project metadata and dependencies.

### Testing

The project uses Jest and React Testing Library for testing. To run the tests, use the following commands:

- **Run all tests**:

  ```bash
  npm test
  ```

- **Run a specific test file**:

  ```bash
  npm test TaskList
  ```

- **Generate a code coverage report**:

  ```bash
  npm run coverage
  ```

  This command generates a coverage report and places it in the `coverage` directory. Open the `index.html` file located in `coverage/lcov-report` to view the report in your browser.

### Test Setup

The `setupTest.ts` file configures Jest to suppress specific console errors related to CSS stylesheet parsing:

```typescript
import '@testing-library/jest-dom';

let consoleSpy: jest.SpyInstance;

beforeAll(() => {
    consoleSpy = jest.spyOn(global.console, 'error').mockImplementation((message) => {
        if (!message?.message?.includes('Could not parse CSS stylesheet')) {
            global.console.warn(message);
        }
    });
});

afterAll(() => consoleSpy.mockRestore());
```

This configuration ensures that irrelevant warnings are not shown during test runs.

## Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**.
2. **Create a new branch**:

   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make your changes** and **commit them**:

   ```bash
   git add .
   git commit -m "Add your commit message"
   ```

4. **Push your changes** to your fork:

   ```bash
   git push origin feature/your-feature
   ```

5. **Create a pull request** from your fork to the main repository.

   
![image](https://github.com/user-attachments/assets/2bcf9e02-11c1-438c-8b7b-7d223c9301f7)
![image](https://github.com/user-attachments/assets/b6d061ab-7450-4575-8eec-7dd29ca3174d)





