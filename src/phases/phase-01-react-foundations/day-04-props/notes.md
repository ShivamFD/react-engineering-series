# Day 04: Props Deep Dive ⚛️

## Introduction
Props (Properties) are one of the most important concepts in React. They allow us to make components **dynamic** and **reusable** by passing data from parent components to child components.

---

## What are Props?

- Props are **read-only** data passed from parent to child component.
- Props are like **function arguments**.
- They make components configurable and reusable.

**Syntax:**
```jsx
<ProfileCard name="Shivam" role="React Developer" age={21} />

Why Props are Important?

Dynamic UI — Same component can show different data
Reusability — One component can be used in multiple places
Component Customization — Change appearance and behavior
Scalability — Essential for large applications
Unidirectional Data Flow — Data flows only from parent to child (one way)


Props Destructuring (Modern Way)
jsx// Old Way
function ProfileCard(props) {
  return <h1>{props.name}</h1>;
}

// Modern & Recommended Way
function ProfileCard({ name, role, age }) {
  return <h1>{name}</h1>;
}

Children Prop
children is a special prop that allows you to pass components/elements between opening and closing tags.
jsx<Card>
  <h2>This is children content</h2>
  <p>It will be rendered inside Card</p>
</Card>
This is very useful for creating wrapper components.

Passing Different Data Types as Props

String, Number, Boolean
Array
Object
Function (for event handling)


Key Rules of Props

Props are immutable (you cannot change them inside the child component)
Props are passed one way (Parent → Child)
Never mutate props directly


Mini Challenge: Developer Profile Showcase
Create multiple profile cards using one reusable component with:

Dynamic props
Skills array
Reusable Button
Children prop usage


Revision Questions

What are props in React?
Why are props important for reusability?
Why are props immutable?
What is props destructuring?
What is the children prop and when is it useful?
What is unidirectional data flow?
Why do we pass functions as props?
What happens if you try to modify props?


Key Takeaways

Props make components dynamic and reusable
Props = Function Arguments
Always destructure props in modern React
children prop is powerful for wrapper components
Props follow one-way data flow
Reusable + Configurable components = Good React Architecture

Next Day Teaser: Day 05 → State Management with useState Hook

