// AdminLessonPage.jsx
import { useNavigate } from 'react-router-dom';
import styles from './AdminLessonPage.module.css';

export default function AdminLessonPage() {
    const navigate = useNavigate();

    const questions = [
        {
            id: 1,
            text: 'What is React?',
            options: [
                'A JavaScript framework',
                'A JavaScript library for building user interfaces',
                'A programming language',
                'A database system'
            ],
            correctIndex: 1
        },
        {
            id: 2,
            text: 'Which company maintains React?',
            options: ['Google', 'Microsoft', 'Facebook/Meta', 'Amazon'],
            correctIndex: 2
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1>Lesson & Quiz Management</h1>
                    <p>Edit lesson content and quiz questions for lesson ID: <code>:lessonid</code></p>
                </div>
                <div className={styles.actions}>
                    <button onClick={() => navigate(-1)}>← Back to Course</button>
                    <button className={styles.preview}>👁️ Preview</button>
                    <button className={styles.save}>💾 Save Changes</button>
                </div>
            </div>

            <div className={styles.section}>
                <h2>Lesson Content</h2>
                <input placeholder="Lesson Title" defaultValue="React Fundamentals" />
                <input placeholder="Video URL" defaultValue="https://www.youtube.com/embed/dQw4w9WgXcQ" />
                <textarea defaultValue="React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM when data changes." />
            </div>

            <div className={styles.section}>
                <h2>Quiz Settings</h2>
                <div className={styles.quizSettings}>
                    <input placeholder="Time Limit (minutes)" defaultValue="10" />
                    <input placeholder="Passing Score (%)" defaultValue="70" />
                </div>
            </div>

            <div className={styles.section}>
                <h2>Quiz Questions</h2>
                {questions.map((q) => (
                    <div key={q.id} className={styles.questionBox}>
                        <input defaultValue={q.text} className={styles.questionInput} />
                        <div className={styles.options}>
                            {q.options.map((opt, i) => (
                                <label key={i}>
                                    <input type="radio" name={`q-${q.id}`} defaultChecked={i === q.correctIndex} />
                                    {opt}
                                </label>
                            ))}
                        </div>
                        <div className={styles.qActions}>
                            <button>✏️</button>
                            <button className={styles.delete}>🗑️</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.section}>
                <h2>Add New Question</h2>
                <input placeholder="Enter question text" />
                <div className={styles.options}>
                    <label><input type="radio" name="newQ" /> Option A</label>
                    <label><input type="radio" name="newQ" /> Option B</label>
                    <label><input type="radio" name="newQ" /> Option C</label>
                    <label><input type="radio" name="newQ" /> Option D</label>
                </div>
                <button className={styles.add}>Add Question</button>
            </div>
        </div>
    );
}
