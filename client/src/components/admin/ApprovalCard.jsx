import "../../pages/Admin.css";

function ApprovalCard({ merchant }) {

    return (

        <div className="approval-card">

            <div className="approval-card-left">

                <div className="approval-business">
                    {merchant.name}
                </div>

                <div className="approval-category">
                    {merchant.category}
                </div>

                <div className="approval-owner">
                    👤 {merchant.owner}
                </div>

                <div className="approval-location">
                    📍 {merchant.location}
                </div>

            </div>

            <div className="approval-card-middle">

                <div>🆔 {merchant.id}</div>

                <div>📞 {merchant.phone}</div>

                <div>📅 {merchant.date}</div>

            </div>

            <div className="approval-card-right">

                <span
                    className={`status-badge ${merchant.status.toLowerCase()}`}
                >
                    {merchant.status}
                </span>

                {merchant.status === "Pending" && (
                    <div className="approval-actions">

                        <button className="approve-btn">
                            Approve
                        </button>

                        <button className="reject-btn">
                            Reject
                        </button>

                    </div>
                )}

            </div>

        </div>

    );

}

export default ApprovalCard;