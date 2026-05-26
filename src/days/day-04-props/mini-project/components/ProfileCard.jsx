import Button from './Button';

function ProfileCard({ name, age, role, skills = [], children }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Role:</strong> {role}</p>
      
      <div>
        <strong>Skills:</strong>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {children}

      <Button 
        text="Connect" 
        onClick={() => alert(`Connected with ${name}`)} 
      />
    </div>
  );
}

export default ProfileCard;