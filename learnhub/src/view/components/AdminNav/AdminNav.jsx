import { Link, useLocation } from 'react-router-dom';
import styles from './AdminNav.module.css';
import { LayoutDashboard, BookOpen } from 'lucide-react';

function AdminNav() {
    const location = useLocation();

    return (
        <header className={styles.navbar}>
            <div className={styles.logoSection}>
                <Link to="/dashboard" className={styles.logoLink}>
                    <img src="/hubi-icon.png" alt="Hubi" className={styles.logo} />
                </Link>
                <span className={styles.brand}>LearnHub Admin</span>
            </div>

            <nav className={styles.navLinks}>
                <Link
                    to="/dashboard"
                    className={location.pathname === '/dashboard' ? styles.active : ''}
                >
                    <LayoutDashboard size={18} />
                    <span>Dashboard</span>
                </Link>
                <Link
                    to="/admin/courses"
                    className={location.pathname.includes('/admin/courses') ? styles.active : ''}
                >
                    <BookOpen size={18} />
                    <span>Courses</span>
                </Link>
                <Link to="/profile" className={styles.avatar}>
                    admin
                </Link>
            </nav>
        </header>
    );
}

export default AdminNav;
