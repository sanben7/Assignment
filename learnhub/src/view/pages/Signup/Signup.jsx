
import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <div className={styles.container}>
      <img src="/hubi-icon.png" alt="LearnHub Logo" className={styles.logo} />
      <h1 className={styles.title}>LearnHub</h1>
      <p className={styles.subtitle}>Master your courses with interactive learning</p>

      <div className={styles.formWrapper}>
        <h2>Create an account</h2>
        <p>Fill in the form below to create your account</p>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name
            <input type="text" placeholder="Enter your name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="m@example.com" required />
          </label>
          <label>
            Password
            <input type="password" required />
          </label>
          <button type="submit" className={styles.signupBtn}>Sign Up</button>
        </form>
        <p className={styles.signinText}>
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
