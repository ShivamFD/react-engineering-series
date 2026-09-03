import React from 'react';
import ProfileCard from './mini-project/components/ProfileCard';
import Button from './mini-project/components/Button';
import CardWrapper from './mini-project/components/CardWrapper';
import './day4-style.css';

function Day4Practice() {
  const skills = ["React", "JavaScript", "Tailwind", "Git"];

  return (
    <div className="practice-container-day4">
      <h1>Day 04 - Props Deep Dive ⚛️</h1>

      <section className="task-day4">
        <h2>Task 1 & 3: User Profile Card with Props</h2>
        <ProfileCard 
          name="Shivam" 
          age={21} 
          role="React Developer" 
          skills={skills}
        />
      </section>

      <section className="task-day4">
        <h2>Task 2: Reusable Button Component</h2>
        <Button text="Primary Button" color="#3b82f6" onClick={() => alert("Primary Clicked")} />
        <Button text="Success Button" color="#22c55e" onClick={() => alert("Success Clicked")} />
      </section>

      <section className="task-day4">
        <h2>Mini Challenge: Developer Profile Showcase</h2>
        <div className="profile-showcase">
          <ProfileCard name="Shivam" age={21} role="Frontend Developer" skills={skills}>
            <p>Open to new opportunities 🚀</p>
          </ProfileCard>

          <CardWrapper title="Another Developer">
            <p>This content comes from children prop</p>
          </CardWrapper>
        </div>
      </section>

      <button 
        className="complete-btn" 
        onClick={() => alert("🎉 Day 4 Completed Successfully!")}
      >
        Mark Day 4 as Completed ✅
      </button>
    </div>
  );
}

export default Day4Practice;