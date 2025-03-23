import React from "react";
import { Link } from "react-router-dom";
import "./AdminSidebar.css"; // CSS for styling
import ACEPITCH from '../assets/ACEPITCH.png';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-wrapper">
      <img src={ACEPITCH} alt="" className="admin-logo" />
      <h2>Admin Panel</h2>
      </div>
      <ul>
        <li><Link to="/admin/dashboard">🏠 Dashboard</Link></li>
        <li><Link to="/admin/dashboard/trainers">👨‍🏫 Trainers</Link></li>
        <li><Link to="/admin/dashboard/trainees">🧑‍💼 Trainees</Link></li>
        <li><Link to="/admin/dashboard/assignments">📋 Assignments</Link></li>
        <li><Link to="/admin/dashboard/reports">📊 Reports</Link></li>
        <li><Link to="/admin/dashboard/settings">⚙️ Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
