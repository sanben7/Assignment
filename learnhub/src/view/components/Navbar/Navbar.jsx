import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Home, BookOpen, BarChart2 } from 'lucide-react';

function Navbar() {
    const location = useLocation();

    return (
        <header className={styles.navbar}>
            <div className={styles.logoSection}>
                <Link to="/" className={styles.logoLink}>
                    <img src="/hubi-icon.png" alt="Hubi" className={styles.logo} />
                </Link>
                <span className={styles.brand}>LearnHub</span>
            </div>

            <nav className={styles.navLinks}>
                <Link to="/" className={location.pathname === '/' ? styles.active : ''}>
                    <Home size={18} />
                    <span>Home</span>
                </Link>
                <Link to="/courses" className={location.pathname.includes('/courses') ? styles.active : ''}>
                    <BookOpen size={18} />
                    <span>Courses</span>
                </Link>
                <Link to="/ranking" className={location.pathname === '/ranking' ? styles.active : ''}>
                    <BarChart2 size={18} />
                    <span>Rankings</span>
                </Link>

                <Link to="/profile" className={styles.avatar}>
                    JD
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;
