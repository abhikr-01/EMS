import React, { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getLocalStorage } from "../utils/localStorage";
import { setLocalStorage } from "../utils/localStorage";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState();

  useEffect(() => {
    setLocalStorage();
    const {employees, admin} = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
};

export default AuthProvider;