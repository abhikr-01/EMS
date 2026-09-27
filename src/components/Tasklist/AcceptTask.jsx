import React from 'react';

const AcceptTask = ({data, employeeName, updateTaskStatus}) => {
  return (
    <div className = 'flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>
          {data.taskDescription}
        </p>

      <div className = 'flex justify-between mt-4'>
        <button onClick={() => updateTaskStatus && updateTaskStatus(employeeName, data.taskTitle, 'completed')} className='bg-green-500 px-2 py-1 text-sm'>Mark as Completed</button>
        <button onClick={() => updateTaskStatus && updateTaskStatus(employeeName, data.taskTitle, 'failed')} className='bg-red-500 px-2 py-1 text-sm'>Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask;