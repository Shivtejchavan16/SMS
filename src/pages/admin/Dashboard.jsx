import React from "react";

const Dashboard = () => {
  const cards = [
    { title: "Total Students", count: 120 },
    { title: "Active Students", count: 95 },
    { title: "Total Teachers", count: 15 },
    { title: "Total Courses", count: 8 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Admin Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              border: "1px solid #e5e5e5",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{card.title}</h3>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              {card.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;