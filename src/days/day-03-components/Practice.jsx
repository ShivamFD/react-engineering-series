import React from 'react';
import Navbar from './mini-project/components/Navbar';
import Footer from './mini-project/components/Footer';
import Button from './mini-project/components/Button';
import HeroSection from './mini-project/components/HeroSection';
import './day3-style.css';

function Day3Practice() {
  return (
    <div className="practice-container-day3">
      <h1>Day 03 - Components Deep Dive ⚛️</h1>

      <section className="task-day3">
        <h2>Task 1: Navbar & Footer Components</h2>
        <Navbar />
      </section>

      <section className="task-day3">
        <h2>Task 2: Reusable Button Component</h2>
        <Button text="Primary Button" onClick={() => alert("Primary Clicked!")} />
        <Button text="Secondary Button" variant="secondary" onClick={() => alert("Secondary Clicked!")} />
      </section>

      <section className="task-day3">
        <h2>Mini Challenge: Developer Portfolio Hero Section</h2>
        <HeroSection />
      </section>

      <Footer />

      <button 
        className="complete-btn" 
        onClick={() => alert("🎉 Congratulations! Day 3 Completed Successfully!")}
      >
        Mark Day 3 as Completed ✅
      </button>
    </div>
  );
}

export default Day3Practice;