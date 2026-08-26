import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/me", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Authenticated user retrieved successfully.",
    user: req.user,
  });
});

export default router;
