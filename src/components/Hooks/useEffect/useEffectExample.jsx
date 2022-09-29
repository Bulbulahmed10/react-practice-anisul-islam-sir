import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //! calles with every render and depend on count

    console.log("useEffect");

    //! When we use array [] then useEffect calls with  one time

  }, [count]);

  return (
    <div>
      {console.log("rendering")}<h1>count : {count} </h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        {" "}
        +{" "}
      </button>
      <button
        onClick={() => {
          setIsLoading(!isLoading);
        }}
      >
        {" "}
         isLoading{" "}
      </button>
    </div>
  );
};

export default UseEffectExample;
