import React, { useState } from 'react';
import InteractiveDeveloperCard from './mini-project/InteractiveDeveloperCard';
import '../../src/days/day-05/day5-style.css';

function Day5Practice() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    alert("Button Clicked! 🎉");
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
    console.log("Typed:", e.target.value);
  };

  return (
    <div className="practice-container-day5">
      <h1>Day 05 - React Events Deep Dive ⚛️</h1>

      <section className="task-day5">
        <h2>Task 1: Simple Click Event</h2>
        <button onClick={handleClick}>Click Me</button>
      </section>

      <section className="task-day5">
        <h2>Task 2: Input Event</h2>
        <input 
          type="text" 
          placeholder="Type here..." 
          onChange={handleInput}
        />
        <p>Typed: {inputValue}</p>
      </section>

      <section className="task-day5">
        <h2>Task 3: Counter</h2>
        <p>Count: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </section>

      <section className="task-day5">
        <h2>Mini Challenge: Interactive Developer Card</h2>
        <InteractiveDeveloperCard />
      </section>

      <button 
        className="complete-btn" 
        onClick={() => alert("🎉 Day 5 Completed Successfully!")}
      >
        Mark Day 5 as Completed ✅
      </button>
    </div>
  );
}

export default Day5Practice;