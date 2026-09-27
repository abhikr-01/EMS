import React, { useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useEffect } from "react";
import { useContext } from "react";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useState([]);

  

  useEffect(() => {
  const sessionLog = localStorage.getItem('loggedInUser');

    if (sessionLog) {
      const activeSession = JSON.parse(sessionLog);
      setUser(activeSession.role);
      setLoggedInUserData(activeSession.data);
      
      const employeesData = JSON.parse(localStorage.getItem('employees'));
      if(employeesData) {
        setUserData(employeesData);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData && userData.length > 0) {
      const employee = userData.find(
        (e) => email == e.email && password == e.password,
      );
       if (employee) {
         setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee }),
        );
       } else {
         alert("Invalid credentials");
       }
    }
  };

  const updateTaskStatus = (employeeName, taskTitle, newStatus) => {
    const updatedData = userData.map((emp) => {
      if(emp.firstName === employeeName) {
        const updatedTasks = emp.tasks.map((task) => {
          if(task.taskTitle === taskTitle) {
            return {
              ...task,
              active: newStatus === 'completed' || newStatus === 'failed' ? false: task.active,
              newTask: newStatus === 'completed' || newStatus === 'failed' ? false: task.newTask,
              completed: newStatus === 'completed' ? true: false,
              failed: newStatus === 'failed' ? true: false,
            }
          }
          return task;
        });

        const counts = {...emp.taskNumber};
        if(newStatus === 'completed') {
          if(counts.active > 0) counts.active -=1;
          if(counts.newTask > 0) counts.newTask -=1;
          counts.completed += 1;
        } else if (newStatus === 'failed') {
          if(counts.active > 0) counts.active -=1;
          if(counts.newTask > 0) counts.newTask -=1;
          counts.failed += 1;
        }

        return {...emp, tasks: updatedTasks, taskNumber: counts};

      }
      return emp;
    })
    setUserData(updatedData);
    localStorage.ssetItem('employees', JSON.stringify(updatedData));
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : '' }

      {user === "admin" ? 
        (<AdminDashboard changeUser = {setUser} userData = {userData} setUserData = {setUserData}/>)
      : (user == 'employee' ?
        <EmployeeDashboard changeUser = {setUser} loggedInUser={loggedInUserData} userData = {userData} updateTaskStatus={updateTaskStatus} />
      : null)
    }
    </>
  );
};

export default App;
