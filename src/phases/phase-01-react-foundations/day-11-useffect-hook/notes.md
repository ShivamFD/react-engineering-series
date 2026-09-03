# Day 11: useEffect Hook Deep Dive ⚛️

## Introduction
`useEffect` is one of the most important and commonly used React Hooks. It allows you to perform side effects in functional components.

---

## What is a Side Effect?

Anything that interacts with the outside world:
- API calls
- Timers (`setInterval`, `setTimeout`)
- Event listeners
- DOM manipulation
- LocalStorage
- WebSocket connections

---

## Basic Syntax

```jsx
useEffect(() => {
  // Side effect code

  return () => {
    // Cleanup (optional)
  };
}, [dependencies]);


Dependency Array

[] → Run only once (on mount)
[count] → Run when count changes
No array → Run after every render


Cleanup Function
Very important for preventing memory leaks.
jsxuseEffect(() => {
  const timer = setInterval(() => {}, 1000);

  return () => clearInterval(timer);
}, []);

Common Mistakes

Forgetting dependency array → Infinite loop
Wrong dependencies
Doing heavy calculations inside useEffect
Forgetting cleanup


Best Practices (React 19)

Keep effects focused (one responsibility)
Use correct dependencies
Always cleanup resources
Prefer calculations during render when possible


Revision Questions

What is a side effect?
When does useEffect run?
What is the purpose of the dependency array?
What is a cleanup function?
How to avoid infinite loops?
When should you use useEffect?


Key Takeaways:

useEffect runs after render
Use dependency array carefully
Always cleanup
Separate concerns in multiple effects

Next Day Teaser: Day 12 — useRef & DOM Manipulation