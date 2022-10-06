import React, { useState } from "react";
import { FaEdit, FaTrash, FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TaskItem = ({ id, taskName, numOfPomodoro, onRemove }) => {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <button
        className=" text-slate-600 text-md w-4"
        onClick={() => setIsTaskCompleted(!isTaskCompleted)}
      >
        {!isTaskCompleted ? <FaRegCircle /> : <FaRegCheckCircle />}
      </button>
      <p>{taskName}</p>
      <p className="text-slate-500">({numOfPomodoro})</p>
      <div className="flex gap-2 text-slate-500 text-sm ml-auto">
        <button>
          <FaEdit />
        </button>
        <button onClick={() => onRemove(id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
