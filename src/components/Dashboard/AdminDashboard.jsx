import React, {useState, useEffect } from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
import TaskListNumber from "../other/TaskListNumber";

const AdminDashboard = (props) => {

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('employees')) || [];
  //   setUserData(data);
  // }, []);

  return (
    <div className="h-screen w-full p-10 ">
      <Header changeUser = {props.changeUser}/>
      <CreateTask setUserData = {props.setUserData} />
      <AllTask userData = {props.userData} />
      
    </div>
  );
};

export default AdminDashboard;
