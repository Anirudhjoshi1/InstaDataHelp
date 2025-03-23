import React, { useState } from "react";
import { Link } from "react-router-dom";
import SalesPersonSidebar from "../SideBar/SalesPersonSidebar";
import "./SalesPersonDashboard.css";
import { FaBox, FaUser, FaChartLine } from "react-icons/fa"; 
import INSTADATAHELP from '../assets/INSTADATAHELP1.png';

const SalesPersonDashboard = () => {
  const [products] = useState(["Product 1", "Product 2"]);

  return (
    <div className="dashboard-container">
      <SalesPersonSidebar />
      <div className="dashboard-content">
        
        {/* Header Section */}
        <div className="dashboard-header">
          <div className="user-wrapper">
          <h2 className="heading-sales">👋 Welcome, <span className="username">Anurishi Jain</span></h2>
          </div>
          <img src={INSTADATAHELP} alt="User Logo" className="user-logo" />
        </div>

        {/* Quick Stats Section */}
        <div className="stats-container">
          <div className="stat-card">
            <FaBox className="stat-icon" />
            <div className="stat-info">
              <h3>2</h3>
              <p>Assigned Products</p>
            </div>
          </div>
          <div className="stat-card">
            <FaChartLine className="stat-icon" />
            <div className="stat-info">
              <h3>85%</h3>
              <p>Sales Performance</p>
            </div>
          </div>
          <div className="stat-card">
            <FaUser className="stat-icon" />
            <div className="stat-info">
              <h3>Trainer ID: 5432</h3>
              <p>Trainer Assigned</p>
            </div>
          </div>
        </div>

        {/* Product List Section */}
        <div className="products-section">
          <h3>📦 Assigned Products</h3>
          <ul className="product-list">
            {products.map((product, index) => (
              <li key={index} className="product-item">
                <Link to={`/salesperson/product/${index + 1}`} className="product-link">
                  {product}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Profile & Reports Links */}
        <div className="dashboard-links">
          <Link to="/salesperson/profile" className="dashboard-btn">👤 View Profile</Link>
          <Link to="/salesperson/reports" className="dashboard-btn">📊 View Reports</Link>
        </div>

      </div>
    </div>
  );
};

export default SalesPersonDashboard;
