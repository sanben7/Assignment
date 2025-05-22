import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Signin.module.css";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";

export default function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await setPersistence(auth, browserLocalPersistence);

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const { role } = userDocSnap.data();
        setLoading(false);
        navigate(role === "admin" ? "/dashboard" : "/");
      } else {
        setLoading(false);
        setError("User data not found.");
      }
    } catch (err) {
      console.error("Login error:", err.message);
      setLoading(false);
      setError("Invalid email or password.");
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    setLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      await setPersistence(auth, browserLocalPersistence);

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userDocRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userDocRef);

      // אם המשתמש לא קיים במסד נתונים - צור אותו
      if (!userSnap.exists()) {
        await setDoc(userDocRef, {
          fullName: user.displayName,
          email: user.email,
          role: "user",
          createdAt: new Date(),
        });
        navigate("/");
      } else {
        const { role } = userSnap.data();
        navigate(role === "admin" ? "/dashboard" : "/");
      }

      setLoading(false);
    } catch (err) {
      console.error("Google login error:", err.message);
      setLoading(false);
      setError("Google sign-in failed.");
    }
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

          {error && <p style={{ color: "red" }}>{error}</p>}
          {loading ? (
            <p>Signing in...</p>
          ) : (
            <>
              <button type="submit">Sign In</button>
              <button type="button" onClick={handleGoogleLogin} className={styles.googleBtn}>
                Sign in with Google
              </button>
            </>
          )}
        </form>

        <p className={styles.switchText}>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
