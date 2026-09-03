import Button from './Button';

function HeroSection() {
  return (
    <div className="hero-section">
      <h1>Welcome to My Portfolio</h1>
      <h2>Building Modern Web Experiences with React</h2>
      <p>Shivam • Aspiring React Developer</p>
      
      <Button text="View Projects" onClick={() => alert("Projects Coming Soon! 🚀")} />
      <Button text="Hire Me" variant="secondary" onClick={() => alert("Thank you for your interest!")} />
    </div>
  );
}

export default HeroSection; 