import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = (props) => {
  return (
    <div className='h-[55%] overflow-x-auto items-center justify-start gap-5 flex flex-nowrap w-full py-5 mt-10'>
      {props.data.tasks && props.data.tasks.map((elem, idx) => {
        if(elem.completed) {
          return <CompleteTask key={idx} data={elem} />
        }
        if(elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }
        if(elem.active) {
          return <AcceptTask key={idx} data={elem} employeeName={props.data.firstName}
          updateTaskStatus={props.updateTaskStatus}/>
        }
        if(elem.newTask) {
          return <NewTask key={idx} data={elem}/>
        }

        return null;
        
      })}
      
      
    </div>
  );
}

export default TaskList;