# Day 17: React Forms Deep Dive (React 19 Style) ⚛️

## Introduction
Forms are at the heart of almost every real-world React application. Mastering forms is essential for building Login, Signup, Contact, Checkout, and Dashboard features.

---

## Controlled Components (Recommended)

React state controls the input value.

```jsx
const [name, setName] = useState("");

<input 
  value={name} 
  onChange={(e) => setName(e.target.value)} 
/>

Advantages:

Full control
Easy validation
Real-time updates
Easy form reset


Uncontrolled Components
Browser manages the input value. Use useRef to read value when needed.
jsxconst inputRef = useRef();

<input ref={inputRef} />
Use when: Simple forms where you only need value on submit.

Handling Multiple Inputs (Best Pattern)
jsxconst [formData, setFormData] = useState({
  name: "",
  email: "",
  password: ""
});

function handleChange(e) {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
}

Form Submission
Always use preventDefault() to stop page reload.
jsxfunction handleSubmit(e) {
  e.preventDefault();
  console.log(formData);
}

Key Takeaways

Prefer Controlled Components
Use one state object for multiple fields
Always use preventDefault() on submit
Validate before submitting

Next Day Teaser: Day 18 — React Form Validation