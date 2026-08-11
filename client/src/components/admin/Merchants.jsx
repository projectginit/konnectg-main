import { useMemo, useState } from "react";
import "../../pages/Admin.css";
import MerchantCard from "./MerchantCard";
import MerchantModal from "./MerchantModal";
import AdminHeader from "./AdminHeader";

function Merchants() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const [selectedMerchant, setSelectedMerchant] = useState(null);

  const [merchants, setMerchants] = useState([
    {
      id: "KG1001",
      business: "Sharma Electronics",
      owner: "Rahul Sharma",
      category: "Electronics",
      phone: "+91 9876543210",
      email: "sharma@gmail.com",
      location: "Matigara",
      status: "Active",
      featured: true,
      rating: 4.8,
      profile: 95,
      updated: "2 days ago",
    },

    {
      id: "KG1002",
      business: "Royal Caterers",
      owner: "Sayan Roy",
      category: "Catering",
      phone: "+91 9123456780",
      email: "royal@gmail.com",
      location: "Siliguri",
      status: "Active",
      featured: false,
      rating: 4.5,
      profile: 90,
      updated: "Yesterday",
    },

    {
      id: "KG1003",
      business: "Dream Fitness",
      owner: "Abhishek Das",
      category: "Gym",
      phone: "+91 9001234567",
      email: "dream@gmail.com",
      location: "Pradhan Nagar",
      status: "Inactive",
      featured: false,
      rating: 4.2,
      profile: 76,
      updated: "4 days ago",
    },

    {
      id: "KG1004",
      business: "Modern Furniture",
      owner: "Amit Das",
      category: "Furniture",
      phone: "+91 9876541111",
      email: "modern@gmail.com",
      location: "Champasari",
      status: "Active",
      featured: true,
      rating: 4.9,
      profile: 100,
      updated: "Today",
    },
  ]);

  const categories = ["All", "Electronics", "Furniture", "Gym", "Catering"];

  const filteredMerchants = useMemo(() => {
    let data = [...merchants];

    if (search !== "") {
      data = data.filter(
        (merchant) =>
          merchant.business.toLowerCase().includes(search.toLowerCase()) ||
          merchant.owner.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (categoryFilter !== "All") {
      data = data.filter((merchant) => merchant.category === categoryFilter);
    }

    if (statusFilter !== "All") {
      data = data.filter((merchant) => merchant.status === statusFilter);
    }

    switch (sortBy) {
      case "A-Z":
        data.sort((a, b) => a.business.localeCompare(b.business));

        break;

      case "Z-A":
        data.sort((a, b) => b.business.localeCompare(a.business));

        break;

      case "Highest Rating":
        data.sort((a, b) => b.rating - a.rating);

        break;

      default:
        break;
    }

    return data;
  }, [merchants, search, categoryFilter, statusFilter, sortBy]);

  const toggleStatus = (id) => {
    setMerchants((prev) =>
      prev.map((merchant) =>
        merchant.id === id
          ? {
              ...merchant,
              status: merchant.status === "Active" ? "Inactive" : "Active",
            }
          : merchant,
      ),
    );
  };

  const toggleFeatured = (id) => {
    setMerchants((prev) =>
      prev.map((merchant) =>
        merchant.id === id
          ? {
              ...merchant,
              featured: !merchant.featured,
            }
          : merchant,
      ),
    );
  };

  const deleteMerchant = (id) => {
    if (window.confirm("Delete this merchant?")) {
      setMerchants((prev) => prev.filter((merchant) => merchant.id !== id));
    }
  };

  return (
    <div className="merchant-page">
      <AdminHeader
        title="Merchants"
        subtitle="Manage all registered businesses on KonnectG."
        buttonText="Add Merchant"
        buttonIcon="➕"
        search={search}
        setSearch={setSearch}
        placeholder="Search merchants..."
        onButtonClick={() => alert("Add Merchant Modal")}
      />

      {/* Summary */}

      <div className="merchant-summary">
        <div className="merchant-summary-card">
          <h3>Total</h3>

          <span>{merchants.length}</span>
        </div>

        <div className="merchant-summary-card">
          <h3>Active</h3>

          <span>{merchants.filter((m) => m.status === "Active").length}</span>
        </div>

        <div className="merchant-summary-card">
          <h3>Inactive</h3>

          <span>{merchants.filter((m) => m.status === "Inactive").length}</span>
        </div>

        <div className="merchant-summary-card">
          <h3>Featured</h3>

          <span>{merchants.filter((m) => m.featured).length}</span>
        </div>
      </div>

      {/* Toolbar */}

      <div className="merchant-toolbar">

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option>Newest</option>
          <option>A-Z</option>
          <option>Z-A</option>
          <option>Highest Rating</option>
        </select>
      </div>

      {/* Merchant Cards */}

      <div className="merchant-list">
        {filteredMerchants.map((merchant) => (
          <MerchantCard
            key={merchant.id}
            merchant={merchant}
            onView={() => setSelectedMerchant(merchant)}
            onDelete={() => deleteMerchant(merchant.id)}
            onToggleFeatured={() => toggleFeatured(merchant.id)}
            onToggleStatus={() => toggleStatus(merchant.id)}
          />
        ))}
      </div>
      {selectedMerchant && (
        <MerchantModal
          merchant={selectedMerchant}
          onClose={() => setSelectedMerchant(null)}
        />
      )}
    </div>
  );
}

export default Merchants;
