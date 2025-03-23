import React from "react";
import { useParams } from "react-router-dom";
import TrainerSidebar from "../../SideBar/TrainerSidebar";
import "./TrainerScorePage.css"; // Import CSS

const TraineeScorePage = () => {
  const { traineeId } = useParams();
  const trainees = {
    1: { name: "Anurishi Jain", salesmanId: "SLM001" },
    2: { name: "Rahul Sharma", salesmanId: "SLM002" },
    3: { name: "Neha Gupta", salesmanId: "SLM003" },
    4: { name: "Kapil Dhami", salesmanId: "SLM004" },
    5: { name: "Soham Verma", salesmanId: "SLM005" },
    6: { name: "Megha Taneja", salesmanId: "SLM006" },
  };

  const trainee = trainees[traineeId];

  const traineeScores = {
    1: [{ category: "Category 1", knowledge: 6, sales: 4 }],
    2: [{ category: "Category 1", knowledge: 8, sales: 7 }],
    3: [{ category: "Category 1", knowledge: 5, sales: 6 }],
    4: [{ category: "Category 1", knowledge: 9, sales: 8 }],
    5: [{ category: "Category 1", knowledge: 7, sales: 7 }],
    6: [{ category: "Category 1", knowledge: 6, sales: 5 }],
  };

  if (!trainee) return <h1>No Trainee Found</h1>;

  return (
    <div className="score-container">
      <TrainerSidebar />
      <div className="score-content">
        <h1>{trainee.name}'s Performance</h1>
        <h3>📌 Salesman ID: {trainee.salesmanId}</h3>

        {/* 📊 Last Attempt Scores */}
        <div className="score-section">
          <h3 className="score-title">📌 Last Attempt Scores</h3>
          <table className="score-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Product Knowledge</th>
                <th>Sales Acumen</th>
              </tr>
            </thead>
            <tbody>
              {traineeScores[traineeId]?.map((score, index) => (
                <tr key={index}>
                  <td>{score.category}</td>
                  <td>{score.knowledge}</td>
                  <td>{score.sales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TraineeScorePage;
