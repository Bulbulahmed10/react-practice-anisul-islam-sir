import React, { useState } from "react";

export default function CounterApp() {
  const [count, countFunc] = useState(0);
  const handleIncrement = () => {
    countFunc(count + 1);
  };

  const handledecrement = () => {
    countFunc(count - 1);
  };

  const reset = () => {
    countFunc(0);
  };
  return (
    <div>
      <h1> Count: {count} </h1>
      <button onClick={handleIncrement} disabled={count === 5 && true}>
        {" "}
        +{" "}
      </button>
      <button onClick={handledecrement} disabled={count === -5 && true}>
        {" "}
        -{" "}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
