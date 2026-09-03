# Day 15: React Context API Deep Dive (React 19 Style) ⚛️

## Introduction
The Context API is one of the most important tools in React for managing shared state without prop drilling.

---

## What is Prop Drilling?

When you have to pass data through many components that don't need it, just to reach a deep child component.

**Example:**
App → Dashboard → Sidebar → Menu → Profile

Only Profile needs the user data, but you pass it through every level.

---

## Context API Solution

Context allows any component in the tree to directly access shared data without passing props through intermediate components.

**Mental Model:** Global backpack — any component can take what it needs.

---

## How to Use Context

### 1. Create Context
```jsx
import { createContext } from "react";

export const UserContext = createContext();

2. Provide Data (Provider)
jsx<UserContext.Provider value={userData}>
  <App />
</UserContext.Provider>
3. Consume Data (useContext)
jsximport { useContext } from "react";
import { UserContext } from "./UserContext";

const user = useContext(UserContext);

Real-World Uses

User authentication data
Theme (dark/light)
Language
Notifications
Shopping cart


Best Practices

Use Context for truly shared/global data
Keep contexts focused (one responsibility)
Don't put everything in Context
Prefer local state (useState) when possible


Revision Questions

What is Prop Drilling?
Why was Context API introduced?
What is createContext()?
What is a Provider?
How does useContext() work?
When should you use Context vs Props?


Key Takeaways:

Context solves prop drilling
Provider supplies data
useContext consumes data
Use for global/shared state

Next Day Teaser: Day 16 — Performance Optimization (React.memo, useMemo, useCallback)