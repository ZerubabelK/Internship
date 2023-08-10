// src/redux/actions/tasksActions.ts
import {
  Task,
  ActionTypes,
  AddTaskAction,
  EditTaskAction,
  DeleteTaskAction,
  FilterTasksAction,
  CompleteAction,
} from "../../types/task";

export const addTask = (task: Task): AddTaskAction => ({
  type: ActionTypes.ADD_TASK,
  payload: task,
});

export const editTask = (
  taskId: number,
  updatedTask: Task
): EditTaskAction => ({
  type: ActionTypes.EDIT_TASK,
  payload: {
    taskId,
    updatedTask,
  },
});

export const deleteTask = (taskId: number): DeleteTaskAction => ({
  type: ActionTypes.DELETE_TASK,
  payload: taskId,
});

export const filterTasks = (filterText: string): FilterTasksAction => {
  return {
    type: ActionTypes.FILTER_TASKS,
    payload: filterText,
  };
};

export const completeTask = (
  taskId: number,
  value: boolean
): CompleteAction => {
  return {
    type: ActionTypes.COMPLETE_TASK,
    payload: {
      taskId,
      value,
    },
  };
};
