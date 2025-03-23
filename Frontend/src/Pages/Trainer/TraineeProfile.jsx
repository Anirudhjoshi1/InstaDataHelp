import React from "react";
import { useLocation } from "react-router-dom";
import TrainerSidebar from "../../SideBar/TrainerSidebar";
import "./TraineeProfile.css"; // Import styles

const TraineeProfile = () => {
  const location = useLocation();
  const trainee = location.state?.trainee || {};

  return (
    <div className="profile-container">
      <TrainerSidebar />
      <div className="profile-content">
        <h1 className="trainee-heading">🧑‍💼 Trainee Profile</h1>
        <div className="profile-card">
          <h2 className="trainee-name">{trainee.name}</h2>
          <p><strong>DOB:</strong> {trainee.dob}</p>
          <p><strong>Mobile Number:</strong> {trainee.mobile}</p>
          <p><strong>Email Address:</strong> {trainee.email}</p>
          <p><strong>Company Franchise ID:</strong> {trainee.franchiseID}</p>
          <p><strong>Salesman ID:</strong> {trainee.salesmanID}</p>
          <p><strong>Trainer ID:</strong> {trainee.trainerID}</p>
        </div>
      </div>
    </div>
  );
};

export default TraineeProfile;
