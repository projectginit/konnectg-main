import {useNavigate} from "react-router-dom"
import "../../pages/Admin.css"

function AdminSidebar() {
  const navigate = useNavigate();

  return (
    <div>
        <div className="admin-sidebar">
            <button className="admin-sidebar-button" onClick={() => navigate("dashboard")}>🖥️ Dashboard Overview</button>
            <button className="admin-sidebar-button" onClick={() => navigate("merchants")}>🤝 Merchants</button>
            <button className="admin-sidebar-button" onClick={() => navigate("verification")}>🔒 Verification</button>
            <button className="admin-sidebar-button" onClick={() => navigate("offers")}>🎉 Offers</button>
            <button className="admin-sidebar-button" onClick={() => navigate("reviews")}>⭐ Reviews</button>
            <button className="admin-sidebar-button" onClick={() => navigate("analytics")}>📊 Analytics</button>
            <button className="admin-sidebar-button" onClick={() => navigate("approval")}>🏠 Approval</button>
            <div className='dash-profile' onClick={() => navigate("profile")}>
              <span className='dash-profile-icon'>👤</span>
              <span className='dash-profile-name'>Admin</span>
            </div>
        </div>
    </div>
  )
}

export default AdminSidebar