import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      
      <h1 style={styles.code}>404</h1>
      
      <h2 style={styles.text}>Oops! Page not found 😢</h2>
      
      <p style={styles.subText}>
        Sorry, the page you are looking for does not exist.
      </p>

      <Link to="/" style={styles.button}>
        ⬅ Back to Home
      </Link>

    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px"
  },
  code: {
    fontSize: "80px",
    color: "#ff4d4d",
    margin: "0"
  },
  text: {
    fontSize: "28px",
    margin: "10px 0"
  },
  subText: {
    fontSize: "16px",
    color: "gray",
    marginBottom: "20px"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px"
  }
};

export default NotFound;