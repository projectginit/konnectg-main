import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";

import {
  createBusiness,
  getBusinesses,
  getMyBusinesses,
  getPendingBusinesses,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
  approveBusiness,
  rejectBusiness,
  verifyBusiness,
  rejectVerification,
} from "../controllers/businessController.js";

const router = express.Router();

/* ==========================================================
                        PUBLIC ROUTES
========================================================== */

// Get businesses
router.get("/", getBusinesses);

router.get("/my", authMiddleware, authorizeRoles("merchant"), getMyBusinesses);

router.get("/admin/pending", authMiddleware, authorizeRoles("admin", "owner"), getPendingBusinesses);

// Get single business
router.get("/:businessId", getBusinessById);

/* ==========================================================
                    MERCHANT ROUTES
========================================================== */

// Create business
router.post("/", authMiddleware, authorizeRoles("merchant"), createBusiness);

/* ==========================================================
                    UPDATE / DELETE
========================================================== */

// Merchant can modify own business.
// Admin/Owner can modify businesses.
router.put(
  "/:businessId",
  authMiddleware,
  authorizeRoles("merchant", "admin", "owner"),
  updateBusiness,
);

router.delete(
  "/:businessId",
  authMiddleware,
  authorizeRoles("merchant", "admin", "owner"),
  deleteBusiness,
);

/* ==========================================================
                    ADMIN / OWNER
========================================================== */

// Approve
router.patch(
  "/:businessId/approve",
  authMiddleware,
  authorizeRoles("admin", "owner"),
  approveBusiness,
);

// Reject
router.patch(
  "/:businessId/reject",
  authMiddleware,
  authorizeRoles("admin", "owner"),
  rejectBusiness,
);

// Verify
router.patch(
  "/:businessId/verify",
  authMiddleware,
  authorizeRoles("admin", "owner"),
  verifyBusiness,
);

// Reject verification
router.patch(
  "/:businessId/verification-reject",
  authMiddleware,
  authorizeRoles("admin", "owner"),
  rejectVerification,
);

export default router;
