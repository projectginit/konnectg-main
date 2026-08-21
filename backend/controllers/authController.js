import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// ==========================================
// GENERATE JWT
// ==========================================

const generateToken = (userId, role) => {
  return jwt.sign(
    {
      userId,
      role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );
};

// ==========================================
// REGISTER
// ==========================================

export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;

    // Validate required fields

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required.",
      });
    }

    // Check existing email

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }

    // Hash password

    const hashedPassword = await bcrypt.hash(password, 12);

    // Prevent users from registering themselves as admin

    const allowedRole = role === "merchant" ? "merchant" : "user";

    // Create user

    const user = await User.create({
      name,

      email,

      phone,

      password: hashedPassword,

      role: allowedRole,
    });

    // Generate token

    const token = generateToken(user._id.toString(), user.role);

    res.status(201).json({
      message: "User registered successfully.",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Registration error:", error.message);

    res.status(500).json({
      message: "Server error during registration.",
    });
  }
};

// ==========================================
// LOGIN
// ==========================================

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    // Find user

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    // Check account status

    if (!user.isActive) {
      return res.status(403).json({
        message: "Your account has been deactivated.",
      });
    }

    // Compare password

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    // Generate JWT

    const token = generateToken(user._id.toString(), user.role);

    res.json({
      message: "Login successful.",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);

    res.status(500).json({
      message: "Server error during login.",
    });
  }
};
