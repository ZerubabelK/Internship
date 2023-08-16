import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Task } from "../types/task";
import {
  completeTask,
  deleteTask,
  editTask,
  filterTasks,
} from "../redux/actions/tasksAction";
import { RootState } from "../redux/store";

const TaskList: React.FC = () => {
  const state = useSelector((state: { reducer: RootState }) => state.reducer);
  const { tasks, filter } = state;

  // define the state for the component
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [newTaskName, setNewTaskName] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  // get the tasks to display
  let displayTasks = () => {
    if (!filter || filter === "all") {
      return tasks;
    } else if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else {
      return tasks.filter((task) => !task.completed);
    }
  };

  const dispatch = useDispatch();
  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setNewTaskName(task.name);
  };

  const handleEditSubmit = () => {
    if (editingTask) {
      dispatch(editTask(editingTask.id, { ...editingTask, name: newTaskName }));
      setEditingTask(null);
      setNewTaskName("");
    }
  };

  const handleEditCancel = () => {
    setEditingTask(null);
    setNewTaskName("");
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleTaskStatusChange = (id: number, status: string, prev: string) => {
    dispatch(completeTask(id, status.toLocaleLowerCase() === "completed"));
  };

  const handleFilter = (status: string) => {
    dispatch(filterTasks(status));
    setToggle(false);
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-end">
        <div className="relative w-max">
          <button
            data-testid="filter-button"
            className="filter-button relative z-10 flex space-x-2 rounded-md bg-white p-2 focus:outline-none"
            onClick={() => setToggle(!toggle)}
          >
            <span>Filter</span>
            <svg
              className="h-5 w-5 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {toggle && (
            <div
              x-show="dropdownOpen"
              data-testid="dropdown"
              className="dropdown absolute right-0 mt-2 py-2  bg-white rounded-md shadow-xl z-20"
            >
              <button
                data-testid="all-filter"
                className="all-filter block px-4 w-full py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                onClick={() => handleFilter("incomplete")}
              >
                All
              </button>
              <button
                data-testid="incomplete-filter"
                className="incomplete-filter block px-4 w-full py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                onClick={() => handleFilter("incomplete")}
              >
                Incomplete
              </button>

              <button
                data-testid="complete-filter"
                className="complete-filter block px-4 w-full py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                onClick={() => handleFilter("completed")}
              >
                Complete
              </button>
            </div>
          )}
        </div>
      </div>
      <ul data-testid="task-list">
        {displayTasks().map((task: Task) => (
          <li
            key={task.id}
            className="flex justify-between items-center py-1 my-2 border-b border-gray-200"
          >
            {editingTask?.id === task.id ? (
              <>
                <input
                  type="text"
                  value={newTaskName}
                  data-testid={`edit-input-${task.id}`}
                  onChange={(e) => setNewTaskName(e.target.value)}
                  className="edit border border-gray-400 rounded-lg p-2 w-full mr-2"
                />
                <button
                  onClick={handleEditSubmit}
                  type="button"
                  data-testid={`save-button-${task.id}`}
                  className="save-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleEditCancel}
                  className="cancel-button bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  Cancel
                </button>
                <hr />
              </>
            ) : (
              <>
                <span className="text-lg">{task.name}</span>
                <div>
                  <div className="relative text-sm inline-flex self-center ">
                    <svg
                      className="text-black bg-gray-700 absolute top-0 right-0 m-1.5 pointer-events-none p-2 rounded"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 38 22"
                      version="1.1"
                    >
                      <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                      <g
                        id="ZahnhelferDE—Design"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="ZahnhelferDE–Icon&amp;Asset-Download"
                          transform="translate(-539.000000, -199.000000)"
                          fill="#ffffff"
                          fillRule="nonzero"
                        >
                          <g
                            id="Icon-/-ArrowRight-Copy-2"
                            transform="translate(538.000000, 183.521208)"
                          >
                            <polygon
                              id="Path-Copy"
                              transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) "
                              points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    <select
                      className=" font-bold rounded border-2 border-gray-200 text-gray-600 h-10 w-32 pl-2 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                      data-testid="task-status"
                      onChange={(e) => {
                        handleTaskStatusChange(
                          task.id,
                          e.target.value,
                          task.completed ? "Completed" : "Incomplete"
                        );
                      }}
                      value={task.completed ? "Completed" : "Incomplete"}
                    >
                      <option value={"Incomplete"}>Incomplete</option>
                      <option value={"Completed"}>Completed</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    data-testid={`edit-button-${task.id}`}
                    onClick={() => handleEdit(task)}
                    className="edit-button text-yellow-500 hover:text-yellow-700  font-bold py-2 px-4 rounded mr-2"
                  >
                    edit
                  </button>
                  <button
                    type="button"
                    data-testid={`delete-button-${task.id}`}
                    onClick={() => handleDelete(task.id)}
                    className="delete-button text-red-500 hover:text-red-700  font-bold py-2 px-4 rounded"
                  >
                    delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
