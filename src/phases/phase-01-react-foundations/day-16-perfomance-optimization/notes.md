# Day 16: React Performance Optimization Deep Dive (React 19 Style) ⚛️

## Introduction
Performance optimization is crucial for building fast and scalable React applications. Today we learn how to prevent unnecessary re-renders.

---

## What is Rendering?

React converts JSX into UI and updates the screen. This process is called rendering.

**Re-rendering** happens when React updates the UI due to changes in state, props, or context.

---

## Why Components Re-render?

A component re-renders when:
- Its own state changes
- Its props change
- Context it consumes changes
- Its parent re-renders (even if props are the same)

---

## React.memo() – Prevent Unnecessary Re-renders

```jsx
const MemoizedComponent = React.memo(function Component(props) {
  return <div>...</div>;
});

It skips re-render if props are the same.

useMemo() – Memoize Expensive Values
jsxconst total = useMemo(() => {
  return expensiveCalculation(products);
}, [products]);
Runs only when dependencies change.

useCallback() – Memoize Functions
jsxconst handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
Prevents new function creation on every render.

Best Practices

Measure performance first (React DevTools Profiler)
Optimize only where needed
Use React.memo, useMemo, useCallback wisely
Don't over-optimize


Revision Questions

What causes a component to re-render?
What does React.memo() do?
Difference between useMemo and useCallback?
When should you use these hooks?
Why is unnecessary optimization bad?


Key Takeaways:

Understand why re-renders happen
Use React.memo for expensive components
useMemo for expensive calculations
useCallback for stable functions
Measure before optimizing

Next Day Teaser: Day 17 — React Forms 