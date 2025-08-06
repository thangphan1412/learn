import { useState } from "react";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionConponent from "./components/ConditionComponent";
import Message from "./components/Message";
import Count from "./components/Count";
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
      {/* <ConditionConponent display={!display} /> */}
      {/* <Message /> */}
      <Count />
    </div>
  );
}

export default App;
