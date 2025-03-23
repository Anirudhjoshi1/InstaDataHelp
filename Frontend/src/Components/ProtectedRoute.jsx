import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user")); // 🔹 Read correct user info

    console.log("🔍 Checking Access → Token:", token, "UserData:", user);

    if (!token || !user) {
        console.log("❌ No token or user found → Redirecting to /login");
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(user.role)) {
        console.log("❌ Redirecting: Role not allowed", user.role);
        return <Navigate to="/login" />;
    }

    console.log("✅ User Found:", user);
    return children;
};

export default ProtectedRoute;
