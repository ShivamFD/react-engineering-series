import React from 'react';
import DeveloperDirectory from './mini-project/DeveloperDirectory';
import './day-09-style.css';

function Day9Practice() {
  const skills = ["React", "Node.js", "MongoDB", "Tailwind"];
  const users = [
    { id: 1, name: "Shivam" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Neha" }
  ];

  return (
    <div className="practice-container-day9">
      <h1>Day 09 - Lists, map() & Keys Deep Dive ⚛️</h1>

      <section className="task-day9">
        <h2>Task 1: Simple List with map()</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="task-day9">
        <h2>Task 2: Users with Proper Keys</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </section>

      <section className="task-day9">
        <h2>Mini Challenge: Developer Directory</h2>
        <DeveloperDirectory />
      </section>

      <button 
        className="complete-btn" 
        onClick={() => alert("🎉 Day 9 Completed Successfully!")}
        style={{background: "#6366f1", color: "white", padding: "16px 40px", border: "none", borderRadius: "50px", marginTop: "30px"}}
      >
        Mark Day 9 as Completed ✅
      </button>
    </div>
  );
}

export default Day9Practice;
