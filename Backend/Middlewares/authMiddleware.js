const jwt = require("jsonwebtoken");

const authMiddleware = (requiredRole) => {
    return (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                return res.status(401).json({ message: "Unauthorized - No Token Provided", success: false });
            }

            const token = authHeader.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // 🛠️ Debugging Log
            console.log("Decoded Token:", decoded);

            // ✅ Ensure role exists before checking
            if (!decoded.role || decoded.role !== requiredRole) {
                return res.status(403).json({ message: "Access denied - Insufficient Permissions", success: false });
            }

            req.user = decoded; // Attach user data to request
            next();

        } catch (error) {
            console.error("JWT Verification Error:", error);
            return res.status(401).json({ message: "Invalid or Expired Token", success: false });
        }
    };
};

module.exports = authMiddleware;