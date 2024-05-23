import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(false);

  const handleUserLogged = (value) => {
    setUserLogged(value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserLogged(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userLogged, handleUserLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
