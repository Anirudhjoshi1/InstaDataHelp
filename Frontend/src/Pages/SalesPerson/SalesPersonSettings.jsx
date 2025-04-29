import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SalesPersonSidebar from "../../SideBar/SalesPersonSidebar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SalesPersonSettings.css"; // Import styles
import INSTADATAHELP from '../../assets/INSTADATAHELP1.png';

const SalesPersonSettings = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("salesperson@example.com");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    setTimeout(() => {
      navigate("/login"); // Redirect to login page
    }, 1000);
  };

  return (
    <div className="settings-container">
      <SalesPersonSidebar />
      <div className="settings-content">

        <div style={{display:"flex", justifyContent:"space-between" , alignItems:"center"}}>
        <h1>⚙️ Settings</h1>
        <img src={INSTADATAHELP} alt="" style={{width:"100px"}} />
        </div>

        {/* Update Email */}
        <div className="settings-section">
          <h3>Update Email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter new email"
          />
        </div>

        {/* Update Password */}
        <div className="settings-section">
          <h3>Change Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
          />
        </div>

        {/* Notifications Toggle */}
        <div className="settings-section">
          <h3>Notifications</h3>
          <label className="switch">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Logout Button */}
     
        <button  className="logout-btn" onClick={handleLogout}>🚪 Logout</button>
      </div>
    </div>
  );
};

export default SalesPersonSettings;
