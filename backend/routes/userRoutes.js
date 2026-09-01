import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";

import {
  getCurrentUser,
  updateCurrentUser,
  getUsers,
} from "../controllers/userController.js";

const router = express.Router();

/* ==========================================================
                    ADMIN USER MANAGEMENT
========================================================== */

router.get("/", authMiddleware, authorizeRoles("admin", "owner"), getUsers);

/* ==========================================================
                    CURRENT USER
========================================================== */

router.get("/me", authMiddleware, getCurrentUser);

router.put("/me", authMiddleware, updateCurrentUser);

export default router;
