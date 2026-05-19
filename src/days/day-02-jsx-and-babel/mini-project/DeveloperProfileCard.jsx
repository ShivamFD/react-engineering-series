import React from 'react';

function DeveloperProfileCard() {
  const name = "Shivam";
  const role = "Aspiring React Developer";
  const skills = ["JavaScript", "React", "Tailwind", "Git"];
  const isOpenToWork = true;

  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <h3>{role}</h3>
      
      <div>
        <strong>Skills:</strong>
        <p>{skills.join(" • ")}</p>
      </div>

      {isOpenToWork && <p>✅ Open to Work Opportunities</p>}

      <button onClick={() => alert("Profile Viewed! 🚀")}>
        Connect with Me
      </button>
    </div>
  );
}

export default DeveloperProfileCard;