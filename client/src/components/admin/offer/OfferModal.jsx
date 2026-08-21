import "../../../pages/admin/Admin.css";
function OfferModal({ offer, onClose }) {
  if (!offer) return null;

  return (
    <div className="offer-modal-overlay">
      <div className="offer-modal">
        {/* Header */}

        <div className="offer-modal-header">
          <div>
            <h2>{offer.title}</h2>

            <p>{offer.merchant}</p>
          </div>

          <button className="modal-close-btn" onClick={onClose}>
            ✖
          </button>
        </div>

        {/* Banner */}

        <div className="offer-preview-banner">
          <h1>{offer.discount} OFF</h1>

          <h3>{offer.title}</h3>

          <p>{offer.merchant}</p>
        </div>

        {/* Details */}

        <div className="offer-details-grid">
          <div>
            <strong>Offer ID</strong>

            <p>{offer.id}</p>
          </div>

          <div>
            <strong>Category</strong>

            <p>{offer.category}</p>
          </div>

          <div>
            <strong>Coupon Code</strong>

            <p>{offer.coupon}</p>
          </div>

          <div>
            <strong>Status</strong>

            <p>{offer.status}</p>
          </div>

          <div>
            <strong>Starts On</strong>

            <p>{offer.start}</p>
          </div>

          <div>
            <strong>Ends On</strong>

            <p>{offer.end}</p>
          </div>
        </div>

        {/* Description */}

        <div className="offer-description">
          <h3>Description</h3>

          <p>
            Enjoy exclusive savings on selected products. This promotional offer
            is available for a limited time only. Terms and conditions apply.
          </p>
        </div>

        {/* Terms */}

        <div className="offer-terms">
          <h3>Terms & Conditions</h3>

          <ul>
            <li>Offer cannot be combined with other discounts.</li>

            <li>Applicable only during the offer period.</li>

            <li>Valid while stocks last.</li>

            <li>Merchant reserves the right to modify the offer.</li>
          </ul>
        </div>

        {/* Image */}

        <div className="offer-image-placeholder">
          Promotional Banner Preview
        </div>

        {/* Footer */}

        <div className="offer-modal-footer">
          <button className="merchant-btn feature-btn">⭐ Feature</button>

          <button className="merchant-btn status-btn">🟢 Activate</button>

          <button className="merchant-btn delete-btn">🗑 Delete</button>

          <button className="merchant-btn view-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default OfferModal;
