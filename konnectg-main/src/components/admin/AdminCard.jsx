import "../../pages/Admin.css";
import { useNavigate } from "react-router-dom";

function AdminCard({
  icon,

  title,

  value,

  subtitle,

  link,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="admin-card"
      onClick={() => link && navigate(link)}
      style={{
        cursor: link ? "pointer" : "default",
      }}
    >
      <div className="admin-card-top">
        <span className="admin-card-icon">{icon}</span>
      </div>

      <div className="admin-card-mid-text">{value}</div>

      <div className="admin-card-top-text">{title}</div>

      <div className="admin-card-bottom-text">{subtitle}</div>

      {link && <div className="admin-card-link">View →</div>}
    </div>
  );
}

export default AdminCard;
