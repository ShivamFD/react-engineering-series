# Day 05: React Events Deep Dive ⚛️

## Introduction
Events are what make your React application **interactive**. They allow users to interact with your UI (clicking buttons, typing in inputs, submitting forms, etc.).

Before Events → Static UI  
After Events → Dynamic & Interactive Applications

---

## What are Events in React?

React uses its own event system called **Synthetic Events**. It wraps the browser’s native events to provide consistent behavior across all browsers.

**Common Events:**
- `onClick`
- `onChange`
- `onSubmit`
- `onMouseEnter` / `onMouseLeave`
- `onKeyDown`

---

## Important Rules for Event Handling

1. **Pass Function Reference** (Correct)
```jsx
<button onClick={handleClick}>Click Me</button>

2. day-05/notes.md (Detailed Notes)
Markdown# Day 05: React Events Deep Dive ⚛️

## Introduction
Events are what make your React application **interactive**. They allow users to interact with your UI (clicking buttons, typing in inputs, submitting forms, etc.).

Before Events → Static UI  
After Events → Dynamic & Interactive Applications

---

## What are Events in React?

React uses its own event system called **Synthetic Events**. It wraps the browser’s native events to provide consistent behavior across all browsers.

**Common Events:**
- `onClick`
- `onChange`
- `onSubmit`
- `onMouseEnter` / `onMouseLeave`
- `onKeyDown`

---

## Important Rules for Event Handling

1. **Pass Function Reference** (Correct)
```jsx
<button onClick={handleClick}>Click Me</button>

Do NOT Call Function Immediately (Wrong)

jsx<button onClick={handleClick()}>Click Me</button>   // ❌ Wrong

Synthetic Events
React creates a wrapper around the browser’s native event. This gives:

Consistent API across browsers
Better performance (event pooling)
Automatic cleanup


Event Object (e)
jsxconst handleClick = (e) => {
  console.log(e);           // Synthetic Event
  console.log(e.target);    // Element that triggered event
  e.preventDefault();       // Prevent default behavior
  e.stopPropagation();      // Stop event bubbling
};

Event Propagation (Bubbling)
When you click a child element, the event bubbles up to all parent elements.
Solution: Use e.stopPropagation() when needed.

Best Practices

Always define event handlers as separate functions
Use arrow functions for inline handlers when needed
Keep event handlers clean and focused


Mini Challenge: Interactive Developer Card
Create a card that includes:

Hover effects
Follow button with state change
Input field with live greeting
Click interactions


Revision Questions

What are Synthetic Events?
Why should we not write onClick={handleClick()}?
What is event bubbling?
What does preventDefault() do?
What does stopPropagation() do?
Why does React use camelCase for events?
What is the event object?
Difference between inline handler and separate function?


Key Takeaways

Events make UI interactive
Always pass function reference, not call
React uses Synthetic Events for consistency
Understand event bubbling and how to control it
Use preventDefault() and stopPropagation() wisely

Next Day Teaser: Day 06 → State Management with useState Hook