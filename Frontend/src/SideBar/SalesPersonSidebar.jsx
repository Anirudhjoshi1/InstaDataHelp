import React from "react";
import { Link } from "react-router-dom";
import "./SalesPersonSidebar.css"; // Import styles
import ACEPITCH from '../assets/ACEPITCH.png';

const SalesPersonSidebar = () => {
  return (
    <div className="salesperson-sidebar">
      <div className="salesperson-sidebar-header">
      <img src={ACEPITCH} alt="" className="user-logo" />
      <h2>Sales Portal</h2>
      </div>
      
      <ul>
        <li><Link to="/salesperson/dashboard">🏠 Home</Link></li>
        <li><Link to="/salesperson/profile">👤 Profile</Link></li>
        <li><Link to="/salesperson/products">📦 Products</Link></li>
        <li><Link to="/salesperson/reports">📊 Reports</Link></li>
        <li><Link to="/salesperson/settings">⚙️ Settings</Link></li>
      </ul>
    </div>
  );
};

export default SalesPersonSidebar;
