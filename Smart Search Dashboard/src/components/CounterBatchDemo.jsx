import React, { useState } from "react";

export default function CounterBatchDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = () => {
    setCount((c) => c + 1);
    setText("Updated!");
    // React 19 automatically batches these state updates
  };
  console.log(count, 'This is rerender');


  return (
    <div style={{ margin: "20px" }}>
      <h2>⚡ Automatic Batching Demo</h2>
      <p>Count: {count}</p>
      <p>Status: {text}</p>
      <button onClick={handleClick}>Update Both</button>
    </div>
  );
}
