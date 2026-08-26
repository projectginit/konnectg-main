import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* ==========================================================
                        JWT HELPER
========================================================== */

const generateToken = (user) => {
  return jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );
};

/* ==========================================================
                        REGISTER
========================================================== */

export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;

    /* ------------------------------------------------------
                        VALIDATION
    ------------------------------------------------------ */

    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        message: "Please provide name, email, phone and password.",
      });
    }

    /* ------------------------------------------------------
                    VALIDATE ROLE
    ------------------------------------------------------ */

    /*
      Admin accounts must NEVER be created through public
      registration.

      Only user and merchant accounts can register.
    */

    const accountRole = role || "user";

    if (!["user", "merchant"].includes(accountRole)) {
      return res.status(400).json({
        message: "Invalid account type.",
      });
    }

    /* ------------------------------------------------------
                    NORMALIZE INPUT
    ------------------------------------------------------ */

    const normalizedEmail = email.trim().toLowerCase();

    const normalizedPhone = phone.trim().replace(/[\s-]/g, "");

    const normalizedName = name.trim();

    /* ------------------------------------------------------
                    CHECK EXISTING USER
    ------------------------------------------------------ */

    const existingUser = await User.findOne({
      $or: [{ email: normalizedEmail }, { phone: normalizedPhone }],
    });

    if (existingUser) {
      if (existingUser.email === normalizedEmail) {
        return res.status(409).json({
          message: "An account with this email already exists.",
        });
      }

      return res.status(409).json({
        message: "An account with this phone number already exists.",
      });
    }

    /* ------------------------------------------------------
                    HASH PASSWORD
    ------------------------------------------------------ */

    const hashedPassword = await bcrypt.hash(password, 12);

    /* ------------------------------------------------------
                    CREATE USER
    ------------------------------------------------------ */

    const user = await User.create({
      name: normalizedName,
      email: normalizedEmail,
      phone: normalizedPhone,
      password: hashedPassword,
      role: accountRole,
    });

    /* ------------------------------------------------------
                    GENERATE JWT
    ------------------------------------------------------ */

    const token = generateToken(user);

    /* ------------------------------------------------------
                    RESPONSE
    ------------------------------------------------------ */

    return res.status(201).json({
      message: "Account created successfully.",

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

    return res.status(500).json({
      message: "Server error while creating account.",
    });
  }
};

/* ==========================================================
                      LOGIN
========================================================== */

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    /* ------------------------------------------------------
                    VALIDATION
    ------------------------------------------------------ */

    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide email and password.",
      });
    }

    /* ------------------------------------------------------
                    FIND USER
    ------------------------------------------------------ */

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({
      email: normalizedEmail,
    });

    /*
      We intentionally return the same message whether the
      email or password is incorrect. This avoids revealing
      whether an account exists.
    */

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    /* ------------------------------------------------------
                    CHECK ACTIVE STATUS
    ------------------------------------------------------ */

    if (!user.isActive) {
      return res.status(403).json({
        message: "This account has been deactivated.",
      });
    }

    /* ------------------------------------------------------
                    COMPARE PASSWORD
    ------------------------------------------------------ */

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    /* ------------------------------------------------------
                    GENERATE JWT
    ------------------------------------------------------ */

    const token = generateToken(user);

    /* ------------------------------------------------------
                        RESPONSE
    ------------------------------------------------------ */

    return res.status(200).json({
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

    return res.status(500).json({
      message: "Server error while logging in.",
    });
  }
};
