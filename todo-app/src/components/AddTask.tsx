import React, { useState } from "react";
import { Task, useTodo } from "../App";

const AddTaskForm: React.FC = () => {
  const { addTask } = useTodo();
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTaskName) {
      const task: Task = {
        id: Date.now(),
        name: newTaskName,
      };
      addTask(task);
      setNewTaskName("");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mt-4">
      <form
        onSubmit={handleSubmit}
        className="flex justify-between items-center"
      >
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="border border-gray-400 rounded-lg p-2 w-[90%] mr-2"
          placeholder="Enter a new task..."
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
