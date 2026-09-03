import { useEffect, useState } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <div>
      <h1>🕒 Live Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default LiveClock;