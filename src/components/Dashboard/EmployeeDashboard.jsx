import React from 'react';
import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';
import TaskList from '../Tasklist/Tasklist';

const EmployeeDashboard = (props) => {

  const liveEmployeeData = props.userData?.find(
    (emp) => emp.firstName === props.loggedInUser?.firstName) || props.loggedInUser;
  


  if(!liveEmployeeData) {
    return <div className='p-10 text-white text-2xl'>Loading Dashboard...</div>
  }
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'> 
      <Header changeUser={props.changeUser} data={liveEmployeeData} /> 
      <TaskListNumber data={liveEmployeeData} />
      <TaskList data={liveEmployeeData} updateTaskStatus={props.updateTaskStatus}/>
    </div>
  );
}

export default EmployeeDashboard;