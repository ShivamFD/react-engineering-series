# Day 03: Components Deep Dive ⚛️

## Introduction
React is a **Component-Based UI Library**. Components are the fundamental building blocks of any React application. Understanding components deeply is one of the most important concepts in React.

---

## What is a Component?

A **Component** is a reusable, independent, and self-contained piece of User Interface (UI). 

In React, every component is essentially a **JavaScript function** (or class) that returns **JSX** (UI).

**Real-life Analogy**:  
Think of components like LEGO blocks. Small blocks combine together to build a large, complex structure.

**Examples of Components**:
- Navbar
- Sidebar
- Profile Card
- Button
- Footer
- Hero Section
- Dashboard

---

## Why Does React Use Components?

1. **Reusability** — Write once, use multiple times
2. **Maintainability** — Easy to update and debug
3. **Scalability** — Can easily build large applications
4. **Separation of Concerns** — Each component has its own responsibility
5. **Team Collaboration** — Multiple developers can work on different components
6. **Faster Development** — Saves huge amount of time

---

## Types of Components

### 1. Functional Components (Recommended in 2026)
```jsx
function Navbar() {
  return (
    <nav>
      <h1>React Engineering Series</h1>
    </nav>
  );
}

2. Class Components (Old Way)
jsxclass Navbar extends React.Component {
  render() {
    return <nav>...</nav>;
  }
}
Modern React (2026): Almost everyone uses Functional Components with Hooks.

Component Naming Rules

Component names must start with a Capital Letter (PascalCase)
Example: Navbar, ProfileCard, HeroSection (Correct)
Example: navbar, profilecard (Wrong)

React treats lowercase tags as HTML elements.

Component Composition
Composition means combining small components to create larger components.
Example Structure:
jsx<App>
  <Navbar />
  <HeroSection />
  <Features />
  <Testimonials />
  <Footer />
</App>
This is called Thinking in Components — the most important skill of a React developer.

Reusability in Action
Reusable Button Component:
jsxfunction Button({ text, color, onClick }) {
  return <button style={{background: color}} onClick={onClick}>{text}</button>;
}
You can use this button anywhere with different text and colors.

Props (Properties) - First Introduction
Props are used to pass data from parent component to child component.

Props are read-only (immutable)
They are passed like HTML attributes

Example:
jsx<ProfileCard name="Shivam" role="React Developer" />

Mini Challenge Explanation
Developer Portfolio Hero Section should include:

Main Heading
Subtitle / Tagline
Description
Multiple Buttons (Reusable Button Component)
Clean and modern design


Revision Questions

What is a Component in React?
Why does React use components instead of writing everything in one file?
What is the difference between lowercase and uppercase component names?
What is Component Composition?
What does DRY mean in programming?
What are Props and why are they important?
Why are reusable components important in large applications?
What is the modern way to create components in React?


Key Takeaways from Day 03

React is all about Components
Components should be small, focused, and reusable
Always think about breaking large UIs into smaller components
Use PascalCase for component names
Component Composition is the key to building complex UIs
Reusability is one of the biggest advantages of React


Practice Complete Karne Ke Baad Likho:
"Day 3 Completed ✅
Understood Component-Based Architecture"
Next Day Teaser:
Day 04 → Props Deep Dive + Prop Drilling Problem