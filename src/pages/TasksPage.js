import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TasksPage = () => {
  const [task, setTask] = useState({ taskName: "", numOfPomodoro: "" });
  const [tasksList, setTasksList] = useState([]);

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

    setTasksList([...tasksList, task]);
    setTask({ taskName: "", numOfPomodoro: "" });
  };

  return (
    <main className="container mx-auto mt-24">
      <div className="w-1/2 flex flex-col gap-2">
        <h1 className="font-bold text-center text-3xl">New Task</h1>
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
        {tasksList.map((item) => {
          const { id, taskName, numOfPomodoro } = item;
          return (
            <div className="flex justify-between items-center" key={id}>
              <p>{taskName}</p>
              <p>{numOfPomodoro}</p>
              <div className="flex gap-2 text-slate-600 text-sm">
                <button>
                  <FaEdit />
                </button>
                <button>
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default TasksPage;
