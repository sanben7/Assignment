import styles from './LessonPage.module.css';
import { FaArrowLeft, FaBookOpen, FaRegClock, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Lesson() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.videoContainer}>
        <button className={styles.backButton} onClick={() => navigate('/courses/id')}>
          <FaArrowLeft />
        </button>
        <div className={styles.videoBox}>
          <video
            className={styles.videoPlayer}
            controls
            src="/videos/lesson_id.mp4" // ודא שהקובץ קיים בתיקיית public/videos
          >
            Your browser does not support the video tag.
          </video>
        </div>

      </div>

      <div className={styles.lessonInfo}>
        <div className={styles.courseMeta}>
          <div className={styles.courseName}><FaBookOpen /> Calculus 101</div>
          <div className={styles.lessonStats}>
            <span><FaCheckCircle /> 2 completed</span>
            <span>Lesson 3 of 12</span>
            <span>10 remaining</span>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: '16%' }}></div>
          </div>
        </div>

        <div className={styles.lessonContent}>
          <h2>Introduction to Calculus</h2>
          <div className={styles.meta}><FaRegClock /> 15 min read</div>

          <blockquote className={styles.summary}>
            This introductory lesson covers the basic concepts of calculus including limits, derivatives, and integrals.
          </blockquote>

          <p>Calculus is a branch of mathematics that focuses on studying rates of change and accumulation. It provides a framework for modeling systems where there is change, and for predicting future behavior based on current conditions.</p>
          <p>There are two main branches of calculus: differential calculus and integral calculus. Differential calculus is concerned with rates of change and slopes of curves, while integral calculus focuses on accumulation of quantities and areas under or between curves.</p>
          <p>One of the fundamental concepts in calculus is the limit. A limit is the value that a function approaches as the input approaches some value. Limits are essential for defining derivatives and integrals.</p>
          <p>The derivative of a function represents the rate at which the function is changing at a given point. Geometrically, it can be interpreted as the slope of the tangent line to the function's graph at that point.</p>
          <p>The integral of a function, on the other hand, represents the accumulation of quantities. It can be interpreted geometrically as the area under the curve of the function.</p>

          <button className={styles.quizButton} onClick={() => navigate('/quiz/id')}>
            ❓ Test Your Knowledge
          </button>
        </div>
      </div>
    </div>
  );
}
