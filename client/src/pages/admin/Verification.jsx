import { useMemo, useState } from "react";
import "./Admin.css";
import VerificationCard from "../../components/admin/verification/VerificationCard";
import VerificationModal from "../../components/admin/verification/VerificationModal";
import AdminHeader from "../../components/admin/AdminHeader";

function Verification() {
  const [search, setSearch] = useState("");

  const [activeTab, setActiveTab] = useState("Pending");

  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const [verificationData, setVerificationData] = useState([
    {
      id: "KG1001",
      business: "Sharma Electronics",
      owner: "Rahul Sharma",
      category: "Electronics",
      location: "Matigara",
      phone: "+91 9876543210",
      gst: true,
      tradeLicense: true,
      aadhaar: true,
      businessPhoto: true,
      status: "Pending",
    },

    {
      id: "KG1002",
      business: "Royal Caterers",
      owner: "Sayan Roy",
      category: "Catering",
      location: "Siliguri",
      phone: "+91 9123456780",
      gst: true,
      tradeLicense: true,
      aadhaar: true,
      businessPhoto: true,
      status: "Verified",
    },

    {
      id: "KG1003",
      business: "Dream Fitness",
      owner: "Abhishek Das",
      category: "Gym",
      location: "Pradhan Nagar",
      phone: "+91 9001234567",
      gst: false,
      tradeLicense: true,
      aadhaar: true,
      businessPhoto: false,
      status: "Rejected",
    },

    {
      id: "KG1004",
      business: "Modern Furniture",
      owner: "Amit Das",
      category: "Furniture",
      location: "Champasari",
      phone: "+91 9000012345",
      gst: true,
      tradeLicense: true,
      aadhaar: false,
      businessPhoto: true,
      status: "Pending",
    },
  ]);

  const filteredData = useMemo(() => {
    return verificationData.filter((business) => {
      const matchesSearch =
        business.business.toLowerCase().includes(search.toLowerCase()) ||
        business.owner.toLowerCase().includes(search.toLowerCase());

      const matchesTab = business.status === activeTab;

      return matchesSearch && matchesTab;
    });
  }, [verificationData, search, activeTab]);

  const updateStatus = (id, status) => {
    setVerificationData((prev) =>
      prev.map((business) =>
        business.id === id ? { ...business, status } : business,
      ),
    );
  };

  return (
    <div className="verification-page">
      <AdminHeader
        title="Verification Centre"
        subtitle="Verify merchant documents before approval."
        buttonText="Export"
        buttonIcon="📄"
        search={search}
        setSearch={setSearch}
        placeholder="Search businesses..."
        onButtonClick={() => alert("Export CSV")}
      />

      {/* Summary */}

      <div className="merchant-summary">
        <div className="merchant-summary-card">
          <h3>Pending</h3>

          <span>
            {verificationData.filter((v) => v.status === "Pending").length}
          </span>
        </div>

        <div className="merchant-summary-card">
          <h3>Verified</h3>

          <span>
            {verificationData.filter((v) => v.status === "Verified").length}
          </span>
        </div>

        <div className="merchant-summary-card">
          <h3>Rejected</h3>

          <span>
            {verificationData.filter((v) => v.status === "Rejected").length}
          </span>
        </div>

        <div className="merchant-summary-card">
          <h3>Missing Documents</h3>

          <span>
            {
              verificationData.filter(
                (v) =>
                  !v.gst || !v.tradeLicense || !v.aadhaar || !v.businessPhoto,
              ).length
            }
          </span>
        </div>
      </div>

      {/* Tabs */}

      <div className="approval-tabs">
        {["Pending", "Verified", "Rejected"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab-btn active-tab" : "tab-btn"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}

      <div className="merchant-list">
        {filteredData.map((business) => (
          <VerificationCard
            key={business.id}
            business={business}
            onView={() => setSelectedBusiness(business)}
            onApprove={() => updateStatus(business.id, "Verified")}
            onReject={() => updateStatus(business.id, "Rejected")}
          />
        ))}
      </div>

      {selectedBusiness && (
        <VerificationModal
          business={selectedBusiness}
          onClose={() => setSelectedBusiness(null)}
        />
      )}
    </div>
  );
}

export default Verification;
