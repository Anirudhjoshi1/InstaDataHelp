import React, { useState } from "react";
import { Link } from "react-router-dom";
import TrainerSidebar from "../SideBar/TrainerSidebar";
import "./TrainerDashboard.css"; // Import external CSS
import { FaSearch } from "react-icons/fa"; // Import search icon
import INSTADATAHELP from '../assets/INSTADATAHELP.png';

const TrainerDashboard = () => {
  const trainer = { name: "Manoj Tibrewal" };

  const [trainees] = useState([
    { id: 1, name: "Anurishi Jain", dob: "10/05/1995", mobile: "+91 9876543210", email: "anurishi@example.com", franchiseID: "12345", salesmanID: "67890", trainerID: "5432" },
    { id: 2, name: "Varun Sharma", dob: "15/08/1993", mobile: "+91 9876543221", email: "varun@example.com", franchiseID: "54321", salesmanID: "98760", trainerID: "6543" },
    { id: 3, name: "Rohit Rajput", dob: "20/12/1990", mobile: "+91 9876543330", email: "rohit@example.com", franchiseID: "67890", salesmanID: "12345", trainerID: "9876" },
    { id: 4, name: "Kapil Dhami", dob: "05/06/1998", mobile: "+91 9876543440", email: "kapil@example.com", franchiseID: "45678", salesmanID: "54321", trainerID: "8765" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrainees = trainees.filter((trainee) =>
    trainee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <TrainerSidebar />
      <div className="dashboard-content">
        <div className="trainer-wrapper">
        <h1 className="dashboard-title">Trainer Homepage</h1>
        <img src={INSTADATAHELP} alt="" className="trainer-logo" />
        </div>
        <h2 className="trainer-name">{trainer.name}</h2>

        {/* Search Bar */}
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search Trainees..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <h3 className="trainees-heading">My Trainees</h3>
        <ul className="trainee-list">
          {filteredTrainees.map((trainee) => (
            <li key={trainee.id} className="trainee-item">
              <Link to={`/trainee/${trainee.id}`} state={{ trainee }} className="trainee-link">
                {trainee.name} (Click to Visit Profile)
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrainerDashboard;
