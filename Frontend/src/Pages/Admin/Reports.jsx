import React from "react";
import AdminSidebar from "../../SideBar/AdminSidebar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./Reports.css"; // Import CSS
import INSTADATAHELP from '../../assets/INSTADATAHELP1.png';

const data = [
  { name: "Trainer 1", trainees: 5 },
  { name: "Trainer 2", trainees: 8 },
];

const Reports = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="content">
        <div className="trainer-nav">
        <h1>📊 Reports</h1>
        <img src={INSTADATAHELP} alt="" className="trainer-logo-hai"/>
        </div>


        <div className="both-container">
        {/* Chart Container */}
        <div className="chart-container">
          <h3>📈 Trainer Performance</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="trainees" fill="#3F7D58" />
            </BarChart>
          </ResponsiveContainer>
        </div>


        <div className="chart-container">
          <h3>📈 Trainee Performance</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="trainees" fill="#161a68" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
