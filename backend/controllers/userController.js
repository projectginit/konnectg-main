import User from "../models/User.js";

/* ==========================================================
                    GET CURRENT USER
========================================================== */

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    return res.status(200).json({
      user,
    });
  } catch (error) {
    console.error("Get current user error:", error.message);

    return res.status(500).json({
      message: "Server error while retrieving user.",
    });
  }
};

/* ==========================================================
                    UPDATE CURRENT USER
========================================================== */

export const updateCurrentUser = async (req, res) => {
  try {
    const { name, phone, profileImage } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    /* ------------------------------------------------------
                        NAME
    ------------------------------------------------------ */

    if (name !== undefined) {
      if (!name.trim()) {
        return res.status(400).json({
          message: "Name cannot be empty.",
        });
      }

      user.name = name.trim();
    }

    /* ------------------------------------------------------
                        PHONE
    ------------------------------------------------------ */

    if (phone !== undefined) {
      const normalizedPhone = phone.trim().replace(/[\s-]/g, "");

      if (!normalizedPhone) {
        return res.status(400).json({
          message: "Phone number cannot be empty.",
        });
      }

      // Prevent changing to another user's phone number.
      const existingUser = await User.findOne({
        phone: normalizedPhone,
        _id: { $ne: user._id },
      });

      if (existingUser) {
        return res.status(409).json({
          message: "An account with this phone number already exists.",
        });
      }

      user.phone = normalizedPhone;
    }

    /* ------------------------------------------------------
                    PROFILE IMAGE
    ------------------------------------------------------ */

    if (profileImage !== undefined) {
      user.profileImage = profileImage;
    }

    /* ------------------------------------------------------
                            SAVE
    ------------------------------------------------------ */

    await user.save();

    return res.status(200).json({
      message: "Profile updated successfully.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    console.error("Update current user error:", error.message);

    // Handles MongoDB unique index as a second layer.
    if (error.code === 11000) {
      return res.status(409).json({
        message: "An account with this phone number already exists.",
      });
    }

    return res.status(500).json({
      message: "Server error while updating profile.",
    });
  }
};

/* ==========================================================
                    GET ALL USERS
========================================================== */

export const getUsers = async (req, res) => {
  try {
    const {
      search,
      role,
      active,
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

    const filter = {};

    /* ------------------------------------------------------
                            SEARCH
    ------------------------------------------------------ */

    if (search?.trim()) {
      const searchTerm = search.trim();

      filter.$or = [
        {
          name: {
            $regex: searchTerm,
            $options: "i",
          },
        },
        {
          email: {
            $regex: searchTerm,
            $options: "i",
          },
        },
        {
          phone: {
            $regex: searchTerm,
            $options: "i",
          },
        },
      ];
    }

    /* ------------------------------------------------------
                            ROLE
    ------------------------------------------------------ */

    if (role?.trim()) {
      const allowedRoles = [
        "user",
        "merchant",
        "admin",
        "owner",
      ];

      if (!allowedRoles.includes(role.trim())) {
        return res.status(400).json({
          message: "Invalid role filter.",
        });
      }

      filter.role = role.trim();
    }

    /* ------------------------------------------------------
                        ACTIVE STATUS
    ------------------------------------------------------ */

    if (active === "true") {
      filter.isActive = true;
    }

    if (active === "false") {
      filter.isActive = false;
    }

    /* ------------------------------------------------------
                    FETCH USERS
    ------------------------------------------------------ */

    const [users, totalUsers] = await Promise.all([
      User.find(filter)
        .select("-password")
        .sort({
          createdAt: -1,
        })
        .skip(skip)
        .limit(perPage),

      User.countDocuments(filter),
    ]);

    /* ------------------------------------------------------
                    PAGINATION INFO
    ------------------------------------------------------ */

    const totalPages = Math.ceil(totalUsers / perPage);

    return res.status(200).json({
      count: users.length,
      total: totalUsers,
      page: currentPage,
      limit: perPage,
      totalPages,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
      users,
    });
  } catch (error) {
    console.error("Get users error:", error.message);

    return res.status(500).json({
      message: "Server error while retrieving users.",
    });
  }
};