import React from "react";
import { useParams } from "react-router-dom";
import TrainerSidebar from "../../SideBar/TrainerSidebar";
import "./ProfilePage.css"; // Import CSS file for styling

const ProfilePage = () => {
  const { id } = useParams();
  const trainee = {
    name: "Anurishi Jain",
    dob: "DD/MM/YYYY",
    mobile: "+91 XXXXXXXXXX",
    email: "anurishi@example.com",
    franchiseID: "12345",
    salesmanID: "67890",
    trainerID: "54321",
  };
  
  const products = ["Product 1", "Product 2"];

  return (
    <div className="profile-container">
      <TrainerSidebar />
      <div className="profile-content">
        <h1>Trainee 1 Profile Page</h1>
        <h2>{trainee.name} (Salesman Name)</h2>

        <div className="profile-details">
          <div className="profile-info">
            <p><strong>DOB:</strong> {trainee.dob}</p>
            <p><strong>Mobile Number:</strong> {trainee.mobile}</p>
            <p><strong>Email Address:</strong> {trainee.email}</p>
            <p><strong>Company Franchise ID:</strong> {trainee.franchiseID}</p>
            <p><strong>Salesman ID:</strong> {trainee.salesmanID}</p>
            <p><strong>Trainer ID:</strong> {trainee.trainerID}</p>
          </div>

          <div className="assigned-products">
            <h3>Products Assigned</h3>
            <ul>
              {products.map((product, index) => (
                <li key={index}>
                  <a href={`/trainer/trainee/${id}/product/${index + 1}`}>{product}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
