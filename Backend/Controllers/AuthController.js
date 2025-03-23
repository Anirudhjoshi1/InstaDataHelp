const UserModel = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
    try {
        let { name, email, password, role } = req.body;

        console.log("Signup Request Received:", req.body); // ✅ Debugging Step

        email = email.toLowerCase(); // Convert email to lowercase

        // ✅ Check if user already exists
        const userExists = await UserModel.findOne({ email });
        if (userExists) {
            return res.status(409).json({
                message: "User already exists, you can login",
                success: false,
            });
        }

        // ✅ Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ Create new user object with role
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword,
            role, // ✅ Ensure role is saved in MongoDB
        });

        // ✅ Save the user to the database
        await newUser.save();

        res.status(201).json({
            message: "Signup successful",
            success: true,
        });

    } catch (err) {
        console.error("Signup Error:", err); // ✅ Log actual error
        res.status(500).json({
            message: "Internal server error",
            success: false,
            error: err.message, // ✅ Send error message to frontend
        });
    }
};




const login = async (req, res) => {
    try {
        let { email, password } = req.body;
        email = email.toLowerCase(); // Normalize email

        // ✅ Find user by email
        const userExists = await UserModel.findOne({ email });
        if (!userExists) {
            console.log("❌ User not found in DB");
            return res.status(403).json({ message: "Auth Failed Email or Password is Wrong", success: false });
        }

        // ✅ Log stored and entered password
        console.log("🔍 Stored Password:", userExists.password);
        console.log("🔍 Entered Password:", password);

        // ✅ Compare passwords
        const isPassEqual = await bcrypt.compare(password, userExists.password);
        console.log("🔍 Password Match:", isPassEqual);

        if (!isPassEqual) {
            return res.status(403).json({ message: "Auth Failed Email or Password is Wrong", success: false });
        }

        // ✅ Generate JWT Token
        const jwtToken = jwt.sign(
            { email: userExists.email, _id: userExists._id, role: userExists.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: userExists.name,
            role: userExists.role
        });

    } catch (err) {
        console.error("❌ Login Error:", err);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};



module.exports = {
    signup,login
};
