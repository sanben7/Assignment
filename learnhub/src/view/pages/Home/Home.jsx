import styles from './Home.module.css';
import { useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { PiPlayCircleLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Home loaded');
  }, []);

  const coursesInProgress = [
    {
      category: 'Mathematics',
      name: 'Calculus 101',
      progress: 65,
      color: '#8B5CF6',
      link: '/courses/id',
    },
    {
      category: 'Computer Science',
      name: 'Python Programming',
      progress: 30,
      color: '#22C55E',
      link: '/courses/id',
    },
    {
      category: 'Humanities',
      name: 'Art History',
      progress: 15,
      color: '#F97316',
      link: '/courses/id',
    },
  ];

  const continueLearning = [
    {
      title: 'Introduction to Calculus',
      course: 'Calculus 101',
      time: '15 min',
      color: '#EDE9FE',
      link: '/lesson/id',
    },
    {
      title: 'Python Data Structures',
      course: 'Python Programming',
      time: '12 min',
      color: '#DCFCE7',
      link: '/lesson/id',
    },
    {
      title: 'Renaissance Art Overview',
      course: 'Art History',
      time: '20 min',
      color: '#FEF3C7',
      link: '/lesson/id',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Welcome back!</h2>
        <p>Continue your learning journey</p>
      </div>

      <div className={styles.streakCard}>
        <div className={styles.streakText}>
          <span className={styles.streakTitle}>Daily Streak</span>
          <span className={styles.streakSub}>Keep learning to maintain your streak!</span>
        </div>
        <div className={styles.streakDays}>
          {['S', 'M', 'T', 'W', 'T'].map((day, i) => (
            <span key={i} className={`${styles.day} ${i >= 2 ? styles.active : ''}`}>{day}</span>
          ))}
          <span className={styles.streakCount}>3</span>

        </div>
      </div>

      <h3 className={styles.sectionTitle}>In Progress</h3>
      <div className={styles.coursesGrid}>
        {coursesInProgress.map((course, idx) => (
          <div
            key={idx}
            className={styles.courseCard}
            onClick={() => navigate(course.link)}
          >
            <span className={styles.category} style={{ backgroundColor: `${course.color}20`, color: course.color }}>{course.category}</span>
            <div className={styles.courseInfo}>
              <span className={styles.courseName}>{course.name}</span>
              <span className={styles.coursePercent}>{course.progress}% complete</span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${course.progress}%`, backgroundColor: course.color }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <h3 className={styles.sectionTitle}>Continue Learning</h3>
      <div className={styles.learningList}>
        {continueLearning.map((item, idx) => (
          <div
            key={idx}
            className={styles.learningItem}
            style={{ backgroundColor: item.color }}
            onClick={() => navigate(item.link)}
          >
            <div className={styles.learningLeft}>
              <div className={styles.playIcon}><PiPlayCircleLight /></div>
              <div className={styles.learningText}>
                <div className={styles.learningTitle}>{item.title}</div>
                <div className={styles.learningCourse}>{item.course}</div>
              </div>
            </div>
            <div className={styles.learningTime}><FaRegClock /> {item.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}