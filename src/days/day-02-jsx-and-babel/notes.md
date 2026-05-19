# Day 02: JSX Deep Dive + Babel + Rendering ⚛️

## What is JSX?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript files.

**Important:** JSX is not HTML. It is syntactic sugar that gets converted into JavaScript.

## How JSX Works Internally?
JSX → Babel Transpiles → React.createElement() → React Element Object → Virtual DOM → Real DOM

## Important JSX Rules
- Always return a single parent element
- Use `className` instead of `class`
- Self-closing tags for empty elements (`<img />`)
- JavaScript expressions must be inside `{}`
- Comments must be written as `{/* comment */}`

## React Fragments
Used when you don't want to add extra DOM node.
```jsx
<> 
  <h1>Title</h1>
  <p>Content</p>
</>




Conditional Rendering
jsx{isLoggedIn ? <Dashboard /> : <Login />}
{showMessage && <p>Welcome User!</p>}


Mini Challenge: Create a Developer Profile Card with conditional rendering.