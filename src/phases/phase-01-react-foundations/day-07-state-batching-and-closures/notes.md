# Day 07: State Batching, Async Updates & Closures ⚛️

## Introduction
This is one of the **most important** days in the React series. Today we go deep into how React actually works internally — concepts that separate beginners from serious React developers.

---

## Why State Updates Feel Asynchronous?

State updates in React are **not immediate**. When you call `setState()`, React schedules the update instead of applying it instantly. This is done for performance and optimization.

---

## State Batching

**State Batching** means React groups multiple state updates into a **single re-render**.

**Why?**  
To avoid unnecessary re-renders and improve performance.

**Example:**
```jsx
setCount(count + 1);
setCount(count + 1);     // Both use old 'count' value

Correct Way (Functional Update):
jsxsetCount(prev => prev + 1);
setCount(prev => prev + 1);   // Now correctly becomes +2

Closures in React
A closure is when a function remembers the variables from its outer scope even after the outer function has finished executing.
In React, every render creates a new closure. This is why we face stale closure issues.

Stale Closure Problem
jsxfunction handleClick() {
  setTimeout(() => {
    console.log(count);   // Shows old value
  }, 2000);
}
Solution: Use functional updates or useRef.

React Rendering Cycle

State Update
Component Function Re-runs
New Closure Created
New JSX Returned
Virtual DOM Reconciliation
Real DOM Updated (if needed)


Best Practices

Always use functional updates when new state depends on previous state
Be careful with closures in setTimeout, setInterval, and event handlers
Understand that React 19 has improved automatic batching


Revision Questions

What is State Batching?
Why does React batch state updates?
Why do state updates feel asynchronous?
What is a Closure?
What is Stale Closure and how to avoid it?
When should you use functional updates?
What causes a component to re-render?


Key Takeaways:

React schedules updates, doesn’t mutate instantly
Functional updates prevent stale state
Every render creates a new closure
Understanding internals = Better debugging & optimization