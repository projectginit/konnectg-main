import { useMemo, useState } from "react";
import "../../pages/Admin.css";
import AdminHeader from "./AdminHeader";
import OfferCard from "./OfferCard";
import OfferModal from "./OfferModal";

function Offers() {
  const [search, setSearch] = useState("");

  const [selectedOffer, setSelectedOffer] = useState(null);

  const [categoryFilter, setCategoryFilter] = useState("All");

  const [statusFilter, setStatusFilter] = useState("All");

  const [sortBy, setSortBy] = useState("Newest");

  const [offers, setOffers] = useState([
    {
      id: "OF101",
      title: "Summer Sale",
      merchant: "Sharma Electronics",
      category: "Electronics",
      discount: "20%",
      coupon: "SUMMER20",
      start: "1 Aug 2026",
      end: "31 Aug 2026",
      featured: true,
      status: "Active",
    },

    {
      id: "OF102",
      title: "Weekend Buffet",
      merchant: "Royal Caterers",
      category: "Restaurant",
      discount: "30%",
      coupon: "BUFFET30",
      start: "10 Aug 2026",
      end: "25 Aug 2026",
      featured: false,
      status: "Scheduled",
    },

    {
      id: "OF103",
      title: "Gym Membership",
      merchant: "Dream Fitness",
      category: "Fitness",
      discount: "15%",
      coupon: "FIT15",
      start: "1 Jul 2026",
      end: "20 Jul 2026",
      featured: false,
      status: "Expired",
    },

    {
      id: "OF104",
      title: "Furniture Fest",
      merchant: "Modern Furniture",
      category: "Furniture",
      discount: "25%",
      coupon: "HOME25",
      start: "5 Aug 2026",
      end: "5 Sep 2026",
      featured: true,
      status: "Active",
    },
  ]);

  const filteredOffers = useMemo(() => {
    let data = [...offers];

    if (search) {
      data = data.filter(
        (offer) =>
          offer.title.toLowerCase().includes(search.toLowerCase()) ||
          offer.merchant.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (categoryFilter !== "All") {
      data = data.filter((offer) => offer.category === categoryFilter);
    }

    if (statusFilter !== "All") {
      data = data.filter((offer) => offer.status === statusFilter);
    }

    switch (sortBy) {
      case "A-Z":
        data.sort((a, b) => a.title.localeCompare(b.title));

        break;

      case "Z-A":
        data.sort((a, b) => b.title.localeCompare(a.title));

        break;

      default:
        break;
    }

    return data;
  }, [offers, search, categoryFilter, statusFilter, sortBy]);

  const toggleFeature = (id) => {
    setOffers((prev) =>
      prev.map((offer) =>
        offer.id === id
          ? {
              ...offer,

              featured: !offer.featured,
            }
          : offer,
      ),
    );
  };

  const toggleStatus = (id) => {
    setOffers((prev) =>
      prev.map((offer) =>
        offer.id === id
          ? {
              ...offer,

              status: offer.status === "Active" ? "Expired" : "Active",
            }
          : offer,
      ),
    );
  };

  const deleteOffer = (id) => {
    if (window.confirm("Delete this offer?")) {
      setOffers((prev) => prev.filter((offer) => offer.id !== id));
    }
  };

  return (
    <div className="offers-page">
      <AdminHeader
        title="Offers"
        subtitle="Manage promotional offers from businesses."
        buttonText="Create Offer"
        buttonIcon="🎉"
        search={search}
        setSearch={setSearch}
        placeholder="Search offers..."
        onButtonClick={() => alert("Create Offer")}
      />

      {/* Summary */}

      <div className="merchant-summary">
        <div className="merchant-summary-card">
          <h3>Active</h3>

          <span>{offers.filter((o) => o.status === "Active").length}</span>
        </div>

        <div className="merchant-summary-card">
          <h3>Scheduled</h3>

          <span>{offers.filter((o) => o.status === "Scheduled").length}</span>
        </div>

        <div className="merchant-summary-card">
          <h3>Expired</h3>

          <span>{offers.filter((o) => o.status === "Expired").length}</span>
        </div>

        <div className="merchant-summary-card">
          <h3>Featured</h3>

          <span>{offers.filter((o) => o.featured).length}</span>
        </div>
      </div>

      {/* Filters */}

      <div className="merchant-toolbar">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option>All</option>

          <option>Electronics</option>

          <option>Restaurant</option>

          <option>Fitness</option>

          <option>Furniture</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>

          <option>Active</option>

          <option>Scheduled</option>

          <option>Expired</option>
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option>Newest</option>

          <option>A-Z</option>

          <option>Z-A</option>
        </select>
      </div>

      {/* Offer Cards */}

      <div className="merchant-list">
        {filteredOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onView={() => setSelectedOffer(offer)}
            onFeature={() => toggleFeature(offer.id)}
            onStatus={() => toggleStatus(offer.id)}
            onDelete={() => deleteOffer(offer.id)}
          />
        ))}
      </div>

      {selectedOffer && (
        <OfferModal
          offer={selectedOffer}
          onClose={() => setSelectedOffer(null)}
        />
      )}
    </div>
  );
}

export default Offers;
