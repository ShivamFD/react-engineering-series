import { useState } from "react";

function DeveloperRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    experience: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Name and Email are required!");
      return;
    }

    console.log("Registration Data:", formData);
    alert("Registration Successful 🚀");

    // Reset form
    setFormData({
      name: "",
      email: "",
      skills: "",
      experience: ""
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="skills"
        placeholder="Skills (comma separated)"
        value={formData.skills}
        onChange={handleChange}
      />
      <input
        name="experience"
        placeholder="Experience (in years)"
        value={formData.experience}
        onChange={handleChange}
      />

      <button type="submit">Register as Developer</button>
    </form>
  );
}

export default DeveloperRegistrationForm;