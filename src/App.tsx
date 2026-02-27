import { signal, useModel } from "@preact/signals-react";
import { createModel } from "@preact/signals-core";

const countModel = createModel(() => {
  const count = signal(0);
  const increment = () => {
    count.value++;
  };
  return {
    count,
    increment,
  };
});

export default function App() {
  console.log("rendering app");
  const { count, increment } = useModel(countModel);
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Value: {count}</p>
    </div>
  );
}
