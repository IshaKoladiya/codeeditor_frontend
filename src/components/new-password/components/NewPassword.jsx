import React, { useState } from "react";
import classes from "../style/new-password.module.css";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [searchParams] = useSearchParams();
  const navigate = useNavigate()

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Passwords do not match!");
    }
    try {
      const url = "http://localhost:5000/user/create-new-password";

      const token = searchParams.get("token");

      const body = {
        password: password,
        token,
      };

      const res = await axios.post(url, body);
      alert(res.data)
      navigate('/')
      console.log(res.data);
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className={classes.main}>
      <form onSubmit={handleSubmit} className={classes.newpass}>
        <h1>New Password</h1>
        <div>
          <input
            type="password"
            value={password}
            placeholder="Enter your New Password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your confirmation password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPassword;
