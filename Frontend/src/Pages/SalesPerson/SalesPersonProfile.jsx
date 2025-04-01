import React from "react";
import SalesPersonSidebar from "../../SideBar/SalesPersonSidebar";
import "./SalesPersonProfile.css";
import { FaUser, FaEnvelope, FaIdBadge, FaPhone, FaBuilding, FaBox, FaChalkboardTeacher } from "react-icons/fa";
import Sample from '../../assets/Sample.jpg'
import INSTADATAHELP from '../../assets/INSTADATAHELP.png';

const SalesPersonProfile = () => {
  return (
    <div className="profile-container">
      <SalesPersonSidebar />
      <div className="profile-content">
        
        {/* Profile Header */}
        <div className="profile-header">
          <h1><FaUser className="icon" /> SalesPerson Profile</h1>
          <img src={INSTADATAHELP} alt="" className="imgprofile" />
        </div>

        {/* Profile Card */}
        <div className="profile-card">
          <img 
            src={Sample}
            alt="Profile" 
            className="profile-avatar"
          />
          <h2 className="profile-name">Anurishi Jain</h2>
          <p className="profile-email"><FaEnvelope className="icon" /> anurishi@example.com</p>
          <p className="profile-id"><FaIdBadge className="icon" /> SALESPERSON ID: SLM001</p>
        </div>

        {/* Profile Details Section */}
        <div className="profile-details">
          <div className="column">
            <p><FaIdBadge className="icon" /> <strong>DOB:</strong> 10-05-1995</p>
            <p><FaPhone className="icon" /> <strong>Mobile:</strong> +91 9876543210</p>
            <p><FaBuilding className="icon" /> <strong>Company Franchise ID:</strong> 12345</p>
          </div>
          <div className="column">
            <p><FaChalkboardTeacher className="icon" /> <strong>Trainer ID:</strong> TRN789</p>
            <p><FaIdBadge className="icon" /> <strong>Role:</strong> SalesPerson</p>
          </div>
        </div>

        {/* Products Section */}
        <h3 className="products-heading"><FaBox className="icon" /> Products Assigned</h3>
        <ul className="products-list">
          <li>✅ Product 1</li>
          <li>✅ Product 2</li>
        </ul>

      </div>
    </div>
  );
};

export default SalesPersonProfile;
