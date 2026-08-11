import "../../pages/Admin.css";

function VerificationModal({ business, onClose }) {
  if (!business) return null;

  const documents = [
    {
      title: "GST Certificate",
      uploaded: business.gst,
    },
    {
      title: "Trade License",
      uploaded: business.tradeLicense,
    },
    {
      title: "Aadhaar",
      uploaded: business.aadhaar,
    },
    {
      title: "Business Photo",
      uploaded: business.businessPhoto,
    },
  ];

  return (
    <div className="verification-modal-overlay">
      <div className="verification-modal">
        {/* Header */}

        <div className="verification-modal-header">
          <div>
            <h2>{business.business}</h2>

            <p>{business.category}</p>
          </div>

          <button className="modal-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Merchant Details */}

        <div className="verification-info-grid">
          <div>
            <strong>Business ID</strong>

            <p>{business.id}</p>
          </div>

          <div>
            <strong>Owner</strong>

            <p>{business.owner}</p>
          </div>

          <div>
            <strong>Phone</strong>

            <p>{business.phone}</p>
          </div>

          <div>
            <strong>Location</strong>

            <p>{business.location}</p>
          </div>
        </div>

        {/* Documents */}

        <h3 className="verification-section-title">Uploaded Documents</h3>

        <div className="verification-documents">
          {documents.map((doc) => (
            <div key={doc.title} className="verification-document-card">
              <div className="verification-document-image">
                {doc.uploaded ? "📄 Preview" : "❌ Not Uploaded"}
              </div>

              <h4>{doc.title}</h4>

              <span>{doc.uploaded ? "Uploaded" : "Missing"}</span>
            </div>
          ))}
        </div>

        {/* Footer */}

        <div className="verification-modal-footer">
          <button className="merchant-btn status-btn">✔ Verify Merchant</button>

          <button className="merchant-btn delete-btn">✖ Reject Merchant</button>

          <button className="merchant-btn view-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerificationModal;
