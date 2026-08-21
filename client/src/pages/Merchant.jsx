import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";

/* ==========================================================
                      CONSTANTS
========================================================== */

const NAV_ITEMS = [
  { id: "dashboard", icon: "⊞", label: "Dashboard" },
  { id: "listings", icon: "☰", label: "My Listings" },
  { id: "offers", icon: "🏷️", label: "Offers" },
  { id: "insights", icon: "📊", label: "Insights" },
  { id: "register", icon: "➕", label: "List My Business" },
  { id: "account", icon: "⚙️", label: "Account" },
];

const STATS = [
  {
    icon: "👁️",
    label: "Profile Views",
    value: "1,247",
    change: "+12%",
  },
  {
    icon: "📞",
    label: "Calls This Month",
    value: "89",
    change: "+8%",
  },
  {
    icon: "💬",
    label: "WhatsApp Clicks",
    value: "156",
    change: "+23%",
  },
  {
    icon: "🏷️",
    label: "Offer Redeems",
    value: "34",
    change: "+5%",
  },
];

const ACTIVE_OFFERS = [
  {
    title: "20% Off Lunch Thali",
    ends: "Ends Dec 31",
    views: "156 views",
    redeemed: "24 redeemed",
  },
  {
    title: "Free Dessert ₹500+",
    ends: "Ends Jan 15",
    views: "89 views",
    redeemed: "10 redeemed",
  },
];

const CATEGORIES = [
  "Restaurants & Food",
  "Healthcare",
  "Education",
  "Grocery & Retail",
  "Beauty & Wellness",
  "Home Services",
  "Fitness & Gym",
  "Automobile",
  "Other",
];

/* ==========================================================
                    MERCHANT DASHBOARD
========================================================== */

function Dashboard() {
  return (
    <div>
      <div className="mb-7">
        <h1 className="font-display text-2xl font-extrabold text-ink">
          Merchant Dashboard
        </h1>

        <p className="mt-1 text-sm text-ink-soft">
          Manage your business and track your performance.
        </p>
      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="
              rounded-2xl
              border
              border-[#EFEDF5]
              bg-white
              p-5
              shadow-sm
              transition
              hover:-translate-y-0.5
              hover:shadow-md
            "
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xl">{stat.icon}</span>

              <span className="text-xs font-semibold text-emerald-500">
                {stat.change}
              </span>
            </div>

            <p className="font-display text-2xl font-extrabold text-ink">
              {stat.value}
            </p>

            <p className="mt-1 text-sm text-ink-soft">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Active Offers */}

      <div className="mt-6 rounded-2xl border border-[#EFEDF5] bg-white p-5 shadow-sm sm:p-6">
        <h2 className="mb-5 font-display text-base font-bold text-ink">
          Active Offers Performance
        </h2>

        <div className="flex flex-col">
          {ACTIVE_OFFERS.map((offer, index) => (
            <div
              key={offer.title}
              className={`
                flex
                flex-col
                gap-3
                py-4
                sm:flex-row
                sm:items-center
                sm:justify-between
                ${
                  index < ACTIVE_OFFERS.length - 1
                    ? "border-b border-[#F0EEF6]"
                    : ""
                }
              `}
            >
              <div>
                <p className="font-semibold text-ink">{offer.title}</p>

                <p className="text-sm text-ink-soft">{offer.ends}</p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-sm font-semibold text-purple-700">
                  {offer.views}
                </p>

                <p className="text-sm font-semibold text-emerald-500">
                  {offer.redeemed}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================
                    MY LISTINGS
========================================================== */

function MyListings({ setActive }) {
  return (
    <div>
      <h1 className="mb-7 font-display text-2xl font-extrabold text-ink">
        My Listings
      </h1>

      <div className="rounded-2xl border border-[#EFEDF5] bg-white p-8 text-center shadow-sm">
        <p className="text-4xl">🏪</p>

        <p className="mt-3 font-semibold text-ink">No listings yet.</p>

        <p className="mt-1 text-sm text-ink-soft">
          Add your business to reach more customers.
        </p>

        <button
          type="button"
          onClick={() => setActive("register")}
          className="
            mt-5
            rounded-full
            bg-purple-700
            px-6
            py-2.5
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-purple-600
          "
        >
          + List My Business
        </button>
      </div>
    </div>
  );
}

/* ==========================================================
                      OFFERS
========================================================== */

function Offers() {
  const handleEdit = (offer) => {
    console.log("Edit offer:", offer);
  };

  const handleCreateOffer = () => {
    console.log("Create new offer");
  };

  return (
    <div>
      <div className="mb-7">
        <h1 className="font-display text-2xl font-extrabold text-ink">
          Offers
        </h1>

        <p className="mt-1 text-sm text-ink-soft">
          Create and manage promotional offers for your customers.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {ACTIVE_OFFERS.map((offer) => (
          <div
            key={offer.title}
            className="
              flex
              flex-col
              gap-4
              rounded-2xl
              border
              border-[#EFEDF5]
              bg-white
              p-5
              shadow-sm
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <span
                className="
                  mb-2
                  inline-block
                  rounded-full
                  bg-gold
                  px-3
                  py-0.5
                  text-xs
                  font-bold
                  text-purple-900
                "
              >
                Active
              </span>

              <p className="font-semibold text-ink">{offer.title}</p>

              <p className="text-sm text-ink-soft">{offer.ends}</p>
            </div>

            <button
              type="button"
              onClick={() => handleEdit(offer)}
              className="
                rounded-full
                border
                border-[#EFEDF5]
                px-4
                py-2
                text-sm
                font-semibold
                text-ink-soft
                transition
                hover:border-purple-300
                hover:text-purple-700
              "
            >
              Edit
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={handleCreateOffer}
          className="
            mt-2
            self-start
            rounded-full
            bg-purple-700
            px-6
            py-2.5
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-purple-600
          "
        >
          + Create New Offer
        </button>
      </div>
    </div>
  );
}

/* ==========================================================
                      INSIGHTS
========================================================== */

function Insights() {
  return (
    <div>
      <div className="mb-7">
        <h1 className="font-display text-2xl font-extrabold text-ink">
          Insights
        </h1>

        <p className="mt-1 text-sm text-ink-soft">
          Understand how customers interact with your business.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="
              rounded-2xl
              border
              border-[#EFEDF5]
              bg-white
              p-5
              shadow-sm
            "
          >
            <span className="text-xl">{stat.icon}</span>

            <p className="mt-3 font-display text-2xl font-extrabold text-ink">
              {stat.value}
            </p>

            <p className="mt-1 text-sm text-ink-soft">{stat.label}</p>

            <p className="mt-1 text-xs font-semibold text-emerald-500">
              {stat.change} this month
            </p>
          </div>
        ))}
      </div>

      <div
        className="
          mt-6
          rounded-2xl
          border
          border-[#EFEDF5]
          bg-white
          p-8
          text-center
          shadow-sm
        "
      >
        <p className="text-4xl">📈</p>

        <p className="mt-3 font-semibold text-ink">
          Detailed charts coming soon.
        </p>

        <p className="mt-1 text-sm text-ink-soft">
          Detailed analytics will be available once enough business activity has
          been collected.
        </p>
      </div>
    </div>
  );
}

/* ==========================================================
                      ACCOUNT
========================================================== */

function Account() {
  const handleAccountAction = (action) => {
    console.log(`Account action: ${action}`);
  };

  const accountActions = [
    "Edit Business Info",
    "Change Password",
    "Notification Settings",
    "Logout",
  ];

  return (
    <div>
      <div className="mb-7">
        <h1 className="font-display text-2xl font-extrabold text-ink">
          Account
        </h1>

        <p className="mt-1 text-sm text-ink-soft">
          Manage your merchant account and business settings.
        </p>
      </div>

      <div className="rounded-2xl border border-[#EFEDF5] bg-white p-5 shadow-sm sm:p-6">
        {/* Account information */}

        <div className="flex flex-col gap-4 border-b border-[#F0EEF6] pb-5 sm:flex-row sm:items-center">
          <div
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-purple-700
              font-display
              text-xl
              font-bold
              text-white
            "
          >
            S
          </div>

          <div>
            <p className="font-display font-bold text-ink">Saffron Kitchen</p>

            <p className="text-sm text-ink-soft">saffronkitchen@gmail.com</p>

            <span
              className="
                mt-1
                inline-flex
                items-center
                gap-1
                rounded-full
                bg-emerald-100
                px-2.5
                py-0.5
                text-xs
                font-bold
                text-emerald-600
              "
            >
              ✓ Verified
            </span>
          </div>
        </div>

        {/* Account actions */}

        <div className="mt-5 flex flex-col gap-3">
          {accountActions.map((action) => (
            <button
              key={action}
              type="button"
              onClick={() => handleAccountAction(action)}
              className={`
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                border
                px-4
                py-3
                text-sm
                font-medium
                transition
                ${
                  action === "Logout"
                    ? "border-red-100 text-red-500 hover:bg-red-50"
                    : "border-[#F0EEF6] text-ink hover:border-purple-200 hover:bg-purple-50"
                }
              `}
            >
              <span>{action}</span>

              <span className="text-ink-soft">›</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================
                REGISTER / LIST BUSINESS
========================================================== */

function Register({ setActive }) {
  const [form, setForm] = useState({
    businessName: "",
    phone: "",
    category: "",
    description: "",
    location: "",
  });

  const [photos, setPhotos] = useState(Array(6).fill(null));

  const [otp, setOtp] = useState(["", "", "", ""]);

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* ----------------------------------------------------------
                      FORM HANDLER
  ---------------------------------------------------------- */

  const handleField = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* ----------------------------------------------------------
                    PHOTO HANDLER
  ---------------------------------------------------------- */

  const handlePhoto = (index, event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    setPhotos((previous) => {
      const updated = [...previous];

      if (updated[index]) {
        URL.revokeObjectURL(updated[index]);
      }

      updated[index] = previewUrl;

      return updated;
    });
  };

  /* ----------------------------------------------------------
                  CLEAN PHOTO URLS
  ---------------------------------------------------------- */

  useEffect(() => {
    return () => {
      photos.forEach((photo) => {
        if (photo) {
          URL.revokeObjectURL(photo);
        }
      });
    };
  }, [photos]);

  /* ----------------------------------------------------------
                    SEND OTP
  ---------------------------------------------------------- */

  const handleSendOtp = () => {
    const phone = form.phone.replace(/\D/g, "");

    if (phone.length !== 10) {
      return;
    }

    /*
      TEMPORARY FRONTEND BEHAVIOUR

      Later this will become:

      POST /api/auth/send-otp
    */

    console.log("Send OTP to:", phone);

    setOtpSent(true);
    setOtp(["", "", "", ""]);
    setOtpVerified(false);
  };

  /* ----------------------------------------------------------
                    OTP INPUT
  ---------------------------------------------------------- */

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) {
      return;
    }

    setOtp((previous) => {
      const updated = [...previous];

      updated[index] = value;

      return updated;
    });

    if (value && index < 3) {
      document.getElementById(`merchant-otp-${index + 1}`)?.focus();
    }
  };

  /* ----------------------------------------------------------
                  VERIFY OTP
  ---------------------------------------------------------- */

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 4) {
      return;
    }

    /*
      TEMPORARY FRONTEND BEHAVIOUR

      Later this will become:

      POST /api/auth/verify-otp
    */

    console.log("Verify OTP:", enteredOtp);

    setOtpVerified(true);
  };

  /* ----------------------------------------------------------
                  SUBMIT BUSINESS
  ---------------------------------------------------------- */

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!otpVerified) {
      return;
    }

    /*
      TEMPORARY FRONTEND BEHAVIOUR

      Later this will become something like:

      POST /api/businesses

      with:

      {
        businessName,
        phone,
        category,
        description,
        location,
        images
      }
    */

    console.log("Business submission:", form);
    console.log("Business photos:", photos);

    setSubmitted(true);

    setTimeout(() => {
      setActive("dashboard");
    }, 2000);
  };

  /* ----------------------------------------------------------
                  SUCCESS SCREEN
  ---------------------------------------------------------- */

  if (submitted) {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center px-4 text-center">
        <div className="mb-4 text-6xl">🎉</div>

        <h2 className="font-display text-2xl font-extrabold text-ink">
          Business Submitted!
        </h2>

        <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
          Your business has been submitted for review. Our team will verify the
          information before publishing the listing.
        </p>

        <p className="mt-3 text-xs text-ink-soft">
          Redirecting to dashboard...
        </p>
      </div>
    );
  }

  /* ----------------------------------------------------------
                    REGISTER FORM
  ---------------------------------------------------------- */

  return (
    <div>
      <div className="mb-7">
        <h1 className="font-display text-2xl font-extrabold text-ink">
          List Your Business
        </h1>

        <p className="mt-1 text-sm text-ink-soft">
          Get discovered by local customers. It&apos;s completely free!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* ====================================================
                        BUSINESS PHOTOS
        ==================================================== */}

        <div className="rounded-2xl border border-[#EFEDF5] bg-white p-5 shadow-sm sm:p-6">
          <p className="mb-4 font-display font-bold text-ink">
            Business Photos
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {photos.map((src, index) => (
              <label
                key={index}
                className="
                  group
                  relative
                  flex
                  h-28
                  cursor-pointer
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border-2
                  border-dashed
                  border-purple-200
                  bg-purple-50
                  transition
                  hover:border-purple-500
                  hover:bg-purple-100
                "
              >
                {src ? (
                  <img
                    src={src}
                    alt={`Business preview ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <>
                    <span className="text-2xl">📷</span>

                    <span className="mt-1 text-xs text-ink-soft">
                      Add Photo
                    </span>
                  </>
                )}

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(event) => handlePhoto(index, event)}
                />
              </label>
            ))}
          </div>

          <p className="mt-3 text-xs text-ink-soft">
            Add up to 6 photos. These will be uploaded when the business is
            submitted.
          </p>
        </div>

        {/* ====================================================
                        BUSINESS DETAILS
        ==================================================== */}

        <div className="rounded-2xl border border-[#EFEDF5] bg-white p-5 shadow-sm sm:p-6">
          <p className="mb-5 font-display font-bold text-ink">
            Business Details
          </p>

          <div className="flex flex-col gap-5">
            {/* Business Name */}

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">
                Business Name
              </label>

              <input
                type="text"
                name="businessName"
                value={form.businessName}
                onChange={handleField}
                placeholder="e.g. Saffron Kitchen"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#E5E0EE]
                  px-4
                  py-3
                  text-sm
                  outline-none
                  transition
                  focus:border-purple-600
                  focus:ring-2
                  focus:ring-purple-100
                "
              />
            </div>

            {/* Phone */}

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">
                Phone Number
                {otpVerified && (
                  <span
                    className="
                      ml-2
                      rounded-full
                      bg-emerald-100
                      px-2
                      py-0.5
                      text-xs
                      font-bold
                      text-emerald-600
                    "
                  >
                    ✓ Verified
                  </span>
                )}
              </label>

              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleField}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  required
                  disabled={otpSent}
                  className="
                    min-w-0
                    flex-1
                    rounded-xl
                    border
                    border-[#E5E0EE]
                    px-4
                    py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-purple-600
                    focus:ring-2
                    focus:ring-purple-100
                    disabled:bg-gray-50
                  "
                />

                {!otpVerified && (
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={form.phone.replace(/\D/g, "").length !== 10}
                    className="
                      rounded-xl
                      bg-purple-700
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-purple-600
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    "
                  >
                    {otpSent ? "Resend OTP" : "Send OTP"}
                  </button>
                )}
              </div>

              {/* OTP */}

              {otpSent && !otpVerified && (
                <div className="mt-4">
                  <p className="mb-3 text-xs text-ink-soft">
                    Enter the 4-digit OTP sent to {form.phone}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`merchant-otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(event) =>
                          handleOtpChange(index, event.target.value)
                        }
                        className="
                          h-12
                          w-12
                          rounded-xl
                          border-2
                          border-purple-200
                          text-center
                          text-lg
                          font-bold
                          text-ink
                          outline-none
                          transition
                          focus:border-purple-600
                          focus:ring-2
                          focus:ring-purple-100
                        "
                      />
                    ))}

                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      disabled={otp.some((digit) => digit === "")}
                      className="
                        rounded-xl
                        bg-emerald-500
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-emerald-600
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                      "
                    >
                      Verify
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Category */}

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">
                Category
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleField}
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#E5E0EE]
                  bg-white
                  px-4
                  py-3
                  text-sm
                  outline-none
                  transition
                  focus:border-purple-600
                  focus:ring-2
                  focus:ring-purple-100
                "
              >
                <option value="">Select a category</option>

                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">
                Description
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleField}
                placeholder="Tell customers what makes your business special..."
                rows={4}
                required
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-[#E5E0EE]
                  px-4
                  py-3
                  text-sm
                  outline-none
                  transition
                  focus:border-purple-600
                  focus:ring-2
                  focus:ring-purple-100
                "
              />
            </div>

            {/* Location */}

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">
                Location
              </label>

              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleField}
                  placeholder="e.g. Near SBI Branch, Matigara"
                  required
                  className="
                    min-w-0
                    flex-1
                    rounded-xl
                    border
                    border-[#E5E0EE]
                    px-4
                    py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-purple-600
                    focus:ring-2
                    focus:ring-purple-100
                  "
                />

                <button
                  type="button"
                  onClick={() => console.log("Open map picker")}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-1.5
                    rounded-xl
                    border
                    border-purple-200
                    bg-purple-50
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-purple-700
                    transition
                    hover:bg-purple-100
                  "
                >
                  📍 Pin on Map
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
                        SUBMIT
        ==================================================== */}

        <div
          className="
            rounded-2xl
            border
            border-[#EFEDF5]
            bg-white
            p-5
            text-center
            shadow-sm
            sm:p-6
          "
        >
          <p className="mb-1 font-display text-lg font-bold text-ink">
            List your business for FREE
          </p>

          <p className="mb-5 text-sm text-ink-soft">
            Get verified and reach local customers.
          </p>

          <button
            type="submit"
            disabled={!otpVerified}
            className="
              w-full
              rounded-full
              bg-purple-700
              py-3.5
              font-display
              font-bold
              text-white
              shadow-lg
              shadow-purple-200
              transition
              hover:bg-purple-600
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            SUBMIT BUSINESS
          </button>

          {!otpVerified && (
            <p className="mt-2 text-xs text-ink-soft">
              Please verify your phone number before submitting.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

/* ==========================================================
                    MAIN MERCHANT PAGE
========================================================== */

export default function Merchant() {
  const [active, setActive] = useState("dashboard");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const activeItem = NAV_ITEMS.find((item) => item.id === active);

  const renderPanel = () => {
    switch (active) {
      case "dashboard":
        return <Dashboard />;

      case "listings":
        return <MyListings setActive={setActive} />;

      case "offers":
        return <Offers />;

      case "insights":
        return <Insights />;

      case "register":
        return <Register setActive={setActive} />;

      case "account":
        return <Account />;

      default:
        return <Dashboard />;
    }
  };

  const handleNavigation = (id) => {
    setActive(id);
    setMobileNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F6FA]">
      <Navbar />

      <div className="flex min-h-[calc(100vh-65px)]">
        {/* ==================================================
                          DESKTOP SIDEBAR
        ================================================== */}

        <aside
          className="
            sticky
            top-[65px]
            hidden
            h-[calc(100vh-65px)]
            w-60
            shrink-0
            overflow-y-auto
            border-r
            border-[#EFEDF5]
            bg-white
            px-3
            py-6
            lg:block
          "
        >
          {/* Merchant identity */}

          <div className="mb-6 flex items-center gap-3 px-2">
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-purple-700
                font-bold
                text-white
              "
            >
              S
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-ink">
                Saffron Kitchen
              </p>

              <p className="text-xs font-medium text-emerald-500">Verified ✓</p>
            </div>
          </div>

          {/* Navigation */}

          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item.id)}
                className={`
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-3
                  py-2.5
                  text-left
                  text-sm
                  transition
                  ${
                    active === item.id
                      ? "bg-purple-50 font-semibold text-purple-700"
                      : "font-medium text-ink-soft hover:bg-[#F7F6FA] hover:text-ink"
                  }
                `}
              >
                <span className="w-5 text-center">{item.icon}</span>

                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* ==================================================
                          MOBILE NAV
        ================================================== */}

        <div
          className="
            fixed
            bottom-0
            left-0
            right-0
            z-40
            border-t
            border-[#EFEDF5]
            bg-white
            shadow-[0_-4px_20px_rgba(0,0,0,0.08)]
            lg:hidden
          "
        >
          <div className="grid grid-cols-4">
            {NAV_ITEMS.slice(0, 4).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item.id)}
                className={`
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-1
                  px-2
                  py-2
                  text-[10px]
                  font-semibold
                  ${active === item.id ? "text-purple-700" : "text-ink-soft"}
                `}
              >
                <span className="text-base">{item.icon}</span>

                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ==================================================
                          MAIN CONTENT
        ================================================== */}

        <main
          className="
            min-w-0
            flex-1
            px-4
            py-6
            pb-24
            sm:px-6
            sm:py-8
            lg:px-8
            lg:pb-8
          "
        >
          {/* Mobile section selector */}

          <div className="mb-5 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileNavOpen((previous) => !previous)}
              className="
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                border
                border-[#EFEDF5]
                bg-white
                px-4
                py-3
                text-sm
                font-semibold
                text-ink
                shadow-sm
              "
            >
              <span className="flex items-center gap-2">
                <span>{activeItem?.icon}</span>
                <span>{activeItem?.label}</span>
              </span>

              <span>{mobileNavOpen ? "▲" : "▼"}</span>
            </button>

            {mobileNavOpen && (
              <div
                className="
                  mt-2
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#EFEDF5]
                  bg-white
                  shadow-lg
                "
              >
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigation(item.id)}
                    className={`
                      flex
                      w-full
                      items-center
                      gap-3
                      px-4
                      py-3
                      text-left
                      text-sm
                      ${
                        active === item.id
                          ? "bg-purple-50 font-semibold text-purple-700"
                          : "text-ink-soft"
                      }
                    `}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {renderPanel()}
        </main>
      </div>
    </div>
  );
}
