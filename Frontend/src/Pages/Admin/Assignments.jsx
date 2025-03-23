import React from "react";
import AdminSidebar from "../../SideBar/AdminSidebar";
import "./AdminPages.css"; 
import INSTADATAHELP from '../../assets/INSTADATAHELP1.png';


const Assignments = () => {
  const assignments = [
    { name: "Product Training", status: "Ongoing" },
    { name: "Sales Pitching", status: "Completed" },
  ];

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="content">
        <div className="trainer-nav">
        <h1>📋 Assignments</h1>
        <img src={INSTADATAHELP} alt="" className="trainer-logo-hai"/>
        </div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Assignment Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={index}>
                <td>{assignment.name}</td>
                <td>{assignment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assignments;
