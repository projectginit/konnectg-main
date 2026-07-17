import { useState } from "react";
import "../../pages/Admin.css";
import ApprovalCard from "./ApprovalCard";

function Approval() {

    const [activeTab, setActiveTab] = useState("pending");

    const pending = [
        {
            id: "KG1001",
            name: "Sharma Electronics",
            category: "Electronics Store",
            owner: "Rahul Sharma",
            location: "Matigara",
            phone: "+91 9876543210",
            date: "12 Jul 2026",
            status: "Pending"
        },
        {
            id: "KG1002",
            name: "Royal Caterers",
            category: "Catering Service",
            owner: "Sayan Roy",
            location: "Siliguri",
            phone: "+91 9123456780",
            date: "11 Jul 2026",
            status: "Pending"
        },
        {
            id: "KG1003",
            name: "Dream Fitness",
            category: "Gym",
            owner: "Abhishek Das",
            location: "Pradhan Nagar",
            phone: "+91 9001234567",
            date: "10 Jul 2026",
            status: "Pending"
        }
    ];

    const approved = [
        {
            id: "KG0834",
            name: "Pizza Hub",
            category: "Restaurant",
            owner: "Amit Paul",
            location: "Matigara",
            phone: "+91 9876123456",
            date: "05 Jul 2026",
            status: "Approved"
        },
        {
            id: "KG0835",
            name: "Modern Furniture",
            category: "Furniture",
            owner: "Rakesh Gupta",
            location: "Champasari",
            phone: "+91 9988776655",
            date: "04 Jul 2026",
            status: "Approved"
        }
    ];

    const rejected = [
        {
            id: "KG0761",
            name: "Fast Bike Garage",
            category: "Garage",
            owner: "Arjun Singh",
            location: "Siliguri",
            phone: "+91 9898989898",
            date: "02 Jul 2026",
            status: "Rejected"
        },
        {
            id: "KG0762",
            name: "ABC Mobile Shop",
            category: "Mobile Store",
            owner: "Nitesh Roy",
            location: "Bagdogra",
            phone: "+91 9111111111",
            date: "01 Jul 2026",
            status: "Rejected"
        }
    ];

    const getCurrentData = () => {
        switch (activeTab) {
            case "approved":
                return approved;
            case "rejected":
                return rejected;
            default:
                return pending;
        }
    };

    return (
        <div className="approval-page">

            <h1 className="admin-header">
                Merchant & Service Approvals
            </h1>

            <div className="approval-tabs">

                <button
                    className={activeTab === "pending" ? "tab-btn active-tab" : "tab-btn"}
                    onClick={() => setActiveTab("pending")}
                >
                    🟡 Pending
                </button>

                <button
                    className={activeTab === "approved" ? "tab-btn active-tab" : "tab-btn"}
                    onClick={() => setActiveTab("approved")}
                >
                    🟢 Approved
                </button>

                <button
                    className={activeTab === "rejected" ? "tab-btn active-tab" : "tab-btn"}
                    onClick={() => setActiveTab("rejected")}
                >
                    🔴 Rejected
                </button>

            </div>

            <div className="approval-slider">

                {getCurrentData().map((merchant) => (
                    <ApprovalCard
                        key={merchant.id}
                        merchant={merchant}
                    />
                ))}

            </div>

        </div>
    );
}

export default Approval;