import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#0f172a",
      }}
    >
      <h2 style={{ color: "white" }}>SMS</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>

        <Link to="/courses" style={{ color: "white", textDecoration: "none" }}>
          Courses
        </Link>

        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;