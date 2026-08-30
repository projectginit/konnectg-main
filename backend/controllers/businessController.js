import Business from "../models/Business.js";

/* ==========================================================
                    CREATE BUSINESS
========================================================== */

export const createBusiness = async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      phone,
      email,
      address,
      area,
      city,
      location,
      logo,
      images,
    } = req.body;

    /* ------------------------------------------------------
                        VALIDATION
    ------------------------------------------------------ */

    if (!name || !category || !phone || !address || !area) {
      return res.status(400).json({
        message: "Name, category, phone, address and area are required.",
      });
    }

    /* ------------------------------------------------------
                    CREATE BUSINESS
    ------------------------------------------------------ */

    const business = await Business.create({
      name: name.trim(),
      description: description?.trim() || "",
      category: category.trim(),

      // IMPORTANT:
      // The owner comes from the authenticated user.
      owner: req.user._id,

      phone: phone.trim(),
      email: email?.trim().toLowerCase() || "",

      address: address.trim(),
      area: area.trim(),
      city: city?.trim() || "Siliguri",

      location,

      logo: logo || "",
      images: Array.isArray(images) ? images : [],

      // Explicitly establish initial moderation state.
      approvalStatus: "pending",
      verificationStatus: "pending",

      isActive: true,
      isFeatured: false,
    });

    return res.status(201).json({
      message: "Business submitted successfully.",
      business,
    });
  } catch (error) {
    console.error("Create business error:", error.message);

    return res.status(500).json({
      message: "Server error while creating business.",
    });
  }
};

/* ==========================================================
                    GET ALL BUSINESSES
========================================================== */

export const getBusinesses = async (req, res) => {
  try {
    const {
      search,
      category,
      area,
      verified,
      featured,
      sort = "relevance",
      page = 1,
      limit = 20,
    } = req.query;

    /* ------------------------------------------------------
                        PAGINATION
    ------------------------------------------------------ */

    const currentPage = Math.max(Number(page) || 1, 1);

    const perPage = Math.min(
      Math.max(Number(limit) || 20, 1),
      100,
    );

    const skip = (currentPage - 1) * perPage;

    /* ------------------------------------------------------
                            FILTER
    ------------------------------------------------------ */

    const filter = {
      isActive: true,
      approvalStatus: "approved",
    };

    /* ------------------------------------------------------
                            SEARCH
    ------------------------------------------------------ */

    if (search?.trim()) {
      filter.$text = {
        $search: search.trim(),
      };
    }

    /* ------------------------------------------------------
                          CATEGORY
    ------------------------------------------------------ */

    if (category?.trim()) {
      filter.category = category.trim();
    }

    /* ------------------------------------------------------
                            AREA
    ------------------------------------------------------ */

    if (area?.trim()) {
      filter.area = area.trim();
    }

    /* ------------------------------------------------------
                          VERIFIED
    ------------------------------------------------------ */

    if (verified === "true") {
      filter.verificationStatus = "verified";
    }

    /* ------------------------------------------------------
                          FEATURED
    ------------------------------------------------------ */

    if (featured === "true") {
      filter.isFeatured = true;
    }

    /* ------------------------------------------------------
                            SORTING
    ------------------------------------------------------ */

    let sortOption = {};

    switch (sort) {
      case "rating":
        sortOption = {
          rating: -1,
          reviewCount: -1,
        };
        break;

      case "reviews":
        sortOption = {
          reviewCount: -1,
          rating: -1,
        };
        break;

      case "newest":
        sortOption = {
          createdAt: -1,
        };
        break;

      case "oldest":
        sortOption = {
          createdAt: 1,
        };
        break;

      case "popular":
        sortOption = {
          views: -1,
          rating: -1,
        };
        break;

      case "relevance":
      default:
        sortOption = {
          isFeatured: -1,
          rating: -1,
          reviewCount: -1,
          createdAt: -1,
        };
        break;
    }

    /* ------------------------------------------------------
                    FETCH BUSINESSES
    ------------------------------------------------------ */

    const [businesses, totalBusinesses] = await Promise.all([
      Business.find(filter)
        .populate("owner", "name email")
        .sort(sortOption)
        .skip(skip)
        .limit(perPage),

      Business.countDocuments(filter),
    ]);

    /* ------------------------------------------------------
                        PAGINATION INFO
    ------------------------------------------------------ */

    const totalPages = Math.ceil(totalBusinesses / perPage);

    return res.status(200).json({
      count: businesses.length,
      total: totalBusinesses,
      page: currentPage,
      limit: perPage,
      totalPages,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
      businesses,
    });
  } catch (error) {
    console.error("Get businesses error:", error.message);

    return res.status(500).json({
      message: "Server error while retrieving businesses.",
    });
  }
};

/* ==========================================================
                    GET MY BUSINESSES
========================================================== */

export const getMyBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find({
      owner: req.user._id,
    })
      .sort({
        createdAt: -1,
      })
      .populate("owner", "name email");

    return res.status(200).json({
      count: businesses.length,
      businesses,
    });
  } catch (error) {
    console.error("Get my businesses error:", error.message);

    return res.status(500).json({
      message: "Server error while retrieving your businesses.",
    });
  }
};

/* ==========================================================
                    GET BUSINESS BY ID
========================================================== */

export const getBusinessById = async (req, res) => {
  try {
    const { businessId } = req.params;

    const business = await Business.findOne({
      _id: businessId,
      isActive: true,
      approvalStatus: "approved",
    }).populate("owner", "name email");

    if (!business) {
      return res.status(404).json({
        message: "Business not found.",
      });
    }

    /* ------------------------------------------------------
                        INCREMENT VIEWS
    ------------------------------------------------------ */

    business.views += 1;

    await business.save();

    return res.status(200).json({
      business,
    });
  } catch (error) {
    console.error("Get business error:", error.message);

    return res.status(500).json({
      message: "Server error while retrieving business.",
    });
  }
};

/* ==========================================================
                    UPDATE BUSINESS
========================================================== */

export const updateBusiness = async (req, res) => {
  try {
    const { businessId } = req.params;

    const business = await Business.findById(businessId);

    if (!business) {
      return res.status(404).json({
        message: "Business not found.",
      });
    }

    /* ------------------------------------------------------
                    OWNERSHIP CHECK
    ------------------------------------------------------ */

    const isOwner = business.owner.toString() === req.user._id.toString();

    const isAdmin = ["admin", "owner"].includes(req.user.role);

    if (!isOwner && !isAdmin) {
      return res.status(403).json({
        message: "You do not have permission to update this business.",
      });
    }

    /* ------------------------------------------------------
                    ALLOWED FIELDS
    ------------------------------------------------------ */

    const allowedFields = [
      "name",
      "description",
      "category",
      "phone",
      "email",
      "address",
      "area",
      "city",
      "location",
      "logo",
      "images",
    ];

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        business[field] = req.body[field];
      }
    });

    /*
      If a merchant changes important business information,
      send it through approval again.

      Admin/Owner updates do not automatically reset approval.
    */

    if (req.user.role === "merchant" && isOwner) {
      business.approvalStatus = "pending";
      business.verificationStatus = "pending";
    }

    await business.save();

    return res.status(200).json({
      message: "Business updated successfully.",
      business,
    });
  } catch (error) {
    console.error("Update business error:", error.message);

    return res.status(500).json({
      message: "Server error while updating business.",
    });
  }
};

/* ==========================================================
                    DELETE BUSINESS
========================================================== */

export const deleteBusiness = async (req, res) => {
  try {
    const { businessId } = req.params;

    const business = await Business.findById(businessId);

    if (!business) {
      return res.status(404).json({
        message: "Business not found.",
      });
    }

    const isOwner = business.owner.toString() === req.user._id.toString();

    const isAdmin = ["admin", "owner"].includes(req.user.role);

    if (!isOwner && !isAdmin) {
      return res.status(403).json({
        message: "You do not have permission to delete this business.",
      });
    }

    /*
      We are deliberately using a soft delete.
      The document remains in MongoDB.
    */

    business.isActive = false;

    await business.save();

    return res.status(200).json({
      message: "Business removed successfully.",
    });
  } catch (error) {
    console.error("Delete business error:", error.message);

    return res.status(500).json({
      message: "Server error while deleting business.",
    });
  }
};

/* ==========================================================
                    APPROVE BUSINESS
========================================================== */

export const approveBusiness = async (req, res) => {
  try {
    const { businessId } = req.params;

    const business = await Business.findById(businessId);

    if (!business) {
      return res.status(404).json({
        message: "Business not found.",
      });
    }

    business.approvalStatus = "approved";
    business.rejectionReason = "";

    await business.save();

    return res.status(200).json({
      message: "Business approved successfully.",
      business,
    });
  } catch (error) {
    console.error("Approve business error:", error.message);

    return res.status(500).json({
      message: "Server error while approving business.",
    });
  }
};

/* ==========================================================
                    REJECT BUSINESS
========================================================== */

export const rejectBusiness = async (req, res) => {
  try {
    const { businessId } = req.params;
    const { rejectionReason } = req.body;

    if (!rejectionReason?.trim()) {
      return res.status(400).json({
        message: "A rejection reason is required.",
      });
    }

    const business = await Business.findById(businessId);

    if (!business) {
      return res.status(404).json({
        message: "Business not found.",
      });
    }

    business.approvalStatus = "rejected";
    business.rejectionReason = rejectionReason.trim();

    await business.save();

    return res.status(200).json({
      message: "Business rejected successfully.",
      business,
    });
  } catch (error) {
    console.error("Reject business error:", error.message);

    return res.status(500).json({
      message: "Server error while rejecting business.",
    });
  }
};

/* ==========================================================
                    VERIFY BUSINESS
========================================================== */

export const verifyBusiness = async (req, res) => {
  try {
    const { businessId } = req.params;

    const business = await Business.findById(businessId);

    if (!business) {
      return res.status(404).json({
        message: "Business not found.",
      });
    }

    business.verificationStatus = "verified";

    await business.save();

    return res.status(200).json({
      message: "Business verified successfully.",
      business,
    });
  } catch (error) {
    console.error("Verify business error:", error.message);

    return res.status(500).json({
      message: "Server error while verifying business.",
    });
  }
};

/* ==========================================================
                REJECT BUSINESS VERIFICATION
========================================================== */

export const rejectVerification = async (req, res) => {
  try {
    const { businessId } = req.params;

    const business = await Business.findById(businessId);

    if (!business) {
      return res.status(404).json({
        message: "Business not found.",
      });
    }

    business.verificationStatus = "rejected";

    await business.save();

    return res.status(200).json({
      message: "Business verification rejected.",
      business,
    });
  } catch (error) {
    console.error("Reject verification error:", error.message);

    return res.status(500).json({
      message: "Server error while rejecting verification.",
    });
  }
};
