import Card from "./Card";

function DeveloperCard({ name, role, skills }) {
  return (
    <Card>
      <h2>{name}</h2>
      <p><strong>{role}</strong></p>
      <h4>Skills</h4>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
      <button>View Profile</button>
    </Card>
  );
}

export default DeveloperCard;