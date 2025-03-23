import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TrainerSidebar from "../../SideBar/TrainerSidebar";
import "./ProductPage.css"; // Import CSS
import { FaSearch, FaUserGraduate } from "react-icons/fa"; 
import INSTADATAHELP from '../../assets/INSTADATAHELP.png';

const ProductPage = () => {
  const navigate = useNavigate();
  const productName = "Product 1"; // Static for now, can be dynamic

  // Sample Trainees
  const trainees = [
    { id: 1, name: "Anurishi Jain", salesmanId: "SLM001" },
    { id: 2, name: "Rahul Sharma", salesmanId: "SLM002" },
    { id: 3, name: "Neha Gupta", salesmanId: "SLM003" },
    { id: 4, name: "Kapil Dhami", salesmanId: "SLM004" },
    { id: 5, name: "Soham Verma", salesmanId: "SLM005" },
    { id: 6, name: "Megha Taneja", salesmanId: "SLM006" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Filter trainees based on search input
  const filteredTrainees = trainees.filter((trainee) =>
    trainee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-container">
      <TrainerSidebar />
      <div className="product-content">

        <div className="product-heading-logo">
        <h1 className="product-title">{productName} - Trainee Performance</h1>
        <img src={INSTADATAHELP} alt="" className="product-logo" />
        </div>

        {/* 🔍 Search Bar */}
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search Trainees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* 📋 Trainee List */}
        <div className="trainee-section">
          <h3 className="trainee-heading">📌 Select a Trainee</h3>
          <div className="trainee-grid">
            {filteredTrainees.length > 0 ? (
              filteredTrainees.map((trainee) => (
                <div
                  key={trainee.id}
                  className="trainee-card"
                  onClick={() => navigate(`/trainer/product/${trainee.id}`)}
                >
                  <FaUserGraduate className="trainee-icon" />
                  <h4>{trainee.name}</h4>
                  <p>Salesman ID: {trainee.salesmanId}</p>
                </div>
              ))
            ) : (
              <p className="no-results">No trainees found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
