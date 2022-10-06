import React, { useCallback, useState } from "react";
import Message from "./Message";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  console.log("app rendering");
  return (
    <div>
      {toggle ? "On" : "Off"}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      <h1>Count: {count} </h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <Message numberOfMessages={count} onHandleIncrement={handleIncrement} />
    </div>
  );
};

export default Memo;
