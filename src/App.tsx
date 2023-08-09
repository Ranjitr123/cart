import { useState, useEffect } from "react";
import "./App.scss";
import Parent from "./components/Parent";
import Child from "./components/child";
import Dsa2 from "./components/dsa-2";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1 className="text-primary">Weather Project</h1>
      <Parent />

      <Child />

      <Dsa2 />

    </div>
  );
}

export default App;
