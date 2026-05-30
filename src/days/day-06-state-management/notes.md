# Day 06: State & useState Hook Deep Dive ⚛️

## Introduction
**State** is what makes React truly dynamic. It allows components to "remember" and respond to changes over time.

Without state → Static UI  
With state → Interactive & Dynamic Applications

---

## What is State?

State is **data that changes over time** inside a component and controls the UI.

Whenever state changes, React automatically re-renders the component to reflect the new data.

---

## useState Hook (React 19 Style)

```jsx
import { useState } from 'react';

const [count, setCount] = useState(0);
const [name, setName] = useState("Shivam");
const [isOnline, setIsOnline] = useState(true);

.  count, name, isOnline → Current state value
.  setCount, setName, setIsOnline → Function to update state

How State Updates Work

User interacts (click, type, etc.)
setState() is called
React schedules a re-render
Component re-renders with new state value
UI updates automatically


Controlled Components
When form inputs are controlled by React state:
jsx<input 
  value={text} 
  onChange={(e) => setText(e.target.value)} 
/>
This is the standard way to handle forms in React.

State vs Props






























FeatureStatePropsOwned byComponent itselfReceived from parentMutableYes (using setter)Read-onlyPurposeInternal dataData passingChangesCan be updatedCannot be changed by child

Important Rules

Never mutate state directly (count++ is wrong)
Always use the setter function
State updates are asynchronous
Each component has its own state


Mini Challenge: Developer Dashboard Card
Create a dynamic card with:

Live follower count
Follow/Unfollow button
Online/Offline toggle
Username input (live update)
All updates should be reactive


Revision Questions

What is state in React?
Why do we need the useState hook?
Why does React re-render components?
Why can't we update variables directly?
What is the difference between state and props?
What is a controlled component?
Why is state important for building real applications?
What happens when we call setState()?


Key Takeaways

State makes UI dynamic and reactive
useState is the most used hook in React
State updates trigger re-renders
Always use setter functions to update state
Forms should be controlled components
State is local to each component

Next Day Teaser: Day 07 → useEffect Hook Deep Dive


