// src/redux/reducers/tasksReducer.ts
import { ActionTypes, TaskActions } from "../../types/task";
import { RootState } from "../store";

const initialState: RootState = {
  tasks: [],
  filter: "",
};

const tasksReducer = (state = initialState, action: TaskActions): RootState => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case ActionTypes.EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId ? action.payload.updatedTask : task
        ),
      };
    case ActionTypes.COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, completed: action.payload.value }
            : task
        ),
      };
    case ActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case ActionTypes.FILTER_TASKS:
      return {
        ...state,
        filter: action.payload.toLocaleLowerCase(),
      };

    default:
      return state;
  }
};

export default tasksReducer;
