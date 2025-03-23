import React, { useState } from "react";
import "./AdminDashboard.css"; // Import CSS
import AdminSidebar from "../SideBar/AdminSidebar";
import INSTADATAHELP from '../assets/INSTADATAHELP.png';

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample Trainers & Assigned Trainees Data
  const trainers = [
    { id: 1, name: "Manoj Tibrewal", trainees: ["Anurishi Jain", "Rahul Sharma"] },
    { id: 2, name: "Sanya Kapoor", trainees: ["Neha Gupta", "Amit Verma"] },
    { id: 3, name: "Ravi Kumar", trainees: ["Soham Mehta", "Priya Singh"] },
  ];

  const filteredTrainers = trainers.filter(trainer =>
    trainer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container"> {/* 🛠️ Wrapper for Sidebar & Content */}
      <AdminSidebar />

      {/* 🏠 Main Dashboard Content */}
      <div className="dashboard-content">

        <div className="dashboard-logo-wrap">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <img src={INSTADATAHELP} alt="" className="logo-insta" />
        </div>

        {/* 📊 Summary Cards */}
        <div className="summary-cards">
          <div className="summary-card">Total Trainers: {trainers.length}</div>
          <div className="summary-card">Total Trainees: {trainers.reduce((sum, t) => sum + t.trainees.length, 0)}</div>
          <div className="summary-card">Active Products: 10</div>
          <div className="summary-card">Pending Evaluations: 4</div>
        </div>

        {/* 🔎 Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search trainers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* 📋 Trainer-Trainee Table */}
        <div className="table-container">
          <h2 className="table-title">Trainer Assignments</h2>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Trainer Name</th>
                <th>Assigned Trainees</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrainers.map((trainer) => (
                <tr key={trainer.id}>
                  <td>{trainer.name}</td>
                  <td>{trainer.trainees.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 🔔 Activity Logs */}
        <div className="activity-log">
          <h2 className="activity-title">Recent Activity</h2>
          <ul className="activity-list">
            <li className="activity-item">✔️ Anurishi Jain was assigned to Manoj Tibrewal</li>
            <li className="activity-item">✔️ Neha Gupta was reassigned to Sanya Kapoor</li>
            <li className="activity-item">❌ Rahul Sharma was removed from training</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
