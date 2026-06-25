import React from "react";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.logo}>NoteHub</h2>
      </div>

      {/* Menu */}
      <ul style={styles.menu}>
        <li style={{ ...styles.item, ...styles.active }}>
          🏠 Dashboard
        </li>

        <li style={styles.item}>
          📝 Notes
        </li>

        <li style={styles.item}>
          ⭐ Favorites
        </li>

        <li style={styles.item}>
          📂 Categories
        </li>

        <li style={styles.item}>
          ⚙️ Settings
        </li>
      </ul>

      {/* Footer */}
      <div style={styles.footer}>
        👩‍💻 Sakshi
      </div>

    </div>
  );
};

const styles = {
  sidebar: {
    width: "250px",
    height: "100vh",
    background: "#1e293b",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
    boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
  },

  header: {
    textAlign: "center",
  },

  logo: {
    margin: 0,
    fontSize: "22px",
    letterSpacing: "1px",
  },

  menu: {
    listStyle: "none",
    padding: 0,
    marginTop: "30px",
  },

  item: {
    padding: "12px 15px",
    marginBottom: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
    background: "transparent",
  },

  active: {
    background: "#2563eb",
  },

  footer: {
    textAlign: "center",
    fontSize: "14px",
    opacity: 0.7,
  },
};

export default Sidebar;