import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail, ArrowRight } from "lucide-react";

import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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
                        FORM VALIDATION
  ========================================================== */

  const validateForm = () => {
    const email = formData.email.trim();
    const password = formData.password;

    if (!email || !password) {
      return "Please enter your email and password.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address.";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }

    return "";
  };

  /* ==========================================================
                        LOGIN
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

        Later replace the temporary block below with:

        const response = await fetch(
          `${API_URL}/api/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: formData.email.trim(),
              password: formData.password,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Login failed."
          );
        }

        // Store authentication state through AuthContext.
        // Do NOT permanently put JWT logic directly here.
      */

      console.log("Login request:", {
        email: formData.email.trim(),
        rememberMe,
      });

      /*
        Temporary frontend testing only.

        Remove this when backend authentication
        is connected.
      */

      await new Promise((resolve) => {
        setTimeout(resolve, 700);
      });

      navigate("/");
    } catch (error) {
      setError(error.message || "Unable to login. Please try again.");
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
            Welcome back to <span>KonnectG</span>
          </h1>

          <p>
            Discover trusted businesses and services around your local
            community.
          </p>
        </section>

        {/* ====================================================
                            FORM PANEL
        ==================================================== */}

        <section className="auth-form-panel">
          <div className="auth-form-container">
            {/* HEADER */}

            <div className="auth-form-header">
              <h2>Welcome Back</h2>

              <p>Login to your KonnectG account</p>
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
                                EMAIL
              ================================================== */}

              <div className="auth-field">
                <label htmlFor="email">Email Address</label>

                <div className="auth-input-wrapper">
                  <Mail size={18} className="auth-input-icon" />

                  <input
                    id="email"
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
                              PASSWORD
              ================================================== */}

              <div className="auth-field">
                <div className="auth-label-row">
                  <label htmlFor="password">Password</label>

                  {/*

                    This route does not currently exist in App.jsx.

                    Therefore we are intentionally not linking to
                    a non-existent page yet.

                    Add /forgot-password once that page is built.

                  */}
                </div>

                <div className="auth-input-wrapper">
                  <LockKeyhole size={18} className="auth-input-icon" />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
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
                            REMEMBER ME
              ================================================== */}

              <div className="auth-options">
                <label className="auth-checkbox">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={isLoading}
                  />

                  <span>Remember me</span>
                </label>
              </div>

              {/* ==================================================
                              SUBMIT
              ================================================== */}

              <button
                type="submit"
                className="auth-submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Logging in...</>
                ) : (
                  <>
                    Login
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* ==================================================
                            SIGN UP
            ================================================== */}

            <div className="auth-switch">
              <span>Don&apos;t have an account?</span>

              <Link to="/signup">Create an account</Link>
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
