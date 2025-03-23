import React, { useState } from "react";
import { Link,useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Style/Signup.css";
import { handleError, handleSuccess } from "../Utils";
import ACEPITCH from '../assets/ACEPITCH.png';
import INSTADATAHELP from '../assets/INSTADATAHELP.png';

const Signup = () => {

  const navigate = useNavigate()

  const [signUpInfo , setSignUpInfo] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleChange = (e) =>{
    const {name , value} = e.target
    const copySingupInfo = {...signUpInfo}
    copySingupInfo[name] = value;
    setSignUpInfo(copySingupInfo)
  }



  const handleSignup = async (e) =>{
    e.preventDefault()
    const {name , email , password} = signUpInfo;
    if(!name || !email || !password){
      return handleError("Please fill all the fields")
    }

    try {
      const url = "http://localhost:8080/auth/signup";
      const response =  await fetch(url,{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpInfo)
      })
      const result = await response.json();

      const {success , message ,error} = result

      if(success){
        handleSuccess(message)
        setTimeout(() => {
          navigate('/login')
        }, 1000);

      }else if(error){
        handleError(error || message || "Signup failed. Please try again.");
      }
      else if(!success){
        handleError(message)
      }

      console.log(result)
    } catch(err){
      handleError(err)
    }

  }




  return (
    <div className="signup-container">
      <img src={INSTADATAHELP} alt="" className="logo left-logo" />
      <img src={ACEPITCH} alt="" className="logo right-logo" />
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} type="text" name="name" placeholder="Enter your name" autoFocus value={signUpInfo.name} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onChange={handleChange}  type="email" name="email" placeholder="Enter your email" value={signUpInfo.email}/>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={handleChange}  type="password" name="password" placeholder="Enter your password" value={signUpInfo.password}/>
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>

          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;