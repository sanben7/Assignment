import styles from './Profile.module.css';
import { LuBookOpen, LuAward, LuClock4, LuLogOut, LuSettings, LuExternalLink } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

export default function Profile() {
  const navigate = useNavigate();
  const { currentUser, userData, logout } = useAuth();

  const stats = [
    { label: 'Courses In Progress', value: 8, icon: <LuBookOpen />, color: '#C4B5FD' },
    { label: 'Completed Courses', value: 12, icon: <LuAward />, color: '#BBF7D0' },
    { label: 'Hours Studied', value: 48, icon: <LuClock4 />, color: '#FDE68A' },
    { label: 'Achievements', value: 15, icon: <LuAward />, color: '#E5E7EB' },
  ];

  const actions = [
    { label: 'Settings', icon: <LuSettings />, link: '/settings' },
    { label: 'Help & Support', icon: <LuExternalLink />, link: '/support' },
    { label: 'Logout', icon: <LuLogOut />, action: logout, danger: true },
  ];

  const getInitials = (name) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className={styles.profileWrapper}>
      <h2 className={styles.title}>Profile</h2>

      <div className={styles.userInfo}>
        <div className={styles.avatar}>
          {getInitials(userData?.displayName || currentUser?.displayName)}
        </div>
        <div className={styles.name}>
          {userData?.displayName || currentUser?.displayName || 'User'}
        </div>
        <div className={styles.email}>{currentUser?.email}</div>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((item, i) => (
          <div className={styles.statCard} key={i}>
            <div
              className={styles.iconCircle}
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>
            <div className={styles.statValue}>{item.value}</div>
            <div className={styles.statLabel}>{item.label}</div>
          </div>
        ))}
      </div>

      <h3 className={styles.sectionTitle}>Account</h3>
      <div className={styles.actionsList}>
        {actions.map((action, i) => (
          <div
            key={i}
            className={`${styles.actionItem} ${action.danger ? styles.danger : ''}`}
            onClick={() => {
              if (action.link) navigate(action.link);
              else if (action.action) action.action();
            }}
          >
            <div className={styles.actionLeft}>
              {action.icon}
              <span>{action.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}