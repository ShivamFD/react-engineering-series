import React from 'react';
import DeveloperProfileCard from './mini-project/DeveloperProfileCard';
// import '../../src/days/day-02/day2-style.css';
import './day2-style.css';


function Day2Practice() {
  const name = "Shivam";
  const age = 21;
  const profession = "React Developer";

  return (
    <div className="practice-container-day2">
      <h1>Day 02 - JSX Deep Dive</h1>

      <section className="task-day2">
        <h2>Task 1: JSX to React.createElement</h2>
        <p><code>&lt;h1&gt;Hello World&lt;/h1&gt;</code> becomes → <code>React.createElement('h1', null, 'Hello World')</code></p>
      </section>

      <section className="task-day2">
        <h2>Task 2: JSX with Variables & Expressions</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Profession: {profession}</p>
        <p>Next Year Age: {age + 1}</p>
      </section>

      <section className="task-day2">
        <h2>Task 3: Ternary Operator</h2>
        <p>{age >= 18 ? "You are eligible to work" : "You are underage"}</p>
      </section>

      <section className="task-day2">
        <h2>Mini Challenge: Developer Profile Card</h2>
        <DeveloperProfileCard />
      </section>

      <button className="complete-btn" onClick={() => alert("🎉 Day 2 Completed Successfully!")}>
        Mark Day 2 as Completed ✅
      </button>
    </div>
  );
}

export default Day2Practice;