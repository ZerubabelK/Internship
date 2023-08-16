import React, { useState, createContext, useContext } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container min-h-screen bg-gray-100 py-9 ">
        <div className="lg:max-w-screen-lg bg-white mx-auto px-4 py-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-500">
            Task List
          </h1>

          <AddTaskForm />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
};

export default App;

if ((window as any).Cypress) {
  (window as any).store = store;
}
