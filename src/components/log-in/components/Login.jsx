import React, { useContext, useState } from "react";
import classes from "../style/login-style.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/components/AuthContext";

const Login = () => {
  const [emailPass, setEmailPass] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { handleUserLogged } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/user/login";

      const body = {
        email: emailPass.email,
        password: emailPass.password,
      };

      const res = await axios.post(url, body);
      handleUserLogged(true);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("userId", JSON.stringify(res.data.userId));
      navigate("/");
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleChengeVlue = (event) => {
    setEmailPass({
      ...emailPass,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={classes.main}>
      <form action="" onSubmit={handleSubmit} className={classes.login}>
        <h1>Log In</h1>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={handleChengeVlue}
            value={emailPass.email}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            onChange={handleChengeVlue}
            value={emailPass.password}
          />
        </div>
        <button type="submit">Log In</button>
        <h3 className={classes.link}>Create new account?<Link to="/signup" style={{color:"white"}}>  sign Up</Link> </h3>
        <h3 className={classes.link}>Forget Password?<Link to="/forgot-password" style={{color:"white"}}>  ForgotPassword</Link> </h3>
      </form>
    </div>
  );
};

export default Login;
