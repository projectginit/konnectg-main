import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
  {
    // =========================
    // BASIC INFORMATION
    // =========================

    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    // =========================
    // BUSINESS OWNER
    // =========================

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // =========================
    // CONTACT INFORMATION
    // =========================

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      default: "",
      trim: true,
      lowercase: true,
    },

    // =========================
    // LOCATION
    // =========================

    address: {
      type: String,
      required: true,
      trim: true,
    },

    area: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      default: "Siliguri",
      trim: true,
    },

    location: {
      latitude: {
        type: Number,
      },

      longitude: {
        type: Number,
      },
    },

    // =========================
    // MEDIA
    // =========================

    logo: {
      type: String,
      default: "",
    },

    images: [
      {
        type: String,
      },
    ],

    // =========================
    // ADMIN WORKFLOW
    // =========================

    approvalStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    verificationStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },

    rejectionReason: {
      type: String,
      default: "",
    },

    // =========================
    // BUSINESS STATUS
    // =========================

    isActive: {
      type: Boolean,
      default: true,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    // =========================
    // ANALYTICS
    // =========================

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    reviewCount: {
      type: Number,
      default: 0,
    },

    views: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);

const Business = mongoose.model("Business", businessSchema);

export default Business;