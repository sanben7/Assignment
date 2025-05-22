import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Home, BookOpen, BarChart2, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';

function Navbar() {
    const location = useLocation();
    const { currentUser, userData } = useAuth();

    const getInitials = (name) => {
        if (!name) return '?';
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase();
    };

    const userInitials = getInitials(userData?.displayName || currentUser?.displayName);
    const isAdmin = userData?.role === 'admin';

    return (
        <header className={styles.navbar}>
            <div className={styles.logoSection}>
                <Link to={isAdmin ? "/admin/dashboard" : "/home"} className={styles.logoLink}>
                    <img src="/hubi-icon.png" alt="LearnHub Logo" className={styles.logo} />
                </Link>
                <span className={styles.brand}>LearnHub</span>
            </div>

            <nav className={styles.navLinks}>
                {isAdmin ? (
                    <>
                        <Link to="/admin/dashboard" className={location.pathname === '/admin/dashboard' ? styles.active : ''}>
                            <LayoutDashboard size={18} />
                            <span>Dashboard</span>
                        </Link>
                        <Link to="/admin/courses" className={location.pathname.includes('/admin/courses') ? styles.active : ''}>
                            <BookOpen size={18} />
                            <span>Courses</span>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/home" className={location.pathname === '/home' ? styles.active : ''}>
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
                    </>
                )}

                <Link to={isAdmin ? "/admin/profile" : "/profile"} className={styles.avatar}>
                    {userInitials}
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;
