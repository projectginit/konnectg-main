import { useMemo, useState } from "react";
import "../../pages/Admin.css";
import AdminHeader from "./AdminHeader";
import ReviewCard from "./ReviewCard";
import ReviewModal from "./ReviewModal";

function Reviews() {
  const [search, setSearch] = useState("");

  const [selectedReview, setSelectedReview] = useState(null);

  const [ratingFilter, setRatingFilter] = useState("All");

  const [statusFilter, setStatusFilter] = useState("All");

  const [sortBy, setSortBy] = useState("Newest");

  const [reviews, setReviews] = useState([
    {
      id: "R001",
      business: "Sharma Electronics",
      user: "Rahul Das",
      rating: 5,
      review: "Excellent customer service. Highly recommended.",
      likes: 18,
      reports: 0,
      status: "Visible",
      verified: true,
      date: "5 Aug 2026",
    },

    {
      id: "R002",
      business: "Royal Caterers",
      user: "Priya Roy",
      rating: 4,
      review: "Food quality was really good.",
      likes: 12,
      reports: 1,
      status: "Visible",
      verified: true,
      date: "4 Aug 2026",
    },

    {
      id: "R003",
      business: "Dream Fitness",
      user: "Amit Sen",
      rating: 2,
      review: "Gym equipment needs maintenance.",
      likes: 4,
      reports: 3,
      status: "Hidden",
      verified: false,
      date: "2 Aug 2026",
    },

    {
      id: "R004",
      business: "Modern Furniture",
      user: "Sourav Dey",
      rating: 1,
      review: "Wrong product delivered.",
      likes: 2,
      reports: 8,
      status: "Flagged",
      verified: true,
      date: "1 Aug 2026",
    },
  ]);

  const filteredReviews = useMemo(() => {
    let data = [...reviews];

    if (search !== "") {
      data = data.filter(
        (review) =>
          review.business.toLowerCase().includes(search.toLowerCase()) ||
          review.user.toLowerCase().includes(search.toLowerCase()) ||
          review.review.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (ratingFilter !== "All") {
      data = data.filter((review) => review.rating === Number(ratingFilter));
    }

    if (statusFilter !== "All") {
      data = data.filter((review) => review.status === statusFilter);
    }

    switch (sortBy) {
      case "Highest Rating":
        data.sort((a, b) => b.rating - a.rating);

        break;

      case "Lowest Rating":
        data.sort((a, b) => a.rating - b.rating);

        break;

      default:
        break;
    }

    return data;
  }, [reviews, search, ratingFilter, statusFilter, sortBy]);

  const toggleStatus = (id) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id
          ? {
              ...review,

              status: review.status === "Visible" ? "Hidden" : "Visible",
            }
          : review,
      ),
    );
  };

  const deleteReview = (id) => {
    if (window.confirm("Delete this review?")) {
      setReviews((prev) => prev.filter((review) => review.id !== id));
    }
  };

  return (
    <div className="reviews-page">
      <AdminHeader
        title="Reviews"
        subtitle="Moderate customer reviews across KonnectG."
        buttonText="Export"
        buttonIcon="📄"
        search={search}
        setSearch={setSearch}
        placeholder="Search reviews..."
        onButtonClick={() => alert("Export CSV")}
      />

      {/* Summary */}

      <div className="merchant-summary">
        <div className="merchant-summary-card">
          <h3>Total Reviews</h3>

          <span>{reviews.length}</span>
        </div>

        <div className="merchant-summary-card">
          <h3>Flagged</h3>

          <span>{reviews.filter((r) => r.status === "Flagged").length}</span>
        </div>

        <div className="merchant-summary-card">
          <h3>Hidden</h3>

          <span>{reviews.filter((r) => r.status === "Hidden").length}</span>
        </div>

        <div className="merchant-summary-card">
          <h3>Average Rating</h3>

          <span>4.2★</span>
        </div>
      </div>

      {/* Filters */}

      <div className="merchant-toolbar">
        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
        >
          <option>All</option>
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Visible</option>
          <option>Hidden</option>
          <option>Flagged</option>
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option>Newest</option>
          <option>Highest Rating</option>
          <option>Lowest Rating</option>
        </select>
      </div>

      {/* Review List */}

      <div className="merchant-list">
        {filteredReviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            onView={() => setSelectedReview(review)}
            onHide={() => toggleStatus(review.id)}
            onDelete={() => deleteReview(review.id)}
          />
        ))}
      </div>

      {selectedReview && (
        <ReviewModal
          review={selectedReview}
          onClose={() => setSelectedReview(null)}
        />
      )}
    </div>
  );
}

export default Reviews;
