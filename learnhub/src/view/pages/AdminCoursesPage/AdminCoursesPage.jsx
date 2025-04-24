import { useNavigate } from 'react-router-dom';
import styles from './AdminCoursesPage.module.css';

const courses = [
    {
        id: 'calculus-101',
        title: 'Calculus 101',
        lessons: 12,
        completionRate: '68%',
    },
    {
        id: 'python-basics',
        title: 'Python Programming',
        lessons: 8,
        completionRate: '42%',
    },
    {
        id: 'art-history',
        title: 'Art History',
        lessons: 10,
        completionRate: '51%',
    },
];

export default function AdminCoursesPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Manage Your Courses</h1>

            <div className={styles.courseGrid}>
                {courses.map((course) => (
                    <div key={course.id} className={styles.card}>
                        <h3>{course.title}</h3>
                        <p>{course.lessons} Lessons</p>
                        <p>Completion: {course.completionRate}</p>
                        <button onClick={() => navigate(`/admin/course/id`)}>
                            Edit Course
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
