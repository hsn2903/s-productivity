import React from "react";
import PropTypes from "prop-types";

const Alert = ({ alertType, alertText }) => {
  return (
    <div>
      {alertType === "info" && (
        <div
          className="px-4 py-2 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
          role="alert"
        >
          {alertText}
        </div>
      )}

      {alertType === "danger" && (
        <div
          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          {alertText}
        </div>
      )}

      {alertType === "success" && (
        <div
          className="px-4 py-2 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          {alertText}
        </div>
      )}

      {alertType === "warning" && (
        <div
          className="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
          role="alert"
        >
          {alertText}
        </div>
      )}

      {alertType === "dark" && (
        <div
          className="p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
          role="alert"
        >
          {alertText}
        </div>
      )}
    </div>
  );
};

Alert.propTypes = {
  alertType: PropTypes.string.isRequired,
  alertText: PropTypes.string,
};

Alert.defaultProps = {
  alertType: "success",
  alertText: "Operation successfull",
};

export default Alert;
