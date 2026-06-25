import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Students",
      value: "250",
      icon: "👨‍🎓",
      bg: "linear-gradient(135deg,#4f46e5,#6366f1)",
    },
    {
      title: "Attendance",
      value: "92%",
      icon: "✅",
      bg: "linear-gradient(135deg,#059669,#10b981)",
    },
    {
      title: "Assignments",
      value: "18",
      icon: "📝",
      bg: "linear-gradient(135deg,#d97706,#f59e0b)",
    },
    {
      title: "Exams",
      value: "12",
      icon: "📚",
      bg: "linear-gradient(135deg,#dc2626,#ef4444)",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "20px",
      }}
    >
     <div
  style={{
    background: "#fff",
    padding: "20px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  }}
>
  <div>
    <h1 style={{ margin: 0 }}>Welcome Teacher 👋</h1>
    <p style={{ color: "#666" }}>
      Manage your classes and students efficiently.
    </p>
  </div>

  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "20px",
    }}
  >
    <input
      type="text"
      placeholder="Search..."
      style={{
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "250px",
      }}
    />

    <span style={{ fontWeight: "600" }}>
      John Smith
    </span>

    <img
      src="https://i.pravatar.cc/150?img=12"
      alt="Teacher"
      style={{
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        border: "2px solid #2563eb",
      }}
    />
  </div>
</div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              background: item.bg,
              color: "#fff",
              padding: "25px",
              borderRadius: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3>{item.title}</h3>
                <h1>{item.value}</h1>
              </div>

              <div style={{ fontSize: "40px" }}>
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "20px",
        }}
      >
        <h2>Quick Actions</h2>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={buttonStyle}
            onClick={() => navigate("/teacher/students")}
          >
            Students
          </button>

          <button
            style={buttonStyle}
            onClick={() => navigate("/teacher/create-exam")}
          >
            Create Exam
          </button>

          <button
            style={buttonStyle}
            onClick={() => navigate("/teacher/reports")}
          >
            Reports
          </button>

          <button
            style={buttonStyle}
            onClick={() => navigate("/teacher/settings")}
          >
            Settings
          </button>
        </div>
      </div>

      {/* Middle Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {/* Attendance */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h2>Attendance Progress</h2>

          <div
            style={{
              height: "12px",
              background: "#e5e7eb",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "92%",
                height: "100%",
                background: "#10b981",
              }}
            />
          </div>

          <p style={{ marginTop: "10px" }}>
            Monthly Attendance : 92%
          </p>
        </div>

        {/* Activities */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h2>Recent Activities</h2>

          <p>✅ Attendance marked</p>
          <p>✅ Assignment uploaded</p>
          <p>✅ Exam created</p>
          <p>✅ Student query answered</p>
        </div>
      </div>

      {/* Students + Announcements */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h2>Top Students</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Class</th>
                <th>Marks</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul Sharma</td>
                <td>10A</td>
                <td>95%</td>
              </tr>

              <tr>
                <td>Priya Patil</td>
                <td>9B</td>
                <td>93%</td>
              </tr>

              <tr>
                <td>Aryan Singh</td>
                <td>10C</td>
                <td>91%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h2>Announcements</h2>

          <p>📢 Parent Meeting - Friday</p>
          <p>📢 Science Exhibition Next Week</p>
          <p>📢 Exam Schedule Published</p>
        </div>
      </div>

      {/* Upcoming Exams */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h2>Upcoming Exams</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th>Subject</th>
              <th>Class</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Mathematics</td>
              <td>10A</td>
              <td>25 Jun 2026</td>
            </tr>

            <tr>
              <td>Science</td>
              <td>9B</td>
              <td>28 Jun 2026</td>
            </tr>

            <tr>
              <td>English</td>
              <td>8A</td>
              <td>30 Jun 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const buttonStyle = {
  background: "#2563eb",
  color: "#fff",
  border: "none",
  padding: "12px 20px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Dashboard;