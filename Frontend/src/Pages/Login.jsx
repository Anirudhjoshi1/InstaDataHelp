import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Style/Login.css";
import { handleError, handleSuccess } from "../Utils";
import ACEPITCH from '../assets/ACEPITCH.png';
import INSTADATAHELP from '../assets/INSTADATAHELP1.png';

const Login = () => {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("Please fill all the fields");
    }

    try {
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      const { success, message, jwtToken, role, name } = result;

      if (success) {
        handleSuccess(message);
        localStorage.clear();
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("user", JSON.stringify({ name, role }));

        setTimeout(() => {
          if (role === "admin") {
            navigate("/admin/dashboard");
          } else if (role === "trainer") {
            navigate("/trainer/dashboard");
          } else {
            navigate("/salesperson/dashboard");
          }
        }, 1000);
      } else {
        handleError(result.message);
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <div className="login-container">
      {/* Logos added here */}
      <img src={INSTADATAHELP} alt="Insta Data Help Logo" className="logo right-logo" />
      <img src={ACEPITCH} alt="Ace Pitch Logo" className="logo left-logo" />
      

      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              onChange={handleChange} 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              value={loginInfo.email} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              onChange={handleChange} 
              type="password" 
              name="password" 
              placeholder="Enter your password" 
              value={loginInfo.password} 
            />
          </div>

          <button type="submit" className="login-btn">Login</button>

          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
