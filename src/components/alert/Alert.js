import React from "react";

const Alert = ({ alertType = "info", alertext = "success" }) => {
  return (
    <div>
      {alertType === "info" && (
        <div
          class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
          role="alert"
        >
          {alertext}
        </div>
      )}

      {alertType === "danger" && (
        <div
          class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          {alertext}
        </div>
      )}

      {alertType === "success" && (
        <div
          class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          {alertext}
        </div>
      )}

      {alertType === "warning" && (
        <div
          class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
          role="alert"
        >
          {alertext}
        </div>
      )}

      {alertType === "dark" && (
        <div
          class="p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
          role="alert"
        >
          {alertext}
        </div>
      )}
    </div>
  );
};

export default Alert;
