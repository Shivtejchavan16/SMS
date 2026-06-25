import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background:
        "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)",
      fontFamily: "Segoe UI, sans-serif",
      padding: "20px",
    },

    container: {
      display: "flex",
      width: "900px",
      maxWidth: "100%",
      background: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(15px)",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    },

    leftPanel: {
      flex: 1,
      color: "white",
      padding: "50px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
    },

    logo: {
      fontSize: "32px",
      fontWeight: "bold",
      marginBottom: "20px",
    },

    welcomeText: {
      fontSize: "18px",
      lineHeight: "1.8",
      color: "#e2e8f0",
    },

    rightPanel: {
      flex: 1,
      background: "#fff",
      padding: "50px",
    },

    title: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#1e293b",
      marginBottom: "10px",
      textAlign: "center",
    },

    subtitle: {
      textAlign: "center",
      color: "#64748b",
      marginBottom: "30px",
    },

    inputGroup: {
      marginBottom: "20px",
    },

    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "600",
      color: "#334155",
    },

    input: {
      width: "100%",
      padding: "14px",
      border: "1px solid #cbd5e1",
      borderRadius: "10px",
      fontSize: "15px",
      outline: "none",
      boxSizing: "border-box",
    },

    forgotPassword: {
      textAlign: "right",
      marginBottom: "20px",
    },

    link: {
      textDecoration: "none",
      color: "#2563eb",
      fontWeight: "600",
      fontSize: "14px",
    },

    button: {
      width: "100%",
      padding: "14px",
      border: "none",
      borderRadius: "10px",
      background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
    },

    registerText: {
      textAlign: "center",
      marginTop: "20px",
      color: "#64748b",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Left Side */}
        <div style={styles.leftPanel}>
          <div style={styles.logo}>🎓 Student Management</div>

          <h2>Welcome Back!</h2>

          <p style={styles.welcomeText}>
            Manage students, exams, attendance, reports and academic
            performance from one powerful dashboard.
          </p>
        </div>

        {/* Right Side */}
        <div style={styles.rightPanel}>
          <h1 style={styles.title}>Login</h1>

          <p style={styles.subtitle}>
            Sign in to continue to your account
          </p>

          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>

              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={styles.input}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    color: "#2563eb",
                    fontWeight: "bold",
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div style={styles.forgotPassword}>
              <a href="#" style={styles.link}>
                Forgot Password?
              </a>
            </div>

            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>

          <p style={styles.registerText}>
            Don't have an account?{" "}
            <a href="#" style={styles.link}>
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;