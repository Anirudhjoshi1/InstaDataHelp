import React from "react";
import SalesPersonSidebar from "../../SideBar/SalesPersonSidebar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import "./SalesPersonReports.css"; // Import styles
import INSTADATAHELP from '../../assets/INSTADATAHELP1.png';

// Sample Data for Reports
const data = [
  { name: "Product 1", score: 85 },
  { name: "Product 2", score: 78 },
  { name: "Product 3", score: 92 },
];

const SalesPersonReports = () => {
  return (
    <div className="report-container">
      <SalesPersonSidebar />
      <div className="report-content">
        <div className="profile-header">
        <h1>📊 SalesPerson Reports</h1>
        <img src={INSTADATAHELP} alt="" className="imgprofile" />
        </div>
        {/* Performance Chart */}
        <div className="chart-container">
          <h3>📈 Sales Performance</h3>
          <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#3F7D58" />
          </BarChart>
        </div>

        {/* Summary Table */}
        <h3>📋 Report Summary</h3>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesPersonReports;