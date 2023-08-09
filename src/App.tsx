import { useState, useEffect } from "react";
import "./App.scss";
import Parent from "./components/Parent";
import Child from "./components/child";
import Dsa2 from "./components/dsa-2";
import Dsa3 from "./components/dsa-3";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1 className="text-primary">Weather Project</h1>
      <Parent />

      <Child />

      <Dsa2 />

      <Dsa3 />

    </div>
  );
}

export default App;
