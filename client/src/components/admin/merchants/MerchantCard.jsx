import "../../../pages/admin/Admin.css";
function MerchantCard({
  merchant,
  onView,
  onDelete,
  onToggleFeatured,
  onToggleStatus,
}) {
  return (
    <div className="merchant-card">
      {/* Left Section */}

      <div className="merchant-left">
        <div className="merchant-title-row">
          <h2>{merchant.business}</h2>

          {merchant.featured && (
            <span className="featured-badge">⭐ Featured</span>
          )}
        </div>

        <p className="merchant-category">{merchant.category}</p>

        <p>
          👤 <strong>Owner:</strong> {merchant.owner}
        </p>

        <p>
          📍 <strong>Location:</strong> {merchant.location}
        </p>
      </div>

      {/* Middle Section */}

      <div className="merchant-middle">
        <p>📞 {merchant.phone}</p>

        <p>📧 {merchant.email}</p>

        <p>🆔 {merchant.id}</p>

        <p>⭐ {merchant.rating}/5</p>

        <div>
          <span>Profile Completion</span>

          <div className="profile-progress">
            <div
              className="profile-progress-fill"
              style={{
                width: `${merchant.profile}%`,
              }}
            ></div>
          </div>

          <small>{merchant.profile}% Complete</small>
        </div>

        <small>Updated {merchant.updated}</small>
      </div>

      {/* Right Section */}

      <div className="merchant-right">
        <span
          className={
            merchant.status === "Active"
              ? "merchant-active"
              : "merchant-inactive"
          }
        >
          {merchant.status}
        </span>

        <div className="merchant-actions">
          <button className="merchant-btn view-btn" onClick={onView}>
            👁 View
          </button>

          <button
            className="merchant-btn feature-btn"
            onClick={onToggleFeatured}
          >
            {merchant.featured ? "⭐ Unfeature" : "⭐ Feature"}
          </button>

          <button className="merchant-btn status-btn" onClick={onToggleStatus}>
            {merchant.status === "Active" ? "🔴 Deactivate" : "🟢 Activate"}
          </button>

          <button className="merchant-btn delete-btn" onClick={onDelete}>
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default MerchantCard;
