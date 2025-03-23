import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../SideBar/AdminSidebar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SettingsPage.css"; // Import the new custom CSS file
import INSTADATAHELP from '../../assets/INSTADATAHELP1.png';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("Admin");
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="settings-container">
      <AdminSidebar />

      <div className="settings-content">
        
        <div className="trainer-setting">
        <h1>⚙️ Settings</h1>
        <img src={INSTADATAHELP} alt="" className="trainer-logoo"/>
        </div>

   
        <div className="settings-grid">
          {/* User Role */}
          <div className="settings-card">
            <h3>Change User Role</h3>
            <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
              <option value="Admin">Admin</option>
              <option value="Trainer">Trainer</option>
              <option value="User">User</option>
            </select>
          </div>
      

          {/* Update Email */}
          <div className="settings-card">
            <h3>Update Email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter new email"
            />
          </div>

          {/* Update Password */}
          <div className="settings-card">
            <h3>Change Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </div>

          {/* Notifications Toggle */}
          <div className="settings-card">
            <h3>Notifications</h3>
            <label className="switch">
              <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* Logout Button */}
        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
