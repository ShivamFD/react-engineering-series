  import React from 'react';
import './day1-style.css';

function Day1Practice() {
  const name = "Shivam";

  const handleButtonClick = () => {
    alert("🎉 Congratulations! You have completed Day 1 of React Engineering Series.");
  };

  return (
    <div className="practice-container">
      <h1>Day 01 - Practice Session</h1>

      {/* Task 1 */}
      <section className="task">
        <h2>Task 1: React vs Vanilla JavaScript</h2>
        <p><strong>React:</strong> Library for building UIs using components and Virtual DOM.</p>
        <p><strong>Vanilla JS:</strong> Pure JavaScript without any framework/library. We manually manipulate DOM.</p>
      </section>

      {/* Task 2 */}
      <section className="task">
        <h2>Task 2: What is SPA?</h2>
        <p>
          SPA (Single Page Application) is a website that works like a mobile app. 
          It loads only once and updates content dynamically without full page reload. 
          This gives better user experience and speed.
        </p>
      </section>

      {/* Task 3 */}
      <section className="task">
        <h2>Task 3: Simple JSX Example</h2>
        <div className="jsx-example">
          <h3>Hello {name} 👋</h3>
          <p>This text is rendered using JSX.</p>
        </div>
      </section>

      {/* Task 4 */}
      <section className="task">
        <h2>Task 4: What is Babel?</h2>
        <p>
          Babel is a JavaScript transpiler. It converts JSX and modern JavaScript into 
          browser-compatible JavaScript. React needs Babel because browsers cannot 
          understand JSX directly.
        </p>
      </section>

      {/* Mini Challenge */}
      <section className="task">
        <h2>Mini Challenge: React Introduction Card</h2>
        <IntroductionCard />
      </section>

      {/* Revision Questions */}
      <section className="revision">
        <h2>Revision Questions</h2>
        <ol>
          <li>Why was React created?</li>
          <li>What problem does Virtual DOM solve?</li>
          <li>Difference between SPA and MPA?</li>
          <li>What is JSX?</li>
          <li>Why do React apps feel fast?</li>
          <li>What is Declarative UI?</li>
        </ol>
      </section>

      <button onClick={handleButtonClick} className="complete-btn">
        Mark Day 1 as Completed ✅
      </button>
    </div>
  );
}

/* Mini Project Component */
function IntroductionCard() {
  return (
    <div className="intro-card">
      <h2>🚀 React Engineering Series</h2>
      <h3>Day 01: Introduction to React</h3>
      <p>Building strong foundations for modern frontend development in 2026.</p>
      <button onClick={() => alert("Welcome to the React Journey!")}>
        Start Learning
      </button>
    </div>
  );
}

export default Day1Practice;