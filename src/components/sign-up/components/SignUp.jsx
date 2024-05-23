import React, { useContext, useState } from "react";
import classes from "../style/signup-style.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/components/AuthContext";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const {handleUserLogged} = useContext(AuthContext)

  const handleChengeVlue = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(userData);
      if (userData.password !== userData.confirmPassword) {
        return alert("Passwords do not match");
      }
      const url = "http://localhost:5000/user/sign-up";

      const body = {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        confirmPassword: userData.confirmPassword,
      };
      const res = await axios.post(url, body);
      navigate('/')
      handleUserLogged(true)
      localStorage.setItem("token",JSON.stringify(res.data.token))
      localStorage.setItem("userId",JSON.stringify(res.data.userId))
      console.log(res.data.userId)
    } catch (error) {
      alert(error.response.data);
      console.log(error);
      
    }
  };

  return (
    <div>
      <div className={classes.main}>
        <form action="" onSubmit={handleSubmit} className={classes.signup}>
          <h1>Sign Up</h1>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              onChange={handleChengeVlue}
              value={userData.name}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={handleChengeVlue}
              value={userData.email}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              onChange={handleChengeVlue}
              value={userData.password}
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Enter Your ConfirmPassword"
              onChange={handleChengeVlue}
              value={userData.confirmPassword}
            />
          </div>
          <button type="submit">Sign Up</button>
          <h3 className={classes.link}>Allrady have an account ?<Link style={{color:"white",paddingLeft:"10px"}} to="/">Log In</Link> </h3>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
