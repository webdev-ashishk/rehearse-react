import React, { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <button onClick={() => setCount(count + 1)} className="btn">
        +
      </button>
      <h1 className="h1">{count}</h1>
      <button
        onClick={() => setCount(count >= 1 ? count - 1 : count)}
        className="btn"
      >
        -
      </button>
    </div>
  );
}
