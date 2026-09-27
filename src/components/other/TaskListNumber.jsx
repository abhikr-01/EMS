import React from "react";

const TaskListNumber = ({ data }) => {
  let newTaskCount = 0;
  let activeCount = 0;
  let completedCount = 0;
  let failedCount = 0;

  if (Array.isArray(data)) {
    data.forEach(function (elem) {
      if (elem.taskNumber) {
        newTaskCount += elem.taskNumber.newTask || 0;
        activeCount += elem.taskNumber.active || 0;
        completedCount += elem.taskNumber.completed || 0;
        failedCount += elem.taskNumber.failed || 0;
      }
    });
  } else if (data && data.taskNumber) {
    newTaskCount += data.taskNumber.newTask || 0;
    activeCount += data.taskNumber.active || 0;
    completedCount += data.taskNumber.completed || 0;
    failedCount += data.taskNumber.failed || 0;
  }
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-semibold">{newTaskCount}</h2>
        <h3 className="text-xl font-medium">New Tasks</h3>
      </div>

      <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-semibold">{activeCount}</h2>
        <h3 className="text-xl font-medium">Active Tasks</h3>
      </div>

      <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-semibold">{completedCount}</h2>
        <h3 className="text-xl font-medium">Completed Tasks</h3>
      </div>

      <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl font-semibold">{failedCount}</h2>
        <h3 className="text-xl font-medium">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
