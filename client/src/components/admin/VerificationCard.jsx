import "../../pages/Admin.css";

function VerificationCard({
  business,

  onView,

  onApprove,

  onReject,
}) {
  const documents = [
    {
      name: "GST Certificate",
      status: business.gst,
    },

    {
      name: "Trade License",
      status: business.tradeLicense,
    },

    {
      name: "Aadhaar",
      status: business.aadhaar,
    },

    {
      name: "Business Photo",
      status: business.businessPhoto,
    },
  ];

  return (
    <div className="verification-card">
      {/* Left */}

      <div className="verification-left">
        <div className="verification-title">
          <h2>{business.business}</h2>

          <span className="merchant-category">{business.category}</span>
        </div>

        <p>
          👤 <strong>Owner:</strong> {business.owner}
        </p>

        <p>
          📍 <strong>Location:</strong> {business.location}
        </p>

        <p>
          📞 <strong>Phone:</strong> {business.phone}
        </p>

        <p>
          🆔 <strong>ID:</strong> {business.id}
        </p>
      </div>

      {/* Middle */}

      <div className="verification-middle">
        <h4>Documents</h4>

        {documents.map((doc) => (
          <div className="document-row" key={doc.name}>
            <span>{doc.status ? "✅" : "❌"}</span>

            <span>{doc.name}</span>
          </div>
        ))}
      </div>

      {/* Right */}

      <div className="verification-right">
        <span className={`status-badge ${business.status.toLowerCase()}`}>
          {business.status}
        </span>

        <div className="verification-actions">
          <button className="merchant-btn view-btn" onClick={onView}>
            📄 View
          </button>

          {business.status === "Pending" && (
            <>
              <button className="merchant-btn status-btn" onClick={onApprove}>
                ✔ Verify
              </button>

              <button className="merchant-btn delete-btn" onClick={onReject}>
                ✖ Reject
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default VerificationCard;
