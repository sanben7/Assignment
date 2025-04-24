import styles from './Settings.module.css';
import { useState } from 'react';
import { LuBell, LuGlobe, LuUser } from 'react-icons/lu';

export default function Settings() {
  const [formData, setFormData] = useState({
    displayName: 'Alex Johnson',
    bio: 'Computer Science student at State University',
    notifications: true,
    reminders: true,
    language: 'English',
    theme: 'Light'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleToggle = (key) => {
    setFormData({ ...formData, [key]: !formData[key] });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <h3><LuUser /> Profile Settings</h3>
        <label>Display Name</label>
        <input
          type="text"
          name="displayName"
          value={formData.displayName}
          onChange={handleChange}
        />
        <label>Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        />
        <button className={styles.saveBtn}>Save Profile</button>
      </div>

      <div className={styles.section}>
        <h3><LuBell /> Notification Settings</h3>
        <div className={styles.toggleRow}>
          <div>
            <strong>Push Notifications</strong>
            <p>Receive notifications about your learning progress</p>
          </div>
          <label className={styles.switch}>
            <input type="checkbox" checked={formData.notifications} onChange={() => handleToggle('notifications')} />
            <span className={styles.slider}></span>
          </label>
        </div>
        <div className={styles.toggleRow}>
          <div>
            <strong>Daily Reminders</strong>
            <p>Get daily reminders to maintain your learning streak</p>
          </div>
          <label className={styles.switch}>
            <input type="checkbox" checked={formData.reminders} onChange={() => handleToggle('reminders')} />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>

      <div className={styles.section}>
        <h3><LuGlobe /> App Settings</h3>
        <div className={styles.subsection}>
          <strong>Language</strong>
          <div className={styles.options}>
            {['English', 'Spanish', 'French'].map(lang => (
              <button
                key={lang}
                className={formData.language === lang ? styles.activeOption : ''}
                onClick={() => setFormData({ ...formData, language: lang })}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.subsection}>
          <strong>Theme</strong>
          <div className={styles.options}>
            {['Light', 'Dark', 'System'].map(theme => (
              <button
                key={theme}
                className={formData.theme === theme ? styles.activeOption : ''}
                onClick={() => setFormData({ ...formData, theme: theme })}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
