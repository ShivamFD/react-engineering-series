import React from 'react';

function DeveloperCard({ developer }) {
  return (
    <div className="developer-card">
      <h3>{developer.name}</h3>
      <p><strong>Role:</strong> {developer.role}</p>
      
      <div>
        <strong>Skills:</strong>
        <ul style={{ textAlign: "left", marginTop: "10px" }}>
          {developer.skills.map((skill, index) => (
            <li key={index}>• {skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DeveloperCard;