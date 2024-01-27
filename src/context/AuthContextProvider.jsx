import React, { useState } from "react";
import AuthContext from "./AuthContext";

function AuthContextProvider({ children }) {
    
  const [loggedInUser, setLoggedInUser] = useState();

  let logout = () => {
    setLoggedInUser();
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
