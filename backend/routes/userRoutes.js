import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";

import {
  getCurrentUser,
  updateCurrentUser,
  getUsers,
  getUserById,
  deactivateUser,
  activateUser,
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

/* ==========================================================
                    ADMIN USER MANAGEMENT
========================================================== */

router.get(
  "/:userId",
  authMiddleware,
  authorizeRoles("admin", "owner"),
  getUserById,
);

router.patch(
  "/:userId/deactivate",
  authMiddleware,
  authorizeRoles("admin", "owner"),
  deactivateUser,
);

router.patch(
  "/:userId/activate",
  authMiddleware,
  authorizeRoles("admin", "owner"),
  activateUser,
);

export default router;
