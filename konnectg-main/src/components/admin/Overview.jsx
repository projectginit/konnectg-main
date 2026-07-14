import "../../pages/Admin.css";
import AdminCard from "./AdminCard";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const businessGrowth = [
  { day: "Mon", value: 3 },
  { day: "Tue", value: 5 },
  { day: "Wed", value: 8 },
  { day: "Thu", value: 6 },
  { day: "Fri", value: 12 },
  { day: "Sat", value: 10 },
  { day: "Sun", value: 15 },
];

const userGrowth = [
  { day: "Mon", value: 15 },
  { day: "Tue", value: 18 },
  { day: "Wed", value: 22 },
  { day: "Thu", value: 30 },
  { day: "Fri", value: 28 },
  { day: "Sat", value: 35 },
  { day: "Sun", value: 40 },
];

const categories = [
  { name: "Food", value: 80 },
  { name: "Salon", value: 40 },
  { name: "Medical", value: 55 },
  { name: "Retail", value: 70 },
  { name: "Repair", value: 25 },
];

const verification = [
  { name: "Pending", value: 18 },
  { name: "Approved", value: 140 },
  { name: "Rejected", value: 8 },
];

function Overview() {
  return (
    <div>

      <h1 className="admin-header">
        Dashboard Overview
      </h1>

      <div className="admin-card-container">
        <AdminCard
          icon="🔴"
          title="Pending Verifications"
          value="- -"
          subtitle="No Verifications Pending"
        />

        <AdminCard
          icon="🏪"
          title="Total Businesses"
          value="- -"
          subtitle="Businesses to be registered"
        />

        <AdminCard
          icon="👤"
          title="Registered Business"
          value="- -"
          subtitle="Users to be registered"
        />

        <AdminCard
          icon="⭐"
          title="Flagged Reviews"
          value="- -"
          subtitle="Reviews to be Flagged"
        />
      </div>

      <div className="admin-card-container">
        <AdminCard
          icon="🎉"
          title="Active Offers"
          value="- -"
          subtitle="Offers by Businesses"
        />

        <AdminCard
          icon="📊"
          title="Business Growth"
          value="- -"
          subtitle="+/- growth rate"
        />

        <AdminCard
          icon="🗒️"
          title="Approvals/Claims"
          value="- -"
          subtitle="Pending Approvals"
        />

        <AdminCard
          icon="⚡"
          title="Quick Actions"
          value="- -"
          subtitle="Needs Attention"
        />
      </div>

      <div className="admin-analytics-grid">

        <div className="graph-card">
          <h3>Business Registrations</h3>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={businessGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line dataKey="value" stroke="#66023C" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="graph-card">
          <h3>User Registrations</h3>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={userGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line dataKey="value" stroke="#1D4ED8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="graph-card">
          <h3>Businesses by Category</h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={categories}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#66023C" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="graph-card">
          <h3>Verification Status</h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={verification}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

    </div>
  );
}

export default Overview;