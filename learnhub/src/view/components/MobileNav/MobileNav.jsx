import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, BarChart2, User } from 'lucide-react';
import styles from './MobileNav.module.css';

function MobileNav() {
  const location = useLocation();

  const items = [
    { to: '/', icon: <Home size={20} />, label: 'Home' },
    { to: '/courses', icon: <BookOpen size={20} />, label: 'Courses' },
    { to: '/ranking', icon: <BarChart2 size={20} />, label: 'Rankings' },
    { to: '/profile', icon: <User size={20} />, label: 'Profile' },
  ];

  return (
    <nav className={styles.navbar}>
      {items.map(item => (
        <Link
          key={item.to}
          to={item.to}
          className={`${styles.navItem} ${location.pathname === item.to ? styles.active : ''
            }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

export default MobileNav;
