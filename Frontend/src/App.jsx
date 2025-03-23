import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AdminDashboard from "./Dashboard/AdminDashboard";
import TrainerDashboard from "./Dashboard/TrainerDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import "./App.css";
import ProfilePage from "./Pages/Trainer/ProfilePage";
import ProductPage from "./Pages/Trainer/ProductPage";
import Trainers from './Pages/Admin/Trainers'
import Reports from './Pages/Admin/Reports'
import Settings from './Pages/Admin/Settings'
import Assignments from './Pages/Admin/Assignments'
import Trainees from './Pages/Admin/Trainees'
import SalesPersonDashboard from "./Dashboard/SalesPersonDashboard";
import SalesPersonProfile from './Pages/SalesPerson/SalesPersonProfile'
import SalesPersonProduct from "./Pages/SalesPerson/SalesPersonProduct";
import SalesPersonReports from "./Pages/SalesPerson/SalesPersonReports";
import SalesPersonSettings from "./Pages/SalesPerson/SalesPersonSettings";
import TraineeProfile from "./Pages/Trainer/TraineeProfile";
import TestSkill from "./Pages/SalesPerson/TestSkill";
import Setting from "./Pages/Trainer/Setting";
import TraineeScorePage from "./Pages/Trainer/TraineeScorePage";


const App = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes (Only Accessible if Logged In & Has Correct Role) */}
        <Route
          path="/salesperson/dashboard"
          element={
            <ProtectedRoute allowedRoles={["user", "admin", "trainer"]}>
              <SalesPersonDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/salesperson/profile" element={<SalesPersonProfile />} />
        <Route path="/salesperson/products" element={<SalesPersonProduct />} />
        <Route path="/salesperson/reports" element={<SalesPersonReports />} />
        <Route path="/salesperson/settings" element={<SalesPersonSettings />} />
        <Route path="/salesperson/test-skill" element={<TestSkill/>}/>



        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/admin/dashboard/trainers" element={<Trainers />} />
        <Route path="/admin/dashboard/trainees" element={<Trainees />} />
        <Route path="/admin/dashboard/assignments" element={<Assignments />} />
        <Route path="/admin/dashboard/reports" element={<Reports />} />
        <Route path="/admin/dashboard/settings" element={<Settings />} />




        <Route
          path="/trainer/dashboard"
          element={
            <ProtectedRoute allowedRoles={["trainer"]}>
              <TrainerDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/trainer/profile" element={<ProfilePage/>}/>
        <Route path="/trainer/product" element={<ProductPage/>}/>
        <Route path="/trainer/settings" element={<Setting/>}/>
        <Route path="/trainee/:id" element={<TraineeProfile />} />
        <Route path="/trainer/product/:traineeId" element={<TraineeScorePage />} />

        
      </Routes>
    </>
  );
};

export default App;
