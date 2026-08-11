import "../../pages/Admin.css";
import AdminCard from "./AdminCard";
import AdminHeader from "./AdminHeader";

function Overview() {
  return (
    <div className="dashboard-page">
      <AdminHeader
        title="Dashboard"
        subtitle="Welcome back! Here's what's happening on KonnectG today."
        buttonText="Export Report"
        buttonIcon="📄"
        search=""
        setSearch={() => {}}
        placeholder="Search dashboard..."
        onButtonClick={() => alert("Export Report")}
      />

      {/* ========================================
                        KPI CARDS
            ======================================== */}

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
        />

        <AdminCard
          icon="⚡"
          title="Pending Tasks"
          value="38"
          subtitle="Requires attention"
        />
      </div>

      {/* ========================================
                    TODAY'S TASKS
            ======================================== */}

      <section className="dashboard-section">
        <h2>Today&apos;s Tasks</h2>

        <div className="task-list">
          <div className="task-card">
            <h3>🪪 Verify Businesses</h3>

            <p>12 businesses are waiting for document verification.</p>
          </div>

          <div className="task-card">
            <h3>⏳ Review Approvals</h3>

            <p>18 merchants are waiting for approval.</p>
          </div>

          <div className="task-card">
            <h3>🚩 Moderate Reviews</h3>

            <p>5 reviews have been reported by users.</p>
          </div>

          <div className="task-card">
            <h3>🎁 Renew Offers</h3>

            <p>3 promotional offers expired today.</p>
          </div>
        </div>
      </section>

      {/* ========================================
                    RECENT ACTIVITY
            ======================================== */}

      <section className="dashboard-section">
        <h2>Recent Activity</h2>

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
      {/* ========================================
                    QUICK ACTIONS
            ======================================== */}

      <section className="dashboard-section">
        <h2>Quick Actions</h2>

        <div className="quick-actions">
          <button className="quick-action-btn">➕ Add Merchant</button>

          <button className="quick-action-btn">🪪 Verify Business</button>

          <button className="quick-action-btn">🎁 Create Offer</button>

          <button className="quick-action-btn">⭐ Moderate Reviews</button>

          <button className="quick-action-btn">📊 View Analytics</button>

          <button className="quick-action-btn">📤 Export Report</button>
        </div>
      </section>

      {/* ========================================
                    PLATFORM HEALTH
            ======================================== */}

      <section className="dashboard-section">
        <h2>Platform Health</h2>

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

      {/* ========================================
                    PLATFORM STATISTICS
            ======================================== */}

      <section className="dashboard-section">
        <h2>Platform Statistics</h2>

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
