import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../../components/log-in/pages";
import { SignUp } from "../../components/sign-up/pages";
import { ForgotPassword } from "../../components/forgot-password/pages";
import { NewPassword } from "../../components/new-password/pages";

const LogInRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/new-password" element={<NewPassword/>} />
      <Route path="*" element={"Page Note Found"} />
    </Routes>
  );
};

export default LogInRouts;
