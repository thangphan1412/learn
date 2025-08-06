import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  function addCount() {
    setCount(count + 1);
  }
  function subCount() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1> value of count : {count}</h1>
      <button onClick={addCount}>add</button>\
      <button onClick={subCount}>sub</button>
    </div>
  );
}
