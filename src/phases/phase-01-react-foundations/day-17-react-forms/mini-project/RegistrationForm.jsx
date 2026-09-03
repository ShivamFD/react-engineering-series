import { useState } from "react";

function RegistrationForm() {
  const initialForm = {
    name: "",
    email: "",
    password: "",
    role: "",
    gender: "",
    terms: false,
  };

  const [formData, setFormData] = useState(initialForm);

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function validate() {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.password)
      newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Minimum 6 characters";

    if (!formData.role)
      newErrors.role = "Select a role";

    if (!formData.gender)
      newErrors.gender = "Select gender";

    if (!formData.terms)
      newErrors.terms = "Accept Terms & Conditions";

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Registration Successful!");

    console.log(formData);

    setErrors({});
    setFormData(initialForm);
  }

  function handleReset() {
    setErrors({});
    setFormData(initialForm);
  }

  return (
    <div
      style={{
        width: "420px",
        margin: "40px auto",
        border: "1px solid #ddd",
        padding: "25px",
        borderRadius: "10px",
      }}
    >
      <h2>📝 Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.name}</p>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.email}</p>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.password}</p>

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="">Select Role</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
        </select>
        <p style={{ color: "red" }}>{errors.role}</p>

        <h4>Gender</h4>

        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male
        </label>

        <label style={{ marginLeft: "15px" }}>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </label>

        <p style={{ color: "red" }}>{errors.gender}</p>

        <label>
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          I accept Terms & Conditions
        </label>

        <p style={{ color: "red" }}>{errors.terms}</p>

        <div style={{ marginTop: "20px" }}>
          <button type="submit">
            Register
          </button>

          <button
            type="button"
            onClick={handleReset}
            style={{ marginLeft: "10px" }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;