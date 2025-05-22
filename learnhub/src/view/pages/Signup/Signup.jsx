import { Link, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";

export default function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Create the user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update the user's display name in Firebase Auth
      const displayName = `${firstName} ${lastName}`;
      await updateProfile(user, {
        displayName: displayName
      });

      // Save additional user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        displayName,
        email: user.email,
        role: "user",
        createdAt: new Date()
      });

      navigate("/home");
    } catch (err) {
      console.error("Signup Error:", err.message);
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setError(null);
    setLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Split the display name into first and last name
      const nameParts = user.displayName.split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ');

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          firstName,
          lastName,
          displayName: user.displayName,
          email: user.email,
          role: "user",
          createdAt: new Date()
        });
      }

      navigate("/home");
    } catch (err) {
      console.error("Google Signup Error:", err.message);
      setError("Google signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={() => navigate("/")} className={styles.backBtn}>
        ← Back to Home
      </button>

      <img src="/hubi-icon.png" alt="LearnHub Logo" className={styles.logo} />
      <h1 className={styles.title}>LearnHub</h1>
      <p className={styles.subtitle}>Master your courses with interactive learning</p>

      <div className={styles.formWrapper}>
        <h2>Create an account</h2>
        <p>Fill in the form below to create your account</p>
        <form onSubmit={handleSubmit}>
          <label>
            First Name
            <input
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {loading ? (
            <p>Creating account...</p>
          ) : (
            <>
              <button type="submit" className={styles.signupBtn}>Sign Up</button>
              <button type="button" onClick={handleGoogleSignup} className={styles.googleBtn}>
                Sign up with Google
              </button>
            </>
          )}
        </form>

        <p className={styles.signinText}>
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
