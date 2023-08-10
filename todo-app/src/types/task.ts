// src/types/task.ts
export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export enum ActionTypes {
  ADD_TASK = "ADD_TASK",
  EDIT_TASK = "EDIT_TASK",
  DELETE_TASK = "DELETE_TASK",
  FILTER_TASKS = "FILTER_TASKS",
  COMPLETE_TASK = "COMPLETE_TASK",
}

export interface AddTaskAction {
  type: ActionTypes.ADD_TASK;
  payload: Task;
}

export interface EditTaskAction {
  type: ActionTypes.EDIT_TASK;
  payload: {
    taskId: number;
    updatedTask: Task;
  };
}

export interface CompleteAction {
  type: ActionTypes.COMPLETE_TASK;
  payload: {
    taskId: number;
    value: boolean;
  };
}

export interface DeleteTaskAction {
  type: ActionTypes.DELETE_TASK;
  payload: number; // taskId
}

export interface FilterTasksAction {
  type: ActionTypes.FILTER_TASKS;
  payload: string; // filterText
}

export type TaskActions =
  | AddTaskAction
  | EditTaskAction
  | DeleteTaskAction
  | CompleteAction
  | FilterTasksAction;
