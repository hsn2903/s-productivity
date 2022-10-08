export const reducer = (state, action) => {
  if (action.type === "ADD_TASK") {
    const newTasks = [...state.tasks, action.payload];
    return {
      ...state,
      tasks: newTasks,
      showAlert: true,
      alertType: "success",
      alertText: "task added",
    };
  }

  if (action.type === "REMOVE_TASK") {
    const newTasks = state.tasks.filter((t) => t.id !== action.payload);
    return {
      ...state,
      tasks: newTasks,
      showAlert: true,
      alertType: "danger",
      alertText: "task deleted",
    };
  }

  if (action.type === "CLEAR_ALERT") {
    return { ...state, showAlert: false };
  }

  if (action.type === "CLEAR_TASKS") {
    return { ...state, tasks: [] };
  }

  // if there is no matching action
  throw new Error("no matching action type");
};
