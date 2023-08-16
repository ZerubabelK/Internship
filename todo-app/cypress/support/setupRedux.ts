import { createStore } from "redux";
import tasksReducer from "../../src/redux/reducers/tasksReducer";

const store = createStore(tasksReducer);

Cypress.Commands.add("getReduxStore", () => {
  return store;
});
