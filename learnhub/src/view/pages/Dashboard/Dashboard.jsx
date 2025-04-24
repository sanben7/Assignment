import React from "react";
import styles from "./Dashboard.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", users: 400 },
  { name: "Tue", users: 300 },
  { name: "Wed", users: 450 },
  { name: "Thu", users: 290 },
  { name: "Fri", users: 600 },
  { name: "Sat", users: 320 },
  { name: "Sun", users: 460 },
];

const stats = [
  { title: "Total Users", value: "1,247", change: "+12%", icon: "👤" },
  { title: "Active Courses", value: "24", change: "+3", icon: "📘" },
  { title: "Quiz Completion", value: "68%", change: "+5%", icon: "📊" },
];

const courses = [
  { name: "Introduction to Computer Science", enrolled: 247, completion: 68, color: "#f9b017" },
  { name: "Data Structures and Algorithms", enrolled: 183, completion: 42, color: "#f9b017" },
  { name: "Web Development Fundamentals", enrolled: 315, completion: 79, color: "#4caf50" },
  { name: "Machine Learning Basics", enrolled: 156, completion: 35, color: "#f44336" },
];

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backBtn}>← Admin Dashboard</button>
        <button className={styles.exportBtn}>⇄ Export Report</button>
      </div>

      <div className={styles.statsRow}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statCard}>
            <div className={styles.statIcon}>{s.icon}</div>
            <div>
              <h4 className={styles.statTitle}>{s.title}</h4>
              <p className={styles.statValue}>{s.value}</p>
              <p className={styles.statChange}>{s.change} from last month</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.chartCard}>
        <h4 className={styles.chartTitle}>User Activity (Last 7 Days)</h4>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="users" stroke="#8445fe" fill="#e5d9ff" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.active}`}>Manage Courses</button>
        <button className={styles.tab}>Recent Users</button>
      </div>

      <div className={styles.courseSection}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Course Overview</h3>
          <button className={styles.addBtn}>+ Add Course</button>
        </div>
        <table className={styles.courseTable}>
          <thead>
            <tr>
              <th>Featured</th>
              <th>Course Name</th>
              <th>Enrolled</th>
              <th>Completion Rate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c, i) => (
              <tr key={i}>
                <td>
                  <span className={styles.radio}></span>
                </td>
                <td>{c.name}</td>
                <td>{c.enrolled} students</td>
                <td>
                  <div className={styles.progressWrapper}>
                    <div
                      className={styles.progressBar}
                      style={{ width: `${c.completion}%`, backgroundColor: c.color }}
                    ></div>
                    <span>{c.completion}%</span>
                  </div>
                </td>
                <td>
                  <button className={styles.editBtn}>Edit</button>
                  <button className={styles.deleteBtn}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
