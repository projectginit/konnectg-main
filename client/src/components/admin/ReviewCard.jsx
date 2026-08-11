import "../../pages/Admin.css";

function ReviewCard({
  review,

  onView,

  onHide,

  onDelete,
}) {
  const stars = "⭐".repeat(review.rating);

  return (
    <div className="review-card">
      {/* Left Section */}

      <div className="review-left">
        <div className="review-title">
          <h2>{review.business}</h2>

          {review.verified && (
            <span className="verified-badge">✔ Verified Customer</span>
          )}
        </div>

        <p className="review-user">👤 {review.user}</p>

        <p className="review-stars">{stars}</p>

        <p className="review-text">{review.review}</p>
      </div>

      {/* Middle Section */}

      <div className="review-middle">
        <p>
          👍 Helpful
          <strong>{review.likes}</strong>
        </p>

        <p>
          🚩 Reports
          <strong>{review.reports}</strong>
        </p>

        <p>📅 {review.date}</p>

        <p>🆔 {review.id}</p>
      </div>

      {/* Right Section */}

      <div className="review-right">
        <span className={`review-status ${review.status.toLowerCase()}`}>
          {review.status}
        </span>

        <div className="review-actions">
          <button className="merchant-btn view-btn" onClick={onView}>
            👁 View
          </button>

          <button className="merchant-btn feature-btn" onClick={onHide}>
            {review.status === "Visible" ? "🙈 Hide" : "👁 Restore"}
          </button>

          <button className="merchant-btn delete-btn" onClick={onDelete}>
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
