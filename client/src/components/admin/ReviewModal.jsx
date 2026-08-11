import "../../pages/Admin.css";

function ReviewModal({ review, onClose }) {
  if (!review) return null;

  const stars = "⭐".repeat(review.rating);

  return (
    <div className="review-modal-overlay">
      <div className="review-modal">
        {/* Header */}

        <div className="review-modal-header">
          <div>
            <h2>{review.business}</h2>

            <p>{review.id}</p>
          </div>

          <button className="modal-close-btn" onClick={onClose}>
            ✖
          </button>
        </div>

        {/* User */}

        <div className="review-user-section">
          <div className="review-avatar">{review.user.charAt(0)}</div>

          <div>
            <h3>{review.user}</h3>

            {review.verified && (
              <span className="verified-badge">✔ Verified Customer</span>
            )}
          </div>
        </div>

        {/* Review */}

        <div className="review-full">
          <h3>Review</h3>

          <p className="review-stars">{stars}</p>

          <p className="review-text">{review.review}</p>
        </div>

        {/* Details */}

        <div className="review-details-grid">
          <div>
            <strong>Date</strong>

            <p>{review.date}</p>
          </div>

          <div>
            <strong>Status</strong>

            <p>{review.status}</p>
          </div>

          <div>
            <strong>Helpful</strong>

            <p>👍 {review.likes}</p>
          </div>

          <div>
            <strong>Reports</strong>

            <p>🚩 {review.reports}</p>
          </div>
        </div>

        {/* Images */}

        <div className="review-images">
          <h3>Attached Images</h3>

          <div className="dummy-images">
            <div className="dummy-image">Photo 1</div>

            <div className="dummy-image">Photo 2</div>

            <div className="dummy-image">Photo 3</div>
          </div>
        </div>

        {/* Merchant Reply */}

        <div className="merchant-reply">
          <h3>Merchant Reply</h3>

          <textarea placeholder="Write a reply..." rows="4"></textarea>
        </div>

        {/* Footer */}

        <div className="review-modal-footer">
          <button className="merchant-btn status-btn">✔ Approve</button>

          <button className="merchant-btn feature-btn">🙈 Hide</button>

          <button className="merchant-btn delete-btn">🗑 Delete</button>

          <button className="merchant-btn view-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
