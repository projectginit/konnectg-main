import "../../pages/Admin.css";
import AdminHeader from "./AdminHeader";
import AdminCard from "./AdminCard";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const businessGrowth = [
  { month: "Jan", value: 18 },
  { month: "Feb", value: 25 },
  { month: "Mar", value: 33 },
  { month: "Apr", value: 41 },
  { month: "May", value: 55 },
  { month: "Jun", value: 67 },
  { month: "Jul", value: 81 },
];

const userGrowth = [
  { month: "Jan", value: 230 },
  { month: "Feb", value: 320 },
  { month: "Mar", value: 450 },
  { month: "Apr", value: 610 },
  { month: "May", value: 770 },
  { month: "Jun", value: 980 },
  { month: "Jul", value: 1240 },
];

function Analytics() {
  return (
    <div className="analytics-page">
      <AdminHeader
        title="Analytics"
        subtitle="Monitor KonnectG's growth and performance."
        buttonText="Export Report"
        buttonIcon="📄"
        search=""
        setSearch={() => {}}
        placeholder="Search..."
        onButtonClick={() => alert("Export Report")}
      />

      {/* KPI Cards */}

      <div className="admin-card-container">
        <AdminCard
          icon="🏪"
          title="Businesses"
          value="248"
          subtitle="+12 this month"
        />

        <AdminCard
          icon="👥"
          title="Users"
          value="4,382"
          subtitle="+156 this week"
        />

        <AdminCard
          icon="⭐"
          title="Reviews"
          value="1,287"
          subtitle="4.6 Average"
        />

        <AdminCard 
        icon="🎁" 
        title="Offers" 
        value="43" 
        subtitle="8 Featured" />

        <AdminCard
          icon="📈"
          title="Growth"
          value="+12%"
          subtitle="Compared to last month"
        />

        <AdminCard
          icon="🔥"
          title="Engagement"
          value="81%"
          subtitle="Weekly Active Users"
        />

        <AdminCard
          icon="🪪"
          title="Verification Rate"
          value="94%"
          subtitle="Businesses Verified"
        />

        <AdminCard
          icon="💰"
          title="Revenue"
          value="Coming Soon"
          subtitle="Backend Required"
        />
      </div>

      {/* Charts */}

      <div className="analytics-grid">
        {/* Business Growth */}

        <div className="graph-card">
          <div className="graph-card-header">
            <div>
              <div className="graph-card-title">Business Growth</div>

              <div className="graph-card-subtitle">Monthly registrations</div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={businessGrowth}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="value"
                stroke="#66023C"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* User Growth */}

        <div className="graph-card">
          <div className="graph-card-header">
            <div>
              <div className="graph-card-title">User Growth</div>

              <div className="graph-card-subtitle">Monthly registrations</div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={userGrowth}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#2563EB"
                fill="#93C5FD"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* ========================================
                    CATEGORY ANALYTICS
            ======================================== */}

      <div className="analytics-grid">
        <div className="graph-card">
          <div className="graph-card-header">
            <div>
              <div className="graph-card-title">Businesses by Category</div>

              <div className="graph-card-subtitle">
                Most popular business types
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={[
                { category: "Food", value: 82 },

                { category: "Retail", value: 65 },

                { category: "Medical", value: 48 },

                { category: "Salon", value: 35 },

                { category: "Gym", value: 22 },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="category" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="value" fill="#66023C" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="graph-card">
          <div className="graph-card-header">
            <div>
              <div className="graph-card-title">Verification Status</div>

              <div className="graph-card-subtitle">
                Business verification progress
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: "Verified", value: 186 },

                  { name: "Pending", value: 18 },

                  { name: "Rejected", value: 9 },
                ]}
                dataKey="value"
                outerRadius={100}
                fill="#66023C"
                label
              />

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ========================================
                    TOP BUSINESSES
            ======================================== */}

      <section className="graph-card">
        <h2>Top Performing Businesses</h2>

        <div className="analytics-table">
          <div className="analytics-row analytics-heading">
            <span>Business</span>

            <span>Rating</span>

            <span>Views</span>

            <span>Reviews</span>

            <span>Growth</span>
          </div>

          <div className="analytics-row">
            <span>Sharma Electronics</span>

            <span>4.9 ⭐</span>

            <span>3,428</span>

            <span>186</span>

            <span className="kpi-success">+8%</span>
          </div>

          <div className="analytics-row">
            <span>Royal Caterers</span>

            <span>4.8 ⭐</span>

            <span>3,101</span>

            <span>162</span>

            <span className="kpi-success">+6%</span>
          </div>

          <div className="analytics-row">
            <span>Dream Fitness</span>

            <span>4.8 ⭐</span>

            <span>2,844</span>

            <span>140</span>

            <span className="kpi-success">+5%</span>
          </div>
        </div>
      </section>

      {/* ========================================
                    PLATFORM INSIGHTS
            ======================================== */}

      <section className="dashboard-section">
        <h2>Platform Insights</h2>

        <div className="analytics-insights">
          <div className="analytics-insight-card">
            <h3>🏆 Highest Rated</h3>

            <h1>4.9</h1>

            <span>Sharma Electronics</span>
          </div>

          <div className="analytics-insight-card">
            <h3>🔥 Trending Category</h3>

            <h1>Food</h1>

            <span>+18% Growth</span>
          </div>

          <div className="analytics-insight-card">
            <h3>📍 Fastest Growing Area</h3>

            <h1>Matigara</h1>

            <span>36 New Businesses</span>
          </div>

          <div className="analytics-insight-card">
            <h3>👑 Most Viewed</h3>

            <h1>3.4K</h1>

            <span>Sharma Electronics</span>
          </div>
        </div>
      </section>

      {/* ========================================
                    SYSTEM USAGE
            ======================================== */}

      <section className="dashboard-section">
        <h2>System Usage</h2>

        <div className="analytics-system">
          <div className="system-card">
            <h3>💾 Storage</h3>

            <p>18% Used</p>
          </div>

          <div className="system-card">
            <h3>🗄 Database</h3>

            <p>Healthy</p>
          </div>

          <div className="system-card">
            <h3>⚡ Server Load</h3>

            <p>24%</p>
          </div>

          <div className="system-card">
            <h3>🌐 API</h3>

            <p>Online</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Analytics;
