import React, { useState } from "react";
import { Task } from "../types/task";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/tasksAction";

const AddTaskForm: React.FC = () => {
  const [newTaskName, setNewTaskName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTaskName) {
      const task: Task = {
        id: Math.floor(Math.random() * 1000) + 1,
        name: newTaskName,
        completed: false,
      };
      dispatch(addTask(task));
      setNewTaskName("");
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 mt-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-12 items-center">
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="border border-gray-400 rounded-lg p-2 mr-2 col-span-10"
          placeholder="Enter a new task..."
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded col-span-2"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
