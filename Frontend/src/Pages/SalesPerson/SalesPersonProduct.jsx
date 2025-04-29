import React, { useState, useEffect } from "react";
import SalesPersonSidebar from "../../SideBar/SalesPersonSidebar";
import "./SalesPersonProduct.css";
import { FaBox, FaUser, FaChartBar } from "react-icons/fa"; // Icons for visual enhancement
import { useNavigate } from "react-router";
import INSTADATAHELP from '../../assets/INSTADATAHELP.png';

const SalesPersonProduct = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("https://101.53.149.101:3003/get-nexon-data", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("API Response:", data); // Debugging API Response

        // Filter out relevant product data for the salesperson
        const salespersonData = data.filter((item) => item.username === "NexonSalesman");

        setProductData(salespersonData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
      console.log("API Response:", data);
    };

    fetchProductData();
  }, []);

  return (
    <div className="product-container">
      <SalesPersonSidebar />
      <div className="product-content">
        <div className="product-header">
          <div className="profile-header">
          <h1><FaBox className="icon" /> Product: Nexon</h1>
          <img src={INSTADATAHELP} alt="" className="imgprofile" />
          </div>
          <h2><FaUser className="icon" /> NexonSalesman</h2>
          <h3>📌 SalesPerson ID: <span className="highlight">SLM001</span></h3>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : productData && productData.length > 0 ? (
          <>
            {/* Performance Scores Section */}
            <div className="scores-section">
              <h3><FaChartBar className="icon" /> Last Attempt Scores</h3>
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Product Knowledge</th>
                    <th>Sales Acumen</th>
                  </tr>
                </thead>
                <tbody>
                  {productData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.category}</td>
                      <td>{item.productknowledgescore}</td>
                      <td>{item.salesacumenscore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p>No data available for this salesperson.</p>
        )}

        {/* CTA Button */}
        <div className="test-btn-container">

        <button class="button-82-pushable" role="button" onClick={() => navigate("/salesperson/test-skill")} >
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
            <span class="button-82-front text">🚀 Start New Test</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesPersonProduct;
