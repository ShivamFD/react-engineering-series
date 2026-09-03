import React from 'react';
import DeveloperCard from './DeveloperCard';

function DeveloperDirectory() {
  const developers = [
    { id: 1, name: "Shivam", role: "React Developer", skills: ["React", "Tailwind", "Next.js"] },
    { id: 2, name: "Rahul", role: "Frontend Engineer", skills: ["JavaScript", "TypeScript", "Redux"] },
    { id: 3, name: "Priya", role: "UI Engineer", skills: ["Figma", "React", "CSS"] }
  ];

  return (
    <div>
      <h2>Developer Directory</h2>
      
      {developers.length > 0 ? (
        <div className="developer-directory">
          {developers.map(dev => (
            <DeveloperCard key={dev.id} developer={dev} />
          ))}
        </div>
      ) : (
        <p>No Developers Found</p>
      )}
    </div>
  );
}

export default DeveloperDirectory;