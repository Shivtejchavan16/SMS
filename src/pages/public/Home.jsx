const Home = () => {
  const styles = {
    page: {
      fontFamily: "Arial, sans-serif",
    },

    hero: {
      minHeight: "80vh",
      background:
        "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "60px 80px",
      flexWrap: "wrap",
    },

    heroContent: {
      maxWidth: "600px",
    },

    title: {
      fontSize: "55px",
      fontWeight: "bold",
      marginBottom: "20px",
    },

    subtitle: {
      fontSize: "20px",
      lineHeight: "1.8",
      marginBottom: "30px",
      color: "#e2e8f0",
    },

    button: {
      padding: "14px 30px",
      border: "none",
      borderRadius: "8px",
      background: "#f59e0b",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      fontWeight: "bold",
    },

    heroCard: {
      width: "350px",
      background: "rgba(255,255,255,0.15)",
      backdropFilter: "blur(10px)",
      borderRadius: "15px",
      padding: "25px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    },

    sectionTitle: {
      textAlign: "center",
      fontSize: "36px",
      margin: "60px 0 40px",
      color: "#1e293b",
    },

    features: {
      display: "flex",
      justifyContent: "center",
      gap: "25px",
      flexWrap: "wrap",
      padding: "0 30px 60px",
    },

    featureCard: {
       background: "#fff",
  width: "220px",
  padding: "25px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  fontWeight: "bold",
    },

    statsSection: {
      background: "#f8fafc",
      padding: "60px 20px",
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      flexWrap: "wrap",
    },

    statCard: {
  background: "#fff",
  width: "220px",
  padding: "25px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  fontWeight: "bold",
},
  };

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>Student Management System</h1>

          <p style={styles.subtitle}>
            Streamline examinations, manage student performance,
            generate reports, and improve academic evaluation through
            a modern assessment platform.
          </p>

          <button style={styles.button}>Get Started</button>
        </div>

        <div style={styles.heroCard}>
          <h2>Dashboard Overview</h2>
          <hr />
          <p>👨‍🎓 Students : 1500+</p>
          <p>👩‍🏫 Teachers : 120+</p>
          <p>📝 Exams : 500+</p>
          <p>📊 Results Generated : 10,000+</p>
        </div>
      </section>

      {/* Featured Section */}
      <h2 style={styles.sectionTitle}>Featured Services</h2>

      <section style={styles.features}>
        <div style={styles.featureCard}>
          <h3>📝 Online Exams</h3>
          <p>Create and manage assessments efficiently.</p>
        </div>

        <div style={styles.featureCard}>
          <h3>📊 Results</h3>
          <p>Instant result generation and analytics.</p>
        </div>

        <div style={styles.featureCard}>
          <h3>👨‍🎓 Student Tracking</h3>
          <p>Monitor student progress and performance.</p>
        </div>

        <div style={styles.featureCard}>
          <h3>🔐 Secure Access</h3>
          <p>Role-based authentication and authorization.</p>
        </div>
      </section>

      {/* Statistics Section */}
      {/* Statistics Section Title */}
<h2
  style={{
    textAlign: "center",
      fontSize: "36px",
      margin: "60px 0 40px",
      color: "#1e293b",
  }}
>
  Statistics Overview
</h2>
      <section style={styles.statsSection}>
        <div style={styles.statCard}>
          <h1>1500+</h1>
          <p>Students</p>
        </div>

        <div style={styles.statCard}>
          <h1>120+</h1>
          <p>Teachers</p>
        </div>

        <div style={styles.statCard}>
          <h1>500+</h1>
          <p>Exams Conducted</p>
        </div>

        <div style={styles.statCard}>
          <h1>98%</h1>
          <p>Success Rate</p>
        </div>
      </section>
    </div>
  );
};

export default Home;