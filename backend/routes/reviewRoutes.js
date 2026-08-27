import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  createReview,
  getBusinessReviews,
  getReviewById,
  updateReview,
  deleteReview,
} from "../controllers/reviewController.js";

const router = express.Router();

/* ==========================================================
                    PUBLIC ROUTES
========================================================== */

// Get all approved reviews for a business
router.get("/business/:businessId", getBusinessReviews);

// Get a single approved review
router.get("/:reviewId", getReviewById);

/* ==========================================================
                    AUTHENTICATED ROUTES
========================================================== */

// Create a review for a business
router.post("/business/:businessId", authMiddleware, createReview);

// Update own review
router.put("/:reviewId", authMiddleware, updateReview);

// Delete own review
// Admin/Owner deletion is handled inside the controller.
router.delete("/:reviewId", authMiddleware, deleteReview);

export default router;
