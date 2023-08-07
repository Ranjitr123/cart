import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement  } from "../store/store";

function Parent() {

  const count = useSelector((val: any) => val.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <hr />
    </div>
  );
}

export default Parent;
