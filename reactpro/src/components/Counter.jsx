import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function increment() {
    setCount(count + incrementBy);
  }

  function decrement() {
    setCount(count - incrementBy);
  }

  function increseIncrement() {
    setIncrementBy(incrementBy + 1);
  }

  function decreseIncrement() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h1>Count Value is: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>We are incrementing the value by: {incrementBy}</h1>
      <button onClick={increseIncrement}> Increase Increment</button>
      <button onClick={decreseIncrement}>Decrese Increment</button>
    </div>
  );
}
