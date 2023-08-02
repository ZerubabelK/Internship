import React from "react";

interface Props {
  editTask: (id: number, name: string) => void;
  taskName?: string;
  id?: number;
}

const EditTask: React.FC<Props> = ({ editTask, taskName, id }) => {
  const [ntaskName, setTaskName] = React.useState<string>(taskName || "");
  const handleEditTask = () => {
    editTask(id || -1, ntaskName);
    setTaskName("");
  };
  return (
    <div className="flex justify-center items-center space-x-2">
      <input
        type="text"
        className="w-96 border border-gray-400 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={ntaskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button
        className="bg-blue-400 px-2 py-1 rounded-md text-white"
        onClick={handleEditTask}
      >
        Edit Task
      </button>
    </div>
  );
};

export default EditTask;
