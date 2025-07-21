import React, { useState } from "react";

const Counter = ({ initialState }) => {
  const [counter, setCount] = useState(initialState);
  const handleClick = () => {
    setCount(() => counter + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => {
      return prevCount + 1;
    });
    // setCount(counter + 1); // This is not recommended as it may lead to stale state issues
    // setCount((prevCount) => counter + 1); // This is incorrect as it uses the stale state
    // setCount((prevCount) => prevCount + 1); // This is the correct way to update state based on previous state
    // setCount((prevCount) => prevCount + 1); // This is also correct
  };
  const fruits = ["apple", "banana", "cherry"];
  return (
    <div className="counter">
      <h1>Counter App</h1>
      <p>Current Count: {counter}</p>
      <button onClick={handleClick}>Increment</button>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};
export default Counter;
