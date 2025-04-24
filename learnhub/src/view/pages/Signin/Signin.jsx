import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Signin.module.css";

export default function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // נווט לעמוד הבית
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <button onClick={() => navigate("/landingpage")} className={styles.backBtn}>
        ← Back to Home
      </button>

      <img src="/hubi-icon.png" alt="LearnHub Logo" className={styles.logo} />
      <h1 className={styles.title}>LearnHub</h1>
      <p className={styles.subtitle}>Master your courses with interactive learning</p>

      <div className={styles.formContainer}>
        <h2>Welcome back</h2>
        <p>Enter your credentials to access your account</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Email</label>
          <input
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="●●●●●●●●"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign In</button>
        </form>

        <p className={styles.switchText}>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
