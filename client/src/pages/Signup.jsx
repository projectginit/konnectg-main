import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Store,
} from "lucide-react";

import "./Auth.css";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [acceptTerms, setAcceptTerms] = useState(false);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /* ==========================================================
                        FORM CHANGE
  ========================================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  /* ==========================================================
                        ROLE CHANGE
  ========================================================== */

  const handleRoleChange = (role) => {
    setFormData((previous) => ({
      ...previous,
      role,
    }));

    if (error) {
      setError("");
    }
  };

  /* ==========================================================
                        VALIDATION
  ========================================================== */

  const validateForm = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;

    if (!name || !email || !phone || !password || !confirmPassword) {
      return "Please fill in all required fields.";
    }

    if (name.length < 2) {
      return "Please enter a valid name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address.";
    }

    /*
      Basic Indian phone validation.

      Accepts examples such as:

      9876543210
      +919876543210
      +91 9876543210
    */

    const normalizedPhone = phone.replace(/[\s-]/g, "");

    if (!/^(\+91)?[6-9]\d{9}$/.test(normalizedPhone)) {
      return "Please enter a valid Indian phone number.";
    }

    if (password.length < 8) {
      return "Password must contain at least 8 characters.";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }

    if (!["user", "merchant"].includes(formData.role)) {
      return "Please select a valid account type.";
    }

    if (!acceptTerms) {
      return "Please accept the Terms & Conditions.";
    }

    return "";
  };

  /* ==========================================================
                        SUBMIT
  ========================================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      /*
        ========================================================
                    BACKEND INTEGRATION
        ========================================================

        Later this will become:

        const response = await fetch(
          `${API_URL}/api/auth/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name.trim(),
              email: formData.email.trim(),
              phone: formData.phone.trim(),
              password: formData.password,
              role: formData.role,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Registration failed."
          );
        }
      */

      console.log("Signup request:", {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        role: formData.role,
      });

      /*
        Temporary frontend testing only.
      */

      await new Promise((resolve) => {
        setTimeout(resolve, 700);
      });

      navigate("/login");
    } catch (error) {
      setError(
        error.message || "Unable to create your account. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  /* ==========================================================
                            UI
  ========================================================== */

  return (
    <main className="auth-page">
      <div className="auth-container">
        {/* ====================================================
                            BRAND PANEL
        ==================================================== */}

        <section className="auth-brand-panel">
          <div className="auth-brand-logo">K</div>

          <h1>
            Join <span>KonnectG</span>
          </h1>

          <p>
            Connect with trusted local businesses, discover useful services, and
            become part of your local community.
          </p>
        </section>

        {/* ====================================================
                            FORM PANEL
        ==================================================== */}

        <section className="auth-form-panel">
          <div className="auth-form-container">
            {/* HEADER */}

            <div className="auth-form-header">
              <h2>Create Account</h2>

              <p>Join your local KonnectG community</p>
            </div>

            {/* ERROR */}

            {error && (
              <div className="auth-error" role="alert">
                {error}
              </div>
            )}

            {/* FORM */}

            <form className="auth-form" onSubmit={handleSubmit}>
              {/* ==================================================
                                  NAME
              ================================================== */}

              <div className="auth-field">
                <label htmlFor="name">Full Name</label>

                <div className="auth-input-wrapper">
                  <User size={18} className="auth-input-icon" />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* ==================================================
                                  EMAIL
              ================================================== */}

              <div className="auth-field">
                <label htmlFor="signup-email">Email Address</label>

                <div className="auth-input-wrapper">
                  <Mail size={18} className="auth-input-icon" />

                  <input
                    id="signup-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* ==================================================
                                  PHONE
              ================================================== */}

              <div className="auth-field">
                <label htmlFor="phone">Phone Number</label>

                <div className="auth-input-wrapper">
                  <Phone size={18} className="auth-input-icon" />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* ==================================================
                              ACCOUNT TYPE
              ================================================== */}

              <div className="auth-field">
                <label>Account Type</label>

                <div className="auth-role-selector">
                  {/* USER */}

                  <button
                    type="button"
                    className={
                      formData.role === "user"
                        ? "auth-role-btn active"
                        : "auth-role-btn"
                    }
                    onClick={() => handleRoleChange("user")}
                    disabled={isLoading}
                  >
                    <User size={18} />

                    <span>User</span>
                  </button>

                  {/* MERCHANT */}

                  <button
                    type="button"
                    className={
                      formData.role === "merchant"
                        ? "auth-role-btn active"
                        : "auth-role-btn"
                    }
                    onClick={() => handleRoleChange("merchant")}
                    disabled={isLoading}
                  >
                    <Store size={18} />

                    <span>Merchant</span>
                  </button>
                </div>
              </div>

              {/* ==================================================
                                PASSWORD
              ================================================== */}

              <div className="auth-field">
                <label htmlFor="signup-password">Password</label>

                <div className="auth-input-wrapper">
                  <LockKeyhole size={18} className="auth-input-icon" />

                  <input
                    id="signup-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    disabled={isLoading}
                  />

                  <button
                    type="button"
                    className="auth-password-toggle"
                    onClick={() => setShowPassword((previous) => !previous)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* ==================================================
                            CONFIRM PASSWORD
              ================================================== */}

              <div className="auth-field">
                <label htmlFor="confirm-password">Confirm Password</label>

                <div className="auth-input-wrapper">
                  <LockKeyhole size={18} className="auth-input-icon" />

                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                    disabled={isLoading}
                  />

                  <button
                    type="button"
                    className="auth-password-toggle"
                    onClick={() =>
                      setShowConfirmPassword((previous) => !previous)
                    }
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* ==================================================
                              TERMS
              ================================================== */}

              <label className="auth-checkbox auth-terms">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  disabled={isLoading}
                />

                <span>
                  I agree to the <Link to="/terms">Terms & Conditions</Link> and{" "}
                  <Link to="/privacy">Privacy Policy</Link>
                </span>
              </label>

              {/* ==================================================
                              SUBMIT
              ================================================== */}

              <button
                type="submit"
                className="auth-submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Creating account..."
                ) : (
                  <>
                    Create Account
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* ==================================================
                              LOGIN
            ================================================== */}

            <div className="auth-switch">
              <span>Already have an account?</span>

              <Link to="/login">Login</Link>
            </div>

            {/* ==================================================
                              HOME
            ================================================== */}

            <Link to="/" className="auth-back-home">
              ← Back to Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
