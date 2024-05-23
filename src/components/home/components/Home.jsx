import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/components/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [allProject, setAllProject] = useState([]);
  const { handleUserLogged } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateNewProject = () => {
    console.log("new pro");
    const id = JSON.parse(localStorage.getItem("userId"));

    axios
      .get(`http://localhost:5000/user/create-new-projects/${id}`)
      .then((res) => {
        navigate(`/codepen/${res.data._id}`);
      });
  };

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("userId"));

    axios.get(`http://localhost:5000/user/all-Projects/${id}`).then((res) => {
      console.log(res.data);
      setAllProject(res.data);
    });
  }, []);

  return (
    <div>
      home
      <button onClick={handleCreateNewProject}>Create New Project</button>
      <button
        onClick={() => {
          navigate("/");
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          handleUserLogged(false);
        }}
      >
        LogOut
      </button>
      <div>
        {allProject.map((pro, index) => {
          return (
            <div key={index}>
              <button
                key={index}
                onClick={() => {
                  navigate(`/codepen/${pro._id}`);
                }}
              >
                {index + 1}. Project
              </button>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export default Home;
