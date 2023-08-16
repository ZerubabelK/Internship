# Unit Test Documentation: App Component

This documentation provides an overview and explanation of the unit test written in Jest for the `App` component in a React application.

## Test Setup

The following imports are required for the test:

```javascript
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../App";
```

The `render` and `fireEvent` functions are imported from `@testing-library/react` to render the component and simulate user interactions during testing. The `Provider` component from `react-redux` is used to provide the Redux store to the component. The `configureStore` function from `redux-mock-store` is used to create a mock Redux store. The `App` component is imported from `../App` for testing.

A mock store is created using the `configureStore` function:

```javascript
const mockStore = configureStore([]);
```

## Test Case

The `describe` block is used to group the test cases for the `App` component:

```javascript
describe("App component", () => {
  // ...
});
```

### Test Case: Render App component

```javascript
it("Render App component", () => {
  expect(component).toBeTruthy();
});
```

This test case verifies that the `App` component is rendered successfully without any errors. The `expect` function is used with the `toBeTruthy` matcher to assert that the `component` variable, which holds the rendered component, is truthy.

## Before Each Hook

The `beforeEach` hook is used to set up the necessary variables and render the component before each test case:

```javascript
beforeEach(() => {
  store = mockStore({
    reducer: {
      tasks: [],
      filter: "All",
    },
  });
  component = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
```

In this hook, a new instance of the mock Redux store is created using the `mockStore` function. The store is initialized with an initial state object that includes an empty array for `tasks` and a filter value of "All". The `App` component is rendered within the `Provider` component, which receives the mock store as a prop.

This setup ensures that the `App` component is rendered with the necessary Redux store and initial state before each test case.

## Conclusion

This documentation explains the unit test written in Jest for the `App` component in a React application. It covers the setup, the test case to verify the successful rendering of the component, and the `beforeEach` hook used for rendering the component and setting up the necessary variables before each test case. The test case simply ensures that the `App` component is rendered without any errors.

# Unit Test Documentation: AddTaskForm

This documentation provides an overview and explanation of the unit test written in Jest for the `AddTaskForm` component in a React application.

## Test Setup

The following imports are required for the test:

```javascript
import { render } from "@testing-library/react";
import AddTaskForm from "../components/AddTaskForm";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { addTask } from "../redux/actions/tasksAction";
```

The `render` function is imported from `@testing-library/react` to render the component, `AddTaskForm`, for testing. The `Provider` component from `react-redux` is used to provide the Redux store to the component. The `configureStore` function from `redux-mock-store` is used to create a mock Redux store. The `addTask` action from `../redux/actions/tasksAction` is imported to dispatch the action during the test.

A mock store is created using the `configureStore` function:

```javascript
const mockStore = configureStore({});
```

## Test Cases

The `describe` block is used to group the test cases for the `AddTaskForm` component:

```javascript
describe("AddTaskForm", () => {
  // ...
});
```

### Test Case 1: Should show the input field

```javascript
it("Should show the input field", () => {
  const input = component.getByTestId("add-task-input");
  expect(input).toBeDefined();
});
```

This test case verifies that the input field is rendered and displayed on the component. It uses the `getByTestId` function from `@testing-library/react` to select the input field element by its test ID.

### Test Case 2: Should show the add button

```javascript
it("Should show the add button", () => {
  const button = component.getByTestId("add-task-button");
  expect(button).toBeDefined();
});
```

This test case ensures that the add button is rendered and displayed on the component. It uses the `getByTestId` function to select the add button element based on its test ID.

### Test Case 3: Should dispatch the add task action

```javascript
it("Should dispatch the add task action", () => {
  const input = component.getByTestId("add-task-input");
  const button = component.getByTestId("add-task-button");
  input.value = "test";
  button.click();
  store.dispatch(addTask({ id: 3, name: "test", completed: false }));
  const actions = store.getActions();
  expect(actions).toEqual([
    { type: "ADD_TASK", payload: { id: 3, name: "test", completed: false } },
  ]);
});
```

This test case verifies that the add task action is dispatched correctly when the add button is clicked. It simulates the user input by setting the value of the input field to "test" and then triggers a click event on the add button. The `store.dispatch` function is used to dispatch the `addTask` action with a specific payload. Finally, the `store.getActions` function is used to retrieve the dispatched actions, and the expected actions are compared using `toEqual`.

### Test Case 4: Should not add an empty task

```javascript
it("Should not add an empty task", () => {
  const input = component.getByTestId("add-task-input");
  const button = component.getByTestId("add-task-button");
  input.value = "";
  button.click();
  const actions = store.getActions();
  expect(actions).toEqual([]);
});
```

This test case verifies that an empty task is not added when the add button is clicked. It sets the value of the input field to an empty string and triggers a click event on the add button. The `store.getActions` function is used to retrieve the dispatched actions, and it is expected that no actions are dispatched, as indicated by an empty array.

## Before Each Hook

The `beforeEach` hook is used to set up the necessary variables and render the component before each test case:

```javascript
beforeEach(() => {
  store = mockStore({
    reducer: {
      tasks: [],
      filter: "All",
    },
  });

  component = render(
    <Provider store={store}>
      <AddTaskForm />
    </Provider>
  );
});
```

In this hook, a new instance of the mock Redux store is created using the `mockStore` function. The store is initialized with an initial state object that includes an empty array for `tasks` and a filter value of "All". The `AddTaskForm` component is rendered within the `Provider` component, which receives the mock store as a prop.

This setup ensures that the component is rendered with the necessary Redux store and initial state before each test case.

## Conclusion

This documentation explains the unit test written in Jest for the `AddTaskForm` component in a React application. It coversthe setup, test cases, and the `beforeEach` hook used for rendering the component and setting up the necessary variables before each test case. The test cases include verifying the presence of the input field and add button, testing the dispatch of the add task action, and ensuring that an empty task is not added.

# Unit Test Documentation: TaskList Component

This documentation provides an overview and explanation of the unit test written in Jest for the `TaskList` component in a React application.

## Test Setup

The following imports are required for the test:

```javascript
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render, fireEvent, cleanup } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { compose } from "redux";
```

The `Provider` component from `react-redux` is used to provide the Redux store to the component. The `configureStore` function from `redux-mock-store` is used to create a mock Redux store. The `render`, `fireEvent`, and `cleanup` functions are imported from `@testing-library/react` for rendering the component, simulating user interactions, and cleaning up after each test. The `TaskList` component is imported from `../components/TaskList` for testing.

A mock store is created using the `configureStore` function:

```javascript
const mockStore = configureStore([]);
```

## Test Case

The `describe` block is used to group the test cases for the `TaskList` component:

```javascript
describe("TaskList component", () => {
  // ...
});
```

### Test Case: Should render the component

```javascript
it("Should render the component", () => {
  expect(component).toBeDefined();
});
```

This test case verifies that the `TaskList` component is rendered successfully without any errors. The `expect` function is used with the `toBeDefined` matcher to assert that the `component` variable, which holds the rendered component, is defined.

### Test Case: Should show the filter buttons

```javascript
it("Should show the filter buttons", () => {
  const { getByTestId } = component;
  const filterButtons = getByTestId("filter-button");
  expect(filterButtons).toBeDefined();
});
```

This test case ensures that the filter buttons are displayed in the `TaskList` component. It uses the `getByTestId` function to retrieve the filter buttons by their test IDs and asserts that they are defined using the `toBeDefined` matcher.

### Test Case: Should show the filter options dropdown

```javascript
it("Should show dropdown the filter options", () => {
  const { getByTestId } = component;
  const filterButtons = getByTestId("filter-button");
  fireEvent.click(filterButtons);
  const filterOptions = getByTestId("dropdown");
  expect(filterOptions).toBeDefined();
});
```

This test case verifies that the filter options dropdown is displayed when the filter buttons are clicked. It simulates a click event on the filter buttons using the `fireEvent.click` function and checks if the filter options dropdown is defined using the `toBeDefined` matcher.

### Test Case: Should dispatch the action to change the filter

```javascript
it("Should dispatch the action to change the filter", () => {
  const { getByTestId } = component;
  const filterButtons = getByTestId("filter-button");
  fireEvent.click(filterButtons);
  const incompleteButton = getByTestId("incomplete-filter");
  fireEvent.click(incompleteButton);
  const action = store.getActions();
  expect(action).toMatchSnapshot();
});
```

This test case ensures that the correct action is dispatched when a filter option is selected. It simulates a click event on the incomplete filter button, retrieves the dispatched actions from the mock store using `store.getActions()`, and asserts that the actions match the snapshot using the `toMatchSnapshot` matcher.

### Test Case: Should list the tasks

```javascript
it("Should list the tasks", () => {
  const { getByText } = component;
  tasks.map((task) => {
    const taskName = getByText(task.name);
    expect(taskName).toBeDefined();
  });
});
```

This test case verifies that the tasks are correctly listed in the `TaskList` component. It iterates over the `tasks` array and checks if each task's name is displayed in the component using the `getByText` function. It asserts that the task name is defined using the `toBeDefined` matcher.

### Test Case: Should edit the task

```javascript
it("Should edit the task", () => {
  const { getByTestId } = component;
  const editButton = getByTestId("edit-button-1");
  fireEvent.click(editButton);
  const editInput = getByTestId("edit-input-1");
  fireEvent.change(editInput, { target: { value: "Task 1 Edited" } });
  const saveButton = getByTestId("save-button-1");
  fireEvent.click(saveButton);
  const action = store.getActions();
  expect(action).toMatchSnapshot();
});
```

This test case ensures that a task can be edited in the `TaskList` component. It simulates a click event on the edit button for a specific task, changes the value of the edit input field, simulates a clickevent on the save button, retrieves the dispatched actions from the mock store using `store.getActions()`, and asserts that the actions match the snapshot using the `toMatchSnapshot` matcher.

### Test Case: Should delete the task

```javascript
it("Should delete the task", () => {
  const { getByTestId } = component;
  const deleteButton = getByTestId("delete-button-1");
  fireEvent.click(deleteButton);
  const action = store.getActions();
  expect(action).toMatchSnapshot();
});
```

This test case verifies that a task can be deleted in the `TaskList` component. It simulates a click event on the delete button for a specific task, retrieves the dispatched actions from the mock store using `store.getActions()`, and asserts that the actions match the snapshot using the `toMatchSnapshot` matcher.

## Before Each Hook

The `beforeEach` hook is used to set up the necessary variables and render the component before each test case:

```javascript
beforeEach(() => {
  store = mockStore({
    reducer: {
      tasks,
      filter: "All",
    },
  });
  component = render(
    <Provider store={store}>
      <TaskList />
    </Provider>
  );
});
```

In this hook, a new instance of the mock Redux store is created using the `mockStore` function. The store is initialized with an initial state object that includes an array of `tasks` and a filter value of "All". The `TaskList` component is rendered within the `Provider` component, which receives the mock store as a prop.

This setup ensures that the `TaskList` component is rendered with the necessary Redux store and initial state before each test case.

## Conclusion

This documentation explains the unit test written in Jest for the `TaskList` component in a React application. It covers the setup, the test cases to verify the rendering of the component, the display of filter buttons and options, dispatching actions to change the filter, listing tasks, editing tasks, and deleting tasks. The `beforeEach` hook is used to set up the necessary variables and render the component before each test case.
