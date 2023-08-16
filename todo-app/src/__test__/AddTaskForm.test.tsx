import { render } from "@testing-library/react";
import AddTaskForm from "../components/AddTaskForm";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { addTask } from "../redux/actions/tasksAction";

const mockStore = configureStore({});

describe("AddTaskForm", () => {
  let store: any;
  let component: any;
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
  it("Should show the input field", () => {
    const input = component.getByTestId("add-task-input");
    expect(input).toBeDefined();
  });
  it("Should show the add button", () => {
    const button = component.getByTestId("add-task-button");
    expect(button).toBeDefined();
  });
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
  it("Should not add an empty task", () => {
    const input = component.getByTestId("add-task-input");
    const button = component.getByTestId("add-task-button");
    input.value = "";
    button.click();
    const actions = store.getActions();
    expect(actions).toEqual([]);
  });
});
