
import { useEffect, useState } from "react";

function Practice() {
  const [count, setCount] = useState(0);

  // Runs only once
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  // Runs when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Practice;