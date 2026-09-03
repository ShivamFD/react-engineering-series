import React, { useState } from 'react';
import DeveloperDashboard from './mini-project/DeveloperDashboard';
import './day-08-style.css';

function Day8Practice() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="practice-container-day8">
      <h1>Day 08 - Conditional Rendering Deep Dive ⚛️</h1>

      <section className="task-day8">
        <h2>Task 1: Login / Logout</h2>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
        {isLoggedIn ? <p>Welcome to Dashboard ✅</p> : <p>Please Login</p>}
      </section>

      <section className="task-day8">
        <h2>Task 2: Online Status (Ternary)</h2>
        <p>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
        <button onClick={() => setIsOnline(!isOnline)}>Toggle Status</button>
      </section>

      <section className="task-day8">
        <h2>Task 3: Admin Button (&&)</h2>
        {isAdmin && <button>Admin Panel Access</button>}
      </section>

      <section className="task-day8">
        <h2>Mini Challenge: Developer Dashboard</h2>
        <DeveloperDashboard />
      </section>

      <button 
        className="complete-btn" 
        onClick={() => alert("🎉 Day 8 Completed Successfully!")}
        style={{background: "#10b981", color: "white", padding: "16px 40px", border: "none", borderRadius: "50px", marginTop: "30px"}}
      >
        Mark Day 8 as Completed ✅
      </button>
    </div>
  );
}

export default Day8Practice;