import "../../pages/Admin.css";

function MerchantModal({ merchant, onClose }) {
  if (!merchant) return null;

  return (
    <div className="merchant-modal-overlay">
      <div className="merchant-modal">
        <div className="merchant-modal-header">
          <div>
            <h2>{merchant.business}</h2>

            <p>{merchant.category}</p>
          </div>

          <button className="modal-close-btn" onClick={onClose}>
            ✖
          </button>
        </div>

        <div className="merchant-modal-body">
          <div className="merchant-info-grid">
            <div>
              <strong>Business ID</strong>
              <p>{merchant.id}</p>
            </div>

            <div>
              <strong>Owner</strong>
              <p>{merchant.owner}</p>
            </div>

            <div>
              <strong>Phone</strong>
              <p>{merchant.phone}</p>
            </div>

            <div>
              <strong>Email</strong>
              <p>{merchant.email}</p>
            </div>

            <div>
              <strong>Location</strong>
              <p>{merchant.location}</p>
            </div>

            <div>
              <strong>Status</strong>
              <p>{merchant.status}</p>
            </div>

            <div>
              <strong>Rating</strong>
              <p>⭐ {merchant.rating}</p>
            </div>

            <div>
              <strong>Profile Completion</strong>
              <p>{merchant.profile}%</p>
            </div>
          </div>

          <div className="merchant-description">
            <h3>Business Description</h3>

            <p>
              Sharma Electronics is a trusted electronics retailer serving
              customers in Matigara. Specializes in televisions, home
              appliances, mobile accessories and repair services.
            </p>
          </div>

          <div className="merchant-gallery">
            <h3>Business Images</h3>

            <div className="dummy-images">
              <div className="dummy-image">Image 1</div>
              <div className="dummy-image">Image 2</div>
              <div className="dummy-image">Image 3</div>
            </div>
          </div>
        </div>

        <div className="merchant-modal-footer">
          <button className="btn btn-primary">Edit Merchant</button>

          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MerchantModal;
