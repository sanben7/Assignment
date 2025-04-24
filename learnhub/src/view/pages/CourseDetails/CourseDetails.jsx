import styles from './CourseDetails.module.css';
import { FaRegClock, FaCheck, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function CourseDetails() {
  const navigate = useNavigate();

  const lessons = [
    { title: 'Introduction to Limits', duration: '15 min', completed: true },
    { title: 'Continuity and Differentiability', duration: '20 min', completed: true },
    { title: 'Introduction to Calculus', duration: '25 min' },
    { title: 'Derivatives and Rules', duration: '30 min' },
    { title: 'Applications of Derivatives', duration: '35 min' },
    { title: 'Introduction to Integration', duration: '25 min' },
    { title: 'Techniques of Integration', duration: '30 min' },
    { title: 'Applications of Integration', duration: '35 min' },
    { title: 'Improper Integrals', duration: '20 min' },
    { title: 'Differential Equations', duration: '25 min' },
    { title: 'Sequences and Series', duration: '30 min' },
    { title: 'Final Review', duration: '40 min' },
  ];

  const completedCount = lessons.filter(lesson => lesson.completed).length;

  return (
    <div className={styles.wrapper}>
      <div className={styles.pageTitleWrapper}>
        <button className={styles.backButton} onClick={() => navigate('/courses')}>
          <FaArrowLeft /> Back to Courses
        </button>
        <h2 className={styles.pageTitle}>Course Details</h2>
      </div>

      <span className={styles.category}>Mathematics</span>
      <h3 className={styles.title}>Calculus 101</h3>
      <div className={styles.instructor}>👤 Prof. Jane Smith</div>
      <p className={styles.description}>
        Learn the fundamentals of calculus, from limits and derivatives to integrals and applications.
        This comprehensive course covers all the essential topics needed to build a strong foundation in calculus.
      </p>

      <div className={styles.progressBox}>
        <div className={styles.progressHeader}>
          <span>Course Progress</span>
          <span>{completedCount} of {lessons.length} lessons completed</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${(completedCount / lessons.length) * 100}%` }}></div>
        </div>
        <button
          className={styles.resumeBtn}
          onClick={() => navigate(`/lesson/${completedCount + 1}`)}
        >
          Resume Course →
        </button>
      </div>

      <h4 className={styles.contentTitle}>Course Content</h4>
      <div className={styles.lessonList}>
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className={styles.lessonItem}
            onClick={() => navigate(`/lesson/${index + 1}`)}
          >
            <div className={styles.lessonLeft}>
              {lesson.completed ? (
                <FaCheck className={styles.lessonCheck} />
              ) : (
                <span className={styles.lessonNumber}>{index + 1}</span>
              )}
              <span className={styles.lessonTitle}>{lesson.title}</span>
            </div>
            <div className={styles.lessonRight}>
              <FaRegClock /> <span>{lesson.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
