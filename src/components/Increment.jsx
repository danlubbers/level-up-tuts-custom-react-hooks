import React from "react";
import { useIncrement } from "../hooks/useIncrement";

const Increment = () => {
  const [value, { increment, decrement, reset }] = useIncrement({
    maxValue: 12,
    minValue: -2,
    initialValue: 10,
    step: 3,
  });

  return (
    <div>
      <button onClick={decrement}>-</button>
      {value}
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Increment;
