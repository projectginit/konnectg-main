import Review from "../models/Review.js";
import Business from "../models/Business.js";

/* ==========================================================
                    CREATE REVIEW
========================================================== */

export const createReview = async (req, res) => {
  try {
    const { businessId } = req.params;
    const { rating, comment } = req.body;

    // ------------------------------------------------------
    // VALIDATION
    // ------------------------------------------------------

    if (rating === undefined || !comment?.trim()) {
      return res.status(400).json({
        message: "Rating and comment are required.",
      });
    }

    if (Number(rating) < 1 || Number(rating) > 5) {
      return res.status(400).json({
        message: "Rating must be between 1 and 5.",
      });
    }

    // ------------------------------------------------------
    // CHECK BUSINESS
    // ------------------------------------------------------

    const business = await Business.findOne({
      _id: businessId,
      isActive: true,
      approvalStatus: "approved",
    });

    if (!business) {
      return res.status(404).json({
        message: "Business not found.",
      });
    }

    // ------------------------------------------------------
    // PREVENT DUPLICATE REVIEW
    // ------------------------------------------------------

    const existingReview = await Review.findOne({
      business: businessId,
      user: req.user._id,
    });

    if (existingReview) {
      return res.status(409).json({
        message: "You have already reviewed this business.",
      });
    }

    // ------------------------------------------------------
    // CREATE REVIEW
    // ------------------------------------------------------

    const review = await Review.create({
      business: businessId,
      user: req.user._id,
      rating: Number(rating),
      comment: comment.trim(),
      status: "approved",
    });

    // ------------------------------------------------------
    // UPDATE BUSINESS RATING
    // ------------------------------------------------------

    await updateBusinessRating(businessId);

    const populatedReview = await Review.findById(review._id).populate(
      "user",
      "name",
    );

    return res.status(201).json({
      message: "Review submitted successfully.",
      review: populatedReview,
    });
  } catch (error) {
    console.error("Create review error:", error.message);

    // Handles the MongoDB unique index as a second layer
    // of duplicate-review protection.
    if (error.code === 11000) {
      return res.status(409).json({
        message: "You have already reviewed this business.",
      });
    }

    return res.status(500).json({
      message: "Server error while creating review.",
    });
  }
};

/* ==========================================================
                    GET BUSINESS REVIEWS
========================================================== */

export const getBusinessReviews = async (req, res) => {
  try {
    const { businessId } = req.params;

    const business = await Business.findOne({
      _id: businessId,
      isActive: true,
      approvalStatus: "approved",
    });

    if (!business) {
      return res.status(404).json({
        message: "Business not found.",
      });
    }

    const reviews = await Review.find({
      business: businessId,
      status: "approved",
    })
      .populate("user", "name")
      .sort({
        createdAt: -1,
      });

    return res.status(200).json({
      count: reviews.length,
      reviews,
    });
  } catch (error) {
    console.error("Get reviews error:", error.message);

    return res.status(500).json({
      message: "Server error while retrieving reviews.",
    });
  }
};

/* ==========================================================
                    GET SINGLE REVIEW
========================================================== */

export const getReviewById = async (req, res) => {
  try {
    const { reviewId } = req.params;

    const review = await Review.findOne({
      _id: reviewId,
      status: "approved",
    }).populate("user", "name");

    if (!review) {
      return res.status(404).json({
        message: "Review not found.",
      });
    }

    return res.status(200).json({
      review,
    });
  } catch (error) {
    console.error("Get review error:", error.message);

    return res.status(500).json({
      message: "Server error while retrieving review.",
    });
  }
};

/* ==========================================================
                    UPDATE REVIEW
========================================================== */

export const updateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { rating, comment } = req.body;

    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({
        message: "Review not found.",
      });
    }

    // ------------------------------------------------------
    // OWNERSHIP CHECK
    // ------------------------------------------------------

    if (review.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "You do not have permission to update this review.",
      });
    }

    // ------------------------------------------------------
    // VALIDATION
    // ------------------------------------------------------

    if (rating !== undefined) {
      if (Number(rating) < 1 || Number(rating) > 5) {
        return res.status(400).json({
          message: "Rating must be between 1 and 5.",
        });
      }

      review.rating = Number(rating);
    }

    if (comment !== undefined) {
      if (!comment.trim()) {
        return res.status(400).json({
          message: "Comment cannot be empty.",
        });
      }

      review.comment = comment.trim();
    }

    // ------------------------------------------------------
    // SAVE
    // ------------------------------------------------------

    await review.save();

    await updateBusinessRating(review.business);

    const updatedReview = await Review.findById(review._id).populate(
      "user",
      "name",
    );

    return res.status(200).json({
      message: "Review updated successfully.",
      review: updatedReview,
    });
  } catch (error) {
    console.error("Update review error:", error.message);

    return res.status(500).json({
      message: "Server error while updating review.",
    });
  }
};

/* ==========================================================
                    DELETE REVIEW
========================================================== */

export const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;

    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({
        message: "Review not found.",
      });
    }

    // ------------------------------------------------------
    // OWNERSHIP / ADMIN CHECK
    // ------------------------------------------------------

    const isOwner = review.user.toString() === req.user._id.toString();

    const isAdmin = ["admin", "owner"].includes(req.user.role);

    if (!isOwner && !isAdmin) {
      return res.status(403).json({
        message: "You do not have permission to delete this review.",
      });
    }

    const businessId = review.business;

    await review.deleteOne();

    await updateBusinessRating(businessId);

    return res.status(200).json({
      message: "Review deleted successfully.",
    });
  } catch (error) {
    console.error("Delete review error:", error.message);

    return res.status(500).json({
      message: "Server error while deleting review.",
    });
  }
};

/* ==========================================================
                UPDATE BUSINESS RATING
========================================================== */

const updateBusinessRating = async (businessId) => {
  const result = await Review.aggregate([
    {
      $match: {
        business: businessId,
        status: "approved",
      },
    },
    {
      $group: {
        _id: "$business",
        averageRating: {
          $avg: "$rating",
        },
        reviewCount: {
          $sum: 1,
        },
      },
    },
  ]);

  if (result.length === 0) {
    await Business.findByIdAndUpdate(businessId, {
      rating: 0,
      reviewCount: 0,
    });

    return;
  }

  await Business.findByIdAndUpdate(businessId, {
    rating: Number(result[0].averageRating.toFixed(1)),
    reviewCount: result[0].reviewCount,
  });
};
