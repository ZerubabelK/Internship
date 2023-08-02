import React, { useState } from "react";
import { Task, useTodo } from "../App";

const TaskList: React.FC = () => {
  const { tasks, updateTask, deleteTask } = useTodo();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [newTaskName, setNewTaskName] = useState("");

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setNewTaskName(task.name);
  };

  const handleEditSubmit = () => {
    if (editingTask) {
      updateTask(editingTask.id, newTaskName);
      setEditingTask(null);
      setNewTaskName("");
    }
  };

  const handleEditCancel = () => {
    setEditingTask(null);
    setNewTaskName("");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center py-2">
            {editingTask?.id === task.id ? (
              <>
                <input
                  type="text"
                  value={newTaskName}
                  onChange={(e) => setNewTaskName(e.target.value)}
                  className="border border-gray-400 rounded-lg p-2 w-full mr-2"
                />
                <button
                  onClick={handleEditSubmit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
                <button
                  onClick={handleEditCancel}
                  className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="text-lg">{task.name}</span>
                <div>
                  <button
                    onClick={() => handleEdit(task)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
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
