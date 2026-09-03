import Layout from "../components/Layout";
import DeveloperCard from "../components/DeveloperCard";

function DeveloperDashboard() {
  return (
    <Layout>
      <DeveloperCard 
        name="Shivam" 
        role="Frontend Developer" 
        skills={["React", "Tailwind", "Next.js"]} 
      />
      <DeveloperCard 
        name="Rahul" 
        role="Backend Developer" 
        skills={["Node.js", "Express", "MongoDB"]} 
      />
    </Layout>
  );
}

export default DeveloperDashboard;