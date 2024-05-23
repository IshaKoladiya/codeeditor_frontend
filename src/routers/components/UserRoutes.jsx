import React from "react";
import { Route, Routes } from "react-router-dom";
import { CodePen, Home } from "../../components/home/pages";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/codepen/:id" element={<CodePen/>} />
      <Route path="*" element={"Page Note Found"} />
    </Routes>
  );
};

export default UserRoutes;
