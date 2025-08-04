import { useState } from "react";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionConponent from "./components/ConditionComponent";
function App() {
  // const person = {
  //   name: "abcd",
  //   message: "hello",
  //   seatNumber: [1, 2, 3],
  // };

  const display = false;
  return (
    <div className="App">
      {/* <Hello persons={person} /> */}
      {/* <Fruits /> */}
      <ConditionConponent display={!display} />
    </div>
  );
}

export default App;
