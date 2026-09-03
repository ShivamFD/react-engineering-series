import React, { useState } from 'react';
import DeveloperDashboard from './mini-project/DeveloperDashboard';
import './day6-style.css';

function Day6Practice() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isOn, setIsOn] = useState(false);
  const [skills] = useState(["React", "JavaScript", "Tailwind"]);

  return (
    <div className="practice-container-day6">
      <h1>Day 06 - State & useState Deep Dive ⚛️</h1>

      <section className="task-day6">
        <h2>Task 1: Counter App</h2>
        <p>Count: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </section>

      <section className="task-day6">
        <h2>Task 2: Live Input Preview</h2>
        <input 
          type="text" 
          placeholder="Type here..." 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>Preview: <strong>{text || "Nothing typed yet"}</strong></p>
      </section>

      <section className="task-day6">
        <h2>Task 3: Toggle Button</h2>
        <button onClick={() => setIsOn(!isOn)}>
          {isOn ? "ON ✅" : "OFF ❌"}
        </button>
      </section>

      <section className="task-day6">
        <h2>Mini Challenge: Developer Dashboard</h2>
        <DeveloperDashboard />
      </section>

      <button 
        className="complete-btn" 
        onClick={() => alert("🎉 Day 6 Completed Successfully!")}
      >
        Mark Day 6 as Completed ✅
      </button>
    </div>
  );
}

export default Day6Practice;