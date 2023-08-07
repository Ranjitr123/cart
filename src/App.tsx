import { useState, useEffect } from "react";
import "./App.scss";
import Parent from "./components/Parent";
import Child from "./components/child";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1 className="text-primary">Weather Project</h1>
      <Parent />

      <Child />

    </div>
  );
}

export default App;
