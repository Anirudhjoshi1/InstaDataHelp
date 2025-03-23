const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middlewares/authMiddleware");

router.get("/admin-dashboard", authMiddleware("admin"), (req, res) => {
    res.json({ message: "Welcome Admin!", success: true });
});

router.get("/trainer-dashboard", authMiddleware("trainer"), (req, res) => {
    res.json({ message: "Welcome Trainer!", success: true });
});

router.get("/user-dashboard", authMiddleware("user"), (req, res) => {
    res.json({ message: "Welcome User!", success: true });
});

module.exports = router;