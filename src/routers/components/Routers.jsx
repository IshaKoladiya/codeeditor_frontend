import React, { useContext } from "react";
import LogInRouts from "./LogInRouts";
import UserRoutes from "./UserRoutes";
import { AuthContext } from "../../context/components/AuthContext";

const Routers = () => {
  const { userLogged} = useContext(AuthContext);

  return userLogged ? <UserRoutes /> : <LogInRouts />;
};

export default Routers;
