import { useState } from "preact/hooks";

export default function MyIsland() {
  const [count, setCount] = useState(5);


  return (
    <div>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}