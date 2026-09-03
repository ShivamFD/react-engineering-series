# Day 14: Component Composition & children Prop Deep Dive ⚛️

## Introduction
Component Composition is one of the most important design patterns in React. It is heavily used in professional UI libraries like shadcn/ui, Radix UI, Material UI, and Chakra UI.

---

## What is Component Composition?

It means building complex UIs by combining small, reusable components instead of creating one large component with many props.

**Mental Model:** LEGO blocks — small pieces combined to build something big.

---

## Why Composition is Better than Inheritance?

React prefers composition because:
- More flexible
- Easier to reuse
- Better separation of concerns
- Cleaner code

---

## The children Prop

Every component automatically receives a special prop called `children`.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

Usage:
jsx<Card>
  <h2>Title</h2>
  <p>Description</p>
  <button>Action</button>
</Card>

Layout Components (Very Common Pattern)
jsxfunction Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
Usage:
jsx<Layout>
  <Dashboard />
</Layout>

Best Practices

Keep components small and focused
Prefer composition over huge components with many props
Use children for flexible wrappers
Extract repeated UI into reusable components


Revision Questions

What is Component Composition?
Why does React prefer composition over inheritance?
What is the children prop?
When should you use children instead of many props?
What is a Layout Component?
Name three UI libraries that use composition heavily.


Key Takeaways:

Composition = Combining small components
children makes wrappers flexible
Better than inheritance for UI
Foundation of scalable React applications

Next Day Teaser: Day 15 — React Context API (Solving Prop Drilling)