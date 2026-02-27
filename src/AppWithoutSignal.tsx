import { useState } from "react";

export default function AppWithoutSignal() {
  // console.log("rendering app without signal");
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Value: {count}</p>
    </div>
  );
}
