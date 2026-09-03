# Day 10: Forms & Controlled Components Deep Dive ⚛️

## Introduction
Forms are at the heart of almost every real-world React application. Mastering forms is essential for building Login, Signup, Dashboard, and CRUD features.

---

## Controlled vs Uncontrolled Components

### Controlled Components (Recommended)
React state controls the input value.

**Advantages:**
- Full control over input
- Easy validation
- Can reset form easily
- Real-time feedback

### Uncontrolled Components
Browser/DOM manages the input value. Use `useRef` to read value when needed.

---

## Key Concepts

### 1. preventDefault()
Prevents the default form submission behavior (page reload).

### 2. Single State Object Pattern (Best Practice)
```jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: ""
});
3. Handling Multiple Inputs
jsxfunction handleChange(e) {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
}

Form Submission Flow

User fills form
onSubmit → preventDefault()
Validation
API call
Success / Error handling
Reset form (optional)


Best Practices

Prefer Controlled Components
Use one state object for related fields
Always validate before submission
Provide good loading and success states
Reset form after successful submission


Revision Questions

What is a Controlled Component?
Why does React prefer Controlled Components?
What is the purpose of preventDefault()?
Difference between Controlled and Uncontrolled?
How do you handle multiple form fields efficiently?
Why use a single state object?


Key Takeaways:

Controlled Components give React full control
Always use preventDefault() on form submit
Group related fields in one state object
Forms are data management systems

Next Day Teaser: Day 11 — useEffect Hook Deep Dive