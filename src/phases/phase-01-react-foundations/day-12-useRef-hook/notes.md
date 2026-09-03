# Day 12: useRef Hook Deep Dive (React 19 Style) ⚛️

## Introduction
The `useRef` hook is one of the most useful but often misunderstood hooks in React. Today we will understand it properly.

---

## What is useRef?

`useRef` returns a plain JavaScript object with a single property called `.current`.

```jsx
const ref = useRef(initialValue);

Key Point: Changing ref.current does not trigger a re-render.

useRef vs useState






























FeatureuseStateuseRefPurposeUpdate UIStore values without re-renderRe-renderYesNoUse CaseData that affects UIDOM access, timers, previous valuesReact tracks itYesNo
Simple Rule:
If changing the value should update the UI → use useState
If not → use useRef

1. Accessing DOM Elements (Most Common Use)
jsxconst inputRef = useRef(null);

function focusInput() {
  inputRef.current.focus();
}

<input ref={inputRef} type="text" />
<button onClick={focusInput}>Focus Input</button>
Real Applications: Auto-focus on login, scroll to section, video player controls, etc.

2. Persisting Values Across Renders
Normal variables reset on every render.
useRef keeps the value.
jsxconst countRef = useRef(0);
countRef.current++;

3. Tracking Previous State
jsxconst prevCountRef = useRef();

useEffect(() => {
  prevCountRef.current = count;
}, [count]);
Very useful for comparisons.

4. Storing Timer IDs (Prevent Memory Leaks)
jsxconst timerRef = useRef(null);

useEffect(() => {
  timerRef.current = setInterval(() => { ... }, 1000);

  return () => clearInterval(timerRef.current);
}, []);

Best Practices

Use for DOM access
Store mutable values that don’t affect UI
Never replace state with refs
Always cleanup when necessary


Key Takeaways:

useRef = Mutable value without re-render
Best for DOM manipulation
Great for storing previous values and timer IDs
Essential for performance optimization

Next Day: Day 13 — Custom Hooks (Reusable Logic)