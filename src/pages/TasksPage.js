import React, { useReducer, useState } from "react";
import { Alert, TaskItem } from "../components";

const reducer = (state, action) => {
  if (action.type === "ADD_TASK") {
    const newTasks = [...state.tasks, action.payload];
    return { ...state, tasks: newTasks, showAlert: true };
  }

  if (action.type === "REMOVE_TASK") {
    const newTasks = state.tasks.filter((t) => t.id !== action.payload);
    return { ...state, tasks: newTasks };
  }

  throw new Error("no matching action type");
};

const initialArg = {
  tasks: [],
  showAlert: false,
  alertText: "",
  alertType: "",
};

const TasksPage = () => {
  const [task, setTask] = useState({
    taskName: "",
    numOfPomodoro: "",
    isDone: false,
  });

  const [state, dispatch] = useReducer(reducer, initialArg);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTask({ ...task, id: new Date().getTime().toString(), [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.taskName) {
      // show alert
    }

    dispatch({ type: "ADD_TASK", payload: task });

    setTask({ taskName: "", numOfPomodoro: "", done: false });
  };

  const handleRemove = (id) => {
    // setTasksList(newTasks);

    dispatch({ type: "REMOVE_TASK", payload: id });
  };

  return (
    <main className="container mx-auto mt-24">
      <div className="w-1/2 flex flex-col gap-2">
        <h1 className="font-bold text-center text-2xl">New Task</h1>

        {state.showAlert && <Alert />}
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            className="border border-1 border-blue-300 rounded-md px-4"
            name="taskName"
            placeholder="task name"
            value={task.taskName}
            onChange={handleChange}
          />
          <input
            type="number"
            className="border border-1 border-blue-300 rounded-md px-4"
            name="numOfPomodoro"
            placeholder="number of pomodoro"
            value={task.numOfPomodoro}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn bg-blue-900 text-slate-100 rounded-md w-32 self-end"
          >
            add
          </button>
        </form>

        <h1 className="text-xl font-bold text-slate-700">Tasks List</h1>
        {state.tasks.map((item) => {
          const { id, taskName, numOfPomodoro } = item;
          return <TaskItem key={id} {...item} onRemove={handleRemove} />;
        })}
      </div>
    </main>
  );
};

export default TasksPage;
