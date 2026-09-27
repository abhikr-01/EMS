import React from "react";

const AllTask = ({userData}) => {

  return (
    <div className="p-5 bg-[#1c1c1c] rounded mt-5 h-48">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 text-lg font-medium ">Employee Name</h2>
        <h2 className="w-1/5 text-lg font-medium ">New Task</h2>
        <h2 className="w-1/5 text-lg font-medium ">Active Task</h2>
        <h2 className="w-1/5 text-lg font-medium ">Complete</h2>
        <h2 className="w-1/5 text-lg font-medium ">Failed</h2>
      </div>
      <div className="">
        {userData && userData.map(function (elem ,idx) {
          return (
            <div key={idx} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className="w-1/5 text-lg font-medium">{elem.firstName}</h2>
              <h2 className="w-1/5 text-lg font-mediumtext-blue-400">{elem.taskNumber.newTask}</h2>
              <h2 className="w-1/5 text-lg font-mediumtext-yellow-400">{elem.taskNumber.active}</h2>
              <h2 className="w-1/5 text-lg font-medium text-green-400">{elem.taskNumber.completed}</h2>
              <h2 className="w-1/5 text-lg font-medium text-red-400">{elem.taskNumber.failed}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
