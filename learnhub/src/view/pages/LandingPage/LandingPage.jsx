import React from "react";
import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.textContent}>
                    <h1 className={styles.title}>Master Your Skills with LearnHub</h1>
                    <p className={styles.subtitle}>
                        Experience interactive learning that adapts to your needs. Track your
                        progress, stay motivated, and excel in your courses.
                    </p>
                    <div className={styles.actions}>
                        <button onClick={() => navigate("/signup")} className={styles.getStarted}>
                            Get Started
                        </button>
                        <button onClick={() => navigate("/signin")} className={styles.login}>
                            Already have an account
                        </button>
                    </div>
                </div>
                <div className={styles.logoBox}>
                    <img src="/hubi-icon.png" alt="LearnHub Logo" className={styles.logo} />
                </div>
            </section>

            <section className={styles.whySection}>
                <h2 className={styles.whyTitle}>Why Choose LearnHub?</h2>
                <p className={styles.whySubtitle}>Your journey to success starts here</p>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.icon}>📖</div>
                        <h3>Interactive Learning</h3>
                        <p>Engage with dynamic course content designed to help you master new skills effectively.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>📊</div>
                        <h3>Track Progress</h3>
                        <p>Monitor your learning journey with detailed progress tracking and performance insights.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>👤</div>
                        <h3>Personal Growth</h3>
                        <p>Learn at your own pace with personalized recommendations and adaptive learning paths.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
