import { useNavigate } from 'react-router-dom';
import styles from './AdminCourseEdit.module.css';

export default function AdminCourseEdit() {
    const navigate = useNavigate();

    const lessons = [
        { id: '1', title: 'React Fundamentals' },
        { id: '2', title: 'State and Props' },
        { id: '3', title: 'Hooks in Depth' },
        { id: '4', title: 'Building a Complete App' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1>Course Management</h1>
                    <p>Edit details and manage lessons for course ID: <code>:courseId</code></p>
                </div>
                <div className={styles.actions}>
                    <button className={styles.preview}>👁️ Preview</button>
                    <button className={styles.save}>💾 Save Changes</button>
                    <button className={styles.delete}>🗑️ Delete Course</button>
                </div>
            </div>

            <div className={styles.section}>
                <h2>Course Details</h2>
                <input placeholder="Course Title" defaultValue="Introduction to React" />
                <input placeholder="Category" defaultValue="Programming" />
                <textarea defaultValue="Learn the fundamentals of React development including hooks, state management, and component architecture." />
            </div>

            <div className={styles.section}>
                <h2>Course Analytics</h2>
                <div className={styles.analytics}>
                    <div>
                        <p>Total Enrollments</p>
                        <strong>256</strong>
                    </div>
                    <div>
                        <p>Average Progress</p>
                        <strong>68%</strong>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h2>Lesson Management</h2>
                {lessons.map((lesson, index) => (
                    <div key={lesson.id} className={styles.lessonCard}>
                        <div>
                            <strong>Lesson {index + 1}</strong>
                            <p>{lesson.title}</p>
                        </div>
                        <div className={styles.lessonActions}>
                            <button>⬆</button>
                            <button>⬇</button>
                            <button onClick={() => navigate(`/admin/lesson/id`)}>👁️ Edit Lesson</button>
                            <button className={styles.remove}>🗑️ Remove</button>
                        </div>
                    </div>
                ))}
                <button className={styles.addNew}>+ Add New Lesson</button>
            </div>
        </div>
    );
}
