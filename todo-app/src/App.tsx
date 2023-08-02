import React, { useState, createContext, useContext } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTask";

export interface Task {
  id: number;
  name: string;
}
interface ProviderProps {
  children: React.ReactNode;
}

interface TodoContextValue {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (id: number, name: string) => void;
  deleteTask: (id: number) => void;
}

const TodoContext = createContext<TodoContextValue>({
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});

export const useTodo = () => useContext(TodoContext);

const TodoProvider: React.FC<ProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (id: number, name: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, name } : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const value: TodoContextValue = {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  };

  return (
    <TodoContext.Provider value={value}>
      <div className="space-y-5">{children}</div>
    </TodoContext.Provider>
  );
};

const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <TodoProvider>
        <AddTaskForm />
        <TaskList />
      </TodoProvider>
    </div>
  );
};

export default App;
