import styles from './Courses.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories = ['All Courses', 'Mathematics', 'Computer Science', 'Humanities', 'Science', 'Business'];

  const courses = [
    { id: 1, title: 'Calculus 101', lessons: 12, category: 'Mathematics', color: '#EDE9FE' },
    { id: 2, title: 'Python Programming', lessons: 8, category: 'Computer Science', color: '#DCFCE7' },
    { id: 3, title: 'Art History', lessons: 10, category: 'Humanities', color: '#FEF3C7' },
    { id: 4, title: 'Chemistry Fundamentals', lessons: 14, category: 'Science', color: '#EDE9FE' },
    { id: 5, title: 'Introduction to Economics', lessons: 9, category: 'Business', color: '#DCFCE7' },
    { id: 6, title: 'Linear Algebra', lessons: 11, category: 'Mathematics', color: '#FEF3C7' },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All Courses' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Explore Courses</h2>

      <input
        type="text"
        placeholder="Search courses..."
        className={styles.search}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className={styles.categories}>
        {categories.map(cat => (
          <button
            key={cat}
            className={selectedCategory === cat ? styles.active : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.courseGrid}>
        {filteredCourses.map((course, i) => (
          <div
            key={i}
            className={styles.courseCard}
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            <div className={styles.courseImage} style={{ backgroundColor: course.color }}></div>
            <div className={styles.courseInfo}>
              <div className={styles.courseCategory}>{course.category}</div>
              <div className={styles.courseTitle}>{course.title}</div>
              <div className={styles.courseLessons}>{course.lessons} lessons</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
