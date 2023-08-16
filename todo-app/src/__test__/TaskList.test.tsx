// test for TaskList component
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render, fireEvent, cleanup } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { compose } from "redux";

const mockStore = configureStore([]);

describe("TaskList component", () => {
  let store: any;
  let component: any;
  const tasks = [
    {
      id: 1,
      name: "Task 1",
      completed: false,
    },
    {
      id: 2,
      name: "Task 2",
      completed: false,
    },
  ];
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

  it("Should render the component", () => {
    expect(component).toBeDefined();
  });

  it("Should show the filter buttons", () => {
    const { getByTestId } = component;
    const filterButtons = getByTestId("filter-button");
    expect(filterButtons).toBeDefined();
  });

  it("Should show dropdown the filter options", () => {
    const { getByTestId } = component;
    const filterButtons = getByTestId("filter-button");
    fireEvent.click(filterButtons);
    const filterOptions = getByTestId("dropdown");
    expect(filterOptions).toBeDefined();
  });

  it("Should dispatch the action to change the filter", () => {
    const { getByTestId } = component;
    const filterButtons = getByTestId("filter-button");
    fireEvent.click(filterButtons);
    const incompleteButton = getByTestId("incomplete-filter");
    fireEvent.click(incompleteButton);
    const action = store.getActions();
    expect(action).toMatchSnapshot();
  });

  it("Should list the tasks", () => {
    const { getByText } = component;
    tasks.map((task) => {
      const taskName = getByText(task.name);
      expect(taskName).toBeDefined();
    });
  });
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
  it("Should delete the task", () => {
    const { getByTestId } = component;
    const deleteButton = getByTestId("delete-button-1");
    fireEvent.click(deleteButton);
    const action = store.getActions();
    expect(action).toMatchSnapshot();
  });
});
