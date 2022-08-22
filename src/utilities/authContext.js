import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  const Logout = () => {
    setCurrentUser(null);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("banana"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const value = { currentUser, setCurrentUser, Logout };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
