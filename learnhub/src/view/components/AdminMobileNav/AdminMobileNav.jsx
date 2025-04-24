import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, User } from 'lucide-react';
import styles from './AdminMobileNav.module.css';

function AdminMobileNav() {
    const location = useLocation();

    const items = [
        { to: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
        { to: '/admin/courses', icon: <BookOpen size={20} />, label: 'Courses' },
        { to: '/profile', icon: <User size={20} />, label: 'admin' },
    ];

    return (
        <nav className={styles.navbar}>
            {items.map(item => (
                <Link
                    key={item.to}
                    to={item.to}
                    className={`${styles.navItem} ${location.pathname === item.to ? styles.active : ''}`}
                >
                    {item.icon}
                    <span>{item.label}</span>
                </Link>
            ))}
        </nav>
    );
}

export default AdminMobileNav;
