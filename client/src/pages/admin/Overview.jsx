import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Admin.css";

import AdminCard from "../../components/admin/AdminCard";
import AdminHeader from "../../components/admin/AdminHeader";

function Overview() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  /* ==========================================================
                        NAVIGATION
  ========================================================== */

  const goTo = (path) => {
    navigate(path);
  };

  /* ==========================================================
                        EXPORT REPORT
  ========================================================== */

  const handleExportReport = () => {
    const report = [
      ["KonnectG Dashboard Report"],
      [""],
      ["Metric", "Value"],
      ["Pending Approvals", "18"],
      ["Pending Verification", "12"],
      ["Flagged Reviews", "5"],
      ["Expired Offers", "3"],
      ["New Merchants", "7"],
      ["New Users", "34"],
      ["Average Rating", "4.6"],
      ["Pending Tasks", "38"],
      [""],
      ["Platform Statistics"],
      ["Businesses", "248"],
      ["Users", "4382"],
      ["Reviews", "1287"],
      ["Active Offers", "43"],
    ];

    const csvContent = report
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "konnectg-dashboard-report.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  /* ==========================================================
                        SEARCH
  ========================================================== */

  const searchableItems = [
    {
      title: "Pending Approvals",
      path: "/admin/approval",
    },
    {
      title: "Pending Verification",
      path: "/admin/verification",
    },
    {
      title: "Flagged Reviews",
      path: "/admin/reviews",
    },
    {
      title: "Expired Offers",
      path: "/admin/offers",
    },
    {
      title: "New Merchants",
      path: "/admin/merchants",
    },
    {
      title: "Analytics",
      path: "/admin/analytics",
    },
  ];

  const filteredSearchResults = searchableItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="dashboard-page">
      {/* ==================================================
                            HEADER
      ================================================== */}

      <AdminHeader
        title="Dashboard"
        subtitle="Welcome back! Here's what's happening on KonnectG today."
        buttonText="Export Report"
        buttonIcon="📄"
        search={search}
        setSearch={setSearch}
        placeholder="Search dashboard..."
        onButtonClick={handleExportReport}
      />

      {/* ==================================================
                        SEARCH RESULTS
      ================================================== */}

      {search.trim() && (
        <section className="dashboard-search-results">
          <h3>Search Results</h3>

          {filteredSearchResults.length > 0 ? (
            <div className="dashboard-search-list">
              {filteredSearchResults.map((item) => (
                <button
                  key={item.title}
                  className="dashboard-search-item"
                  onClick={() => goTo(item.path)}
                >
                  <span>{item.title}</span>

                  <span>→</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="dashboard-no-results">No dashboard sections found.</p>
          )}
        </section>
      )}

      {/* ==================================================
                            KPI CARDS
      ================================================== */}

      <div className="admin-card-container">
        <AdminCard
          icon="⏳"
          title="Pending Approvals"
          value="18"
          subtitle="Needs review"
          link="/admin/approval"
        />

        <AdminCard
          icon="🪪"
          title="Pending Verification"
          value="12"
          subtitle="Verify documents"
          link="/admin/verification"
        />

        <AdminCard
          icon="🚩"
          title="Flagged Reviews"
          value="5"
          subtitle="Moderation required"
          link="/admin/reviews"
        />

        <AdminCard
          icon="🎁"
          title="Expired Offers"
          value="3"
          subtitle="Need renewal"
          link="/admin/offers"
        />
      </div>

      <div className="admin-card-container">
        <AdminCard
          icon="🏪"
          title="New Merchants"
          value="7"
          subtitle="+2 since yesterday"
          link="/admin/merchants"
        />

        <AdminCard
          icon="👥"
          title="New Users"
          value="34"
          subtitle="Today's registrations"
        />

        <AdminCard
          icon="⭐"
          title="Average Rating"
          value="4.6"
          subtitle="Across all businesses"
          link="/admin/reviews"
        />

        <AdminCard
          icon="⚡"
          title="Pending Tasks"
          value="38"
          subtitle="Requires attention"
        />
      </div>

      {/* ==================================================
                        TODAY'S TASKS
      ================================================== */}

      <section className="dashboard-section">
        <div className="dashboard-section-header">
          <div>
            <h2>Today&apos;s Tasks</h2>

            <p>Actions that need administrator attention.</p>
          </div>
        </div>

        <div className="task-list">
          <button
            className="task-card task-card-button"
            onClick={() => goTo("/admin/verification")}
          >
            <h3>🪪 Verify Businesses</h3>

            <p>12 businesses are waiting for document verification.</p>

            <span className="task-action">Review →</span>
          </button>

          <button
            className="task-card task-card-button"
            onClick={() => goTo("/admin/approval")}
          >
            <h3>⏳ Review Approvals</h3>

            <p>18 merchants are waiting for approval.</p>

            <span className="task-action">Review →</span>
          </button>

          <button
            className="task-card task-card-button"
            onClick={() => goTo("/admin/reviews")}
          >
            <h3>🚩 Moderate Reviews</h3>

            <p>5 reviews have been reported by users.</p>

            <span className="task-action">Review →</span>
          </button>

          <button
            className="task-card task-card-button"
            onClick={() => goTo("/admin/offers")}
          >
            <h3>🎁 Renew Offers</h3>

            <p>3 promotional offers expired today.</p>

            <span className="task-action">Review →</span>
          </button>
        </div>
      </section>

      {/* ==================================================
                        RECENT ACTIVITY
      ================================================== */}

      <section className="dashboard-section">
        <div className="dashboard-section-header">
          <div>
            <h2>Recent Activity</h2>

            <p>Latest activity across the platform.</p>
          </div>
        </div>

        <div className="activity-list">
          <div className="activity-item">
            <span>🏪 Sharma Electronics submitted business verification.</span>

            <span>2 mins ago</span>
          </div>

          <div className="activity-item">
            <span>⭐ Review reported for Royal Caterers.</span>

            <span>8 mins ago</span>
          </div>

          <div className="activity-item">
            <span>🎁 Furniture Fest offer expired.</span>

            <span>15 mins ago</span>
          </div>

          <div className="activity-item">
            <span>👤 6 new users registered.</span>

            <span>32 mins ago</span>
          </div>

          <div className="activity-item">
            <span>✔ Dream Fitness successfully verified.</span>

            <span>1 hour ago</span>
          </div>
        </div>
      </section>

      {/* ==================================================
                        QUICK ACTIONS
      ================================================== */}

      <section className="dashboard-section">
        <div className="dashboard-section-header">
          <div>
            <h2>Quick Actions</h2>

            <p>Quickly access common administration tasks.</p>
          </div>
        </div>

        <div className="quick-actions">
          <button
            className="quick-action-btn"
            onClick={() => goTo("/admin/merchants")}
          >
            ➕ Add Merchant
          </button>

          <button
            className="quick-action-btn"
            onClick={() => goTo("/admin/verification")}
          >
            🪪 Verify Business
          </button>

          <button
            className="quick-action-btn"
            onClick={() => goTo("/admin/offers")}
          >
            🎁 Create Offer
          </button>

          <button
            className="quick-action-btn"
            onClick={() => goTo("/admin/reviews")}
          >
            ⭐ Moderate Reviews
          </button>

          <button
            className="quick-action-btn"
            onClick={() => goTo("/admin/analytics")}
          >
            📊 View Analytics
          </button>

          <button className="quick-action-btn" onClick={handleExportReport}>
            📤 Export Report
          </button>
        </div>
      </section>

      {/* ==================================================
                        PLATFORM HEALTH
      ================================================== */}

      <section className="dashboard-section">
        <div className="dashboard-section-header">
          <div>
            <h2>Platform Health</h2>

            <p>Current system status.</p>
          </div>
        </div>

        <div className="system-health-grid">
          <div className="system-card">
            <h3>🟢 Server</h3>

            <p>Online</p>
          </div>

          <div className="system-card">
            <h3>🗄 Database</h3>

            <p>Connected</p>
          </div>

          <div className="system-card">
            <h3>🌐 API</h3>

            <p>Healthy</p>
          </div>

          <div className="system-card">
            <h3>💾 Storage</h3>

            <p>12% Used</p>
          </div>

          <div className="system-card">
            <h3>🔐 Security</h3>

            <p>No Threats</p>
          </div>

          <div className="system-card">
            <h3>☁ Last Backup</h3>

            <p>Today · 02:15 AM</p>
          </div>
        </div>
      </section>

      {/* ==================================================
                    PLATFORM STATISTICS
      ================================================== */}

      <section className="dashboard-section">
        <div className="dashboard-section-header">
          <div>
            <h2>Platform Statistics</h2>

            <p>Current platform overview.</p>
          </div>

          <button
            className="section-link-btn"
            onClick={() => goTo("/admin/analytics")}
          >
            View Analytics →
          </button>
        </div>

        <div className="platform-stats">
          <div className="platform-stat-card">
            <h3>🏪 Businesses</h3>

            <h1>248</h1>

            <span>+12 this week</span>
          </div>

          <div className="platform-stat-card">
            <h3>👤 Users</h3>

            <h1>4,382</h1>

            <span>+156 this week</span>
          </div>

          <div className="platform-stat-card">
            <h3>⭐ Reviews</h3>

            <h1>1,287</h1>

            <span>Average 4.6★</span>
          </div>

          <div className="platform-stat-card">
            <h3>🎁 Active Offers</h3>

            <h1>43</h1>

            <span>8 Featured</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Overview;
