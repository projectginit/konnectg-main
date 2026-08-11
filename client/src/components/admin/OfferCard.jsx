import "../../pages/Admin.css";

function OfferCard({
  offer,

  onView,

  onFeature,

  onStatus,

  onDelete,
}) {
  return (
    <div className="offer-card">
      {/* Banner */}

      <div className="offer-banner">
        <span className="offer-discount">
          {offer.discount}
          OFF
        </span>
      </div>

      {/* Details */}

      <div className="offer-content">
        <div className="offer-header">
          <div>
            <h2>{offer.title}</h2>

            <p className="offer-merchant">🏪 {offer.merchant}</p>
          </div>

          {offer.featured && (
            <span className="featured-badge">⭐ Featured</span>
          )}
        </div>

        <div className="offer-info">
          <div>📂 {offer.category}</div>

          <div>
            🎟 Coupon
            <strong>{offer.coupon}</strong>
          </div>

          <div>📅 {offer.start}</div>

          <div>⏳ {offer.end}</div>
        </div>
      </div>

      {/* Status */}

      <div className="offer-right">
        <span className={`offer-status ${offer.status.toLowerCase()}`}>
          {offer.status}
        </span>

        <div className="offer-actions">
          <button className="merchant-btn view-btn" onClick={onView}>
            👁 View
          </button>

          <button className="merchant-btn feature-btn" onClick={onFeature}>
            {offer.featured ? "⭐ Unfeature" : "⭐ Feature"}
          </button>

          <button className="merchant-btn status-btn" onClick={onStatus}>
            {offer.status === "Active" ? "⏳ Expire" : "🟢 Activate"}
          </button>

          <button className="merchant-btn delete-btn" onClick={onDelete}>
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
