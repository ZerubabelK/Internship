// src/redux/store.ts
import { createStore, combineReducers } from "redux";
import tasksReducer from "./reducers/tasksReducer";
import { Task } from "../types/task";

export interface RootState {
  tasks: Task[];
  filter: string;
}

const rootReducer = combineReducers({
  reducer: tasksReducer,
});

const store = createStore(rootReducer);

export default store;
