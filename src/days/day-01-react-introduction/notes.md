# Day 01: React Introduction – Why React is Still the King in 2026

## What is React?
React is a JavaScript **library** developed and maintained by Meta (Facebook). It was released in 2013. It is used for building fast, interactive, and reusable user interfaces.

**Note:** React is a **Library**, not a full Framework. This gives developers freedom to choose their own tools.

## React vs Vanilla JavaScript

| Feature                | Vanilla JS                  | React                          |
|------------------------|-----------------------------|--------------------------------|
| DOM Manipulation       | Direct (hard to manage)     | Uses Virtual DOM               |
| Code Organization      | Difficult in large apps     | Component-based                |
| Performance            | Slower for big apps         | Very fast                      |
| Reusability            | Low                         | High (Reusable Components)     |
| Developer Experience   | Basic                       | Excellent (with DevTools)      |

## What is SPA (Single Page Application)?
SPA is a web application that loads only once and updates content dynamically without refreshing the entire page. It gives a smooth, app-like feeling (like Instagram, Gmail, Netflix).

## What is JSX?
JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript files. JSX makes code more readable and expressive.

**Example:**
```jsx
const name = "Shivam";
const element = <h1>Hello {name}</h1>;


What is Babel?
Babel is a JavaScript compiler (transpiler). It converts modern JavaScript (ES6+) and JSX code into older JavaScript that all browsers can understand.
Why React uses Babel?
Because browsers do not understand JSX directly. Babel converts JSX into React.createElement() calls.

Mini Challenge
Create a beautiful React Introduction Card using only JSX with title, description, and button.