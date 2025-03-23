import React, { useState } from "react";
import AdminSidebar from "../../SideBar/AdminSidebar";
import "./AdminPages.css"; // Import styles
import INSTADATAHELP from '../../assets/INSTADATAHELP1.png';

const Trainees = () => {
  const [search, setSearch] = useState("");
  const [trainees, setTrainees] = useState([
    { id: 1, name: "Anurishi Jain", trainer: "Manoj Tibrewal" },
    { id: 2, name: "Rahul Sharma", trainer: "Manoj Tibrewal" },
    { id: 3, name: "Neha Gupta", trainer: "Sanya Kapoor" },
  ]);

  const [trainers] = useState(["Manoj Tibrewal", "Sanya Kapoor", "Ravi Kumar"]); // Sample trainers
  const [selectedTrainer, setSelectedTrainer] = useState("");
  const [selectedTraineeId, setSelectedTraineeId] = useState(null);

  const filteredTrainees = trainees.filter((trainee) =>
    trainee.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Assign or Update Trainer
  const handleAssignTrainer = (traineeId, newTrainer) => {
    setTrainees((prevTrainees) =>
      prevTrainees.map((trainee) =>
        trainee.id === traineeId ? { ...trainee, trainer: newTrainer } : trainee
      )
    );
    setSelectedTrainer(""); // Reset dropdown
    setSelectedTraineeId(null);
  };

  // ✅ Delete Trainer Assignment
  const handleDeleteTrainer = (traineeId) => {
    setTrainees((prevTrainees) =>
      prevTrainees.map((trainee) =>
        trainee.id === traineeId ? { ...trainee, trainer: "Not Assigned" } : trainee
      )
    );
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="content">
        <div className="trainer-nav">
        <h1>🧑‍💼 Trainees</h1>
        <img src={INSTADATAHELP} alt="" className="trainer-logo-hai" />
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search trainees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar-trainees"
        />

        {/* Trainees Table */}
        <table className="styled-table">
          <thead>
            <tr>
              <th>Trainee Name</th>
              <th>Assigned Trainer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrainees.map((trainee) => (
              <tr key={trainee.id}>
                <td>{trainee.name}</td>
                <td>
                  {selectedTraineeId === trainee.id ? (
                    <select
                      value={selectedTrainer}
                      onChange={(e) => setSelectedTrainer(e.target.value)}
                      className="trainer-select"
                    >
                      <option value="">Select Trainer</option>
                      {trainers.map((trainer, index) => (
                        <option key={index} value={trainer}>
                          {trainer}
                        </option>
                      ))}
                    </select>
                  ) : (
                    trainee.trainer
                  )}
                </td>
                <td>
                  {selectedTraineeId === trainee.id ? (
                    <button
                      className="save-btn"
                      onClick={() => handleAssignTrainer(trainee.id, selectedTrainer)}
                    >
                      💾 Save
                    </button>
                  ) : (
                    <>
                      <button className="edit-btn" onClick={() => setSelectedTraineeId(trainee.id)}>
                        ✏️ Edit
                      </button>
                      <button className="delete-btn" onClick={() => handleDeleteTrainer(trainee.id)}>
                        ❌ Remove Trainer
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trainees;
