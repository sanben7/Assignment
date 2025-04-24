import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Quiz.module.css";

const Quiz = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");

  const correctAnswerIndex = 1; // התשובה הנכונה היא "f'(x) = 2x"

  const answers = [
    "f'(x) = x",
    "f'(x) = 2x", // התשובה הנכונה
    "f'(x) = 2",
    "f'(x) = x²"
  ];

  const handleCheckAnswer = () => {
    if (selected === null) {
      setFeedback("Please select an answer.");
    } else if (selected === correctAnswerIndex) {
      setFeedback("✅ Correct! Great job.");
    } else {
      setFeedback("❌ Incorrect. Try again!");
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>←</button>

      <h2 className={styles.title}>Knowledge Check</h2>

      <div className={styles.courseBox}>
        <div className={styles.courseHeader}>
          <div>📚 <strong>Calculus 101</strong></div>
          <span>Lesson 3 of 12</span>
        </div>
        <div className={styles.progressBarWrapper}>
          <div className={styles.progressBar}></div>
          <div className={styles.progressFill} style={{ width: "20%" }}></div>
        </div>
        <div className={styles.courseFooter}>
          <span>✔️ 2 completed</span>
          <span>10 remaining</span>
        </div>
        <button className={styles.lessonBtn} onClick={() => navigate("/courses/id")}>
          Back to Lesson
        </button>
      </div>

      <p className={styles.questionIndex}>Question 1 of 5</p>
      <h3 className={styles.question}>What is the derivative of f(x) = x²?</h3>

      <ul className={styles.answers}>
        {answers.map((text, i) => (
          <li
            key={i}
            className={`${styles.answerOption} ${selected === i ? styles.selected : ""}`}
            onClick={() => setSelected(i)}
          >
            <span className={styles.letter}>{String.fromCharCode(65 + i)}</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>

      {feedback && <p className={styles.feedback}>{feedback}</p>}

      <div className={styles.actions}>
        <button className={styles.navBtn}>Previous</button>
        <button className={styles.checkBtn} onClick={handleCheckAnswer}>Check Answer</button>
      </div>
    </div>
  );
};

export default Quiz;
