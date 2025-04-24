import React, { useState } from "react";
import styles from "./Ranking.module.css";

const topThree = [
  { name: "Taylor Swift", score: 780, medal: "🥈", position: 2 },
  { name: "Alex Johnson", score: 850, medal: "🏆", position: 1 },
  { name: "Jordan Smith", score: 720, medal: "🥉", position: 3 }
];

const others = [
  { name: "Morgan Stanley", score: 650 },
  { name: "Jamie Rodriguez", score: 610, isYou: true },
  { name: "Casey Williams", score: 590 },
  { name: "Riley Thompson", score: 560 },
  { name: "Quinn Martinez", score: 530 }
];

const Ranking = () => {
  const [activeTab, setActiveTab] = useState("week");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Leaderboard</h2>
      <p className={styles.subtitle}>See how you rank among other learners</p>

      <div className={styles.tabsWrapper}>
        <button
          className={`${styles.tab} ${activeTab === "week" ? styles.activeTab : ""
            }`}
          onClick={() => setActiveTab("week")}
        >
          This Week
        </button>
        <button
          className={`${styles.tab} ${activeTab === "all" ? styles.activeTab : ""
            }`}
          onClick={() => setActiveTab("all")}
        >
          All Time
        </button>
      </div>

      <div className={styles.podium}>
        {topThree.map((user) => (
          <div
            key={user.position}
            className={`${styles.podiumItem} ${styles[`place${user.position}`]}`}
          >
            <div className={styles.avatar}>{user.name[0]}</div>
            <p className={styles.name}>{user.name}</p>
            <p className={styles.score}>
              {user.medal} <strong>{user.score}</strong>
            </p>
            <div className={styles.bar}>#{user.position}</div>
          </div>
        ))}
      </div>

      <ul className={styles.list}>
        {others.map((user, i) => (
          <li
            key={i}
            className={`${styles.row} ${user.isYou ? styles.activeRow : ""}`}
          >
            <span className={styles.rank}>{i + 4}</span>
            <div className={styles.nameCell}>
              <div className={styles.avatar}>{user.name[0]}</div>
              <span className={styles.name}>{user.name}</span>
              {user.isYou && <span className={styles.youBadge}>You</span>}
            </div>
            <span className={styles.score}>{user.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ranking;
