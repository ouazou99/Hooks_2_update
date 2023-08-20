import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function deccrease() {
    setCount(count - 1);
  }
  function multiply() {
    setCount(count * count);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={deccrease}>-</button>
      <button onClick={multiply}>*</button>
    </div>
  );
}

export default App;
