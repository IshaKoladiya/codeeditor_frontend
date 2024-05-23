import React, { useState } from "react";
import classes from "../style/forgotPassword.module.css";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    const url = 'http://localhost:5000/user/forgot-password'

    const body = {
        email: email
    }

    const res = await axios.post(url, body)
    console.log(res.data)
    setEmail("");
  };
  return (
    <>
      <div className={classes.main}>
        <form onSubmit={handleSubmit} className={classes.forgot}>
          <h1>Forget Password</h1>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
