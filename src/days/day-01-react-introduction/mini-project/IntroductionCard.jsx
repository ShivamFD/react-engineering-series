import React from 'react';
import './day1-style.css';
function IntroductionCard() {
  const handleClick = () => {
    alert("🚀 Welcome to React Engineering Series 2026!\nYou have taken the first step towards becoming a strong React Developer.");
  };

  return (
    <div className="intro-card">
      <h2 className='head-h2'>React Engineering Series</h2>
      <h3>Day 01: Introduction to React</h3>
      <p>
        Building modern, fast, and scalable web applications with React in 2026.
      </p>
      <button onClick={handleClick}>
        Start My React Journey
      </button>
    </div>
  );
}

export default IntroductionCard;