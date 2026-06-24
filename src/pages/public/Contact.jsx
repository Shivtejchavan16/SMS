import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    console.log(formData);
  };

  return (
    <div style={styles.page}>
      {/* HERO SECTION */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Contact Us</h1>
        <p style={styles.heroText}>
          Have questions about School Management System? We are here to help you.
        </p>
      </div>

      {/* MAIN SECTION */}
      <div style={styles.container}>
        {/* FORM SECTION */}
        <div style={styles.formCard}>
          <h2 style={styles.heading}>Send Message</h2>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div style={styles.formGroup}>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            {/* Email */}
            <div style={styles.formGroup}>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            {/* USER TYPE DROPDOWN */}
            <div style={styles.formGroup}>
              <label>User Type</label>
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                style={styles.select}
                required
              >
                <option value="">Select User Type</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Parent">Parent</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Subject */}
            <div style={styles.formGroup}>
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            {/* Message */}
            <div style={styles.formGroup}>
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                required
              />
            </div>

            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>
        </div>

         {/* Contact Information */}
        <div style={styles.infoCard}>
          <h2 style={styles.heading}>Contact Information</h2>

          <div style={styles.infoItem}>
            <h4>📍 Address</h4>
            <p>
              School Management System,
              <br />
              Pune, Maharashtra, India
            </p>
          </div>

          <div style={styles.infoItem}>
            <h4>📞 Phone</h4>
            <p>+91 98765 43210</p>
          </div>

          <div style={styles.infoItem}>
            <h4>📧 Email</h4>
            <p>support@smsportal.com</p>
          </div>

          <div style={styles.infoItem}>
            <h4>🕒 Working Hours</h4>
            <p>
              Monday - Saturday
              <br />
              9:00 AM - 6:00 PM
            </p>
          </div>

          <div style={styles.infoItem}>
            <h4>🌐 Website</h4>
            <p>www.smsportal.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: "#f5f7fb",
    minHeight: "100vh",
    paddingBottom: "40px",
  },

  hero: {
    background: "linear-gradient(135deg, #2563eb, #1e40af)",
    color: "#fff",
    textAlign: "center",
    padding: "60px 20px",
  },

  heroTitle: {
    fontSize: "40px",
    marginBottom: "10px",
  },

  heroText: {
    fontSize: "18px",
    maxWidth: "600px",
    margin: "0 auto",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "25px",
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "0 20px",
  },

  formCard: {
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  },

  infoCard: {
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  },

  heading: {
    marginBottom: "20px",
    color: "#1e293b",
  },

  formGroup: {
    marginBottom: "18px",
  },

  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    marginTop: "6px",
    fontSize: "15px",
    outline: "none",
  },

  textarea: {
    width: "100%",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    marginTop: "6px",
    resize: "none",
    fontSize: "15px",
    outline: "none",
  },

  select: {
    width: "100%",
    padding: "12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    marginTop: "6px",
    fontSize: "15px",
    outline: "none",
    backgroundColor: "#fff",
    cursor: "pointer",
  },

  button: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "14px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%",
    fontWeight: "600",
  },

  infoItem: {
    marginBottom: "18px",
    paddingBottom: "12px",
    borderBottom: "1px solid #e5e7eb",
  },
};

export default Contact;
