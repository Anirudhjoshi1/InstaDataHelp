import React, { useState } from "react";
import AdminSidebar from "../../SideBar/AdminSidebar";
import "./Admin.css"; // Import styles
import INSTADATAHELP from '../../assets/INSTADATAHELP1.png';

const Trainers = () => {
  const [search, setSearch] = useState("");
  const [trainers, setTrainers] = useState([
    { id: 1, name: "Manoj Tibrewal", trainees: ["Anurishi Jain", "Rahul Sharma"] },
    { id: 2, name: "Sanya Kapoor", trainees: ["Neha Gupta", "Amit Verma"] },
  ]);
  const [newTrainee, setNewTrainee] = useState("");
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const filteredTrainers = trainers.filter((trainer) =>
    trainer.name.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Assign a new trainee
  const handleAssignTrainee = (trainerId) => {
    if (!newTrainee) return;
    setTrainers((prevTrainers) =>
      prevTrainers.map((trainer) =>
        trainer.id === trainerId
          ? { ...trainer, trainees: [...trainer.trainees, newTrainee] }
          : trainer
      )
    );
    setNewTrainee(""); // Reset input
  };

  // ✅ Edit an existing trainee
  const handleEditTrainee = (trainerId, traineeIndex, updatedTrainee) => {
    setTrainers((prevTrainers) =>
      prevTrainers.map((trainer) =>
        trainer.id === trainerId
          ? {
              ...trainer,
              trainees: trainer.trainees.map((t, i) => (i === traineeIndex ? updatedTrainee : t)),
            }
          : trainer
      )
    );
  };

  // ✅ Delete a trainee
  const handleDeleteTrainee = (trainerId, traineeIndex) => {
    setTrainers((prevTrainers) =>
      prevTrainers.map((trainer) =>
        trainer.id === trainerId
          ? { ...trainer, trainees: trainer.trainees.filter((_, i) => i !== traineeIndex) }
          : trainer
      )
    );
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="content">
        <div className="trainer-nav">
        <h1>👨‍🏫 Trainers</h1>
        <img src={INSTADATAHELP} alt="" className="trainer-logo-hai" />
        </div>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search trainers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar-trainer"
        />

        <table className="styled-tablee">
          <thead>
            <tr>
              <th>Trainer Name</th>
              <th>Assigned Trainees</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrainers.map((trainer) => (
              <tr key={trainer.id}>
                <td>{trainer.name}</td>
                <td>
                  {trainer.trainees.map((trainee, index) => (
                    <span key={index} className="trainee-badge">
                      {trainee}{" "}
                      <button
                        onClick={() =>
                          handleEditTrainee(trainer.id, index, prompt("Edit Trainee:", trainee))
                        }
                        className="edit-btn"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDeleteTrainee(trainer.id, index)}
                        className="delete-btn"
                      >
                        ❌
                      </button>
                    </span>
                  ))}
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Add Trainee"
                    value={newTrainee}
                    onChange={(e) => setNewTrainee(e.target.value)}
                    className="trainee-input"
                  />
                  <button onClick={() => handleAssignTrainee(trainer.id)} className="assign-btn">
                    ➕ Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trainers;
