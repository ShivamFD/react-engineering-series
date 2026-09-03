# Day 13: Custom Hooks Deep Dive (React 19 Style) ⚛️

## Introduction
Custom Hooks are one of the most powerful features in React. They allow you to **reuse stateful logic** across components without duplicating code.

This is the point where you start writing React like a **professional developer**.

---

## What is a Custom Hook?

A Custom Hook is simply a **JavaScript function** that:
- Starts with the word `use`
- Can call other React Hooks (`useState`, `useEffect`, `useRef`, etc.)
- Returns values or functions

**Example:**
```jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

Why Do We Need Custom Hooks?
Problem without Custom Hooks:
You write the same logic (loading state, API call, toggle, localStorage, etc.) in multiple components → Duplicate code, hard to maintain.
Solution with Custom Hooks:
Write the logic once → Reuse it everywhere.
Mental Model:
Repeated Logic → Move to Custom Hook → Reuse in any component.

Rules of Custom Hooks

Must start with use (e.g., useCounter, useFetch)
Can only be called at the top level (same rules as normal Hooks)
Can call other Hooks inside


Real-World Custom Hooks Examples
1. useToggle
jsxfunction useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(prev => !prev);
  return { value, toggle };
}
2. useDocumentTitle
jsxfunction useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
3. useLocalStorage (Very Useful)
(Full code in project files)

Mini Project: Developer Dashboard
We created two custom hooks:

useCounter
useToggle

And used them in one dashboard component.

Key Takeaways:

Custom Hooks = Reusable stateful logic
Start name with use
They don't share state between components
Great for cleaning code and building scalable apps

Next Day Teaser: Day 14 — Component Composition & Children Prop
Practice Tip: Try creating your own useLocalStorage or useDebounce hook today.