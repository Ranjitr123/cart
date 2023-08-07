import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/store';


function Parent(props: any) {
  const [propdata, setpropdata] = useState([]);
  const count = useSelector((state:any) => state.counter);
  const dispatch = useDispatch();
  useEffect(() => {
    setpropdata(props.data);
  }, []);

  console.log(props.data);
  return (
    <div>

<h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <h1>Parent</h1>
      {propdata.map((finaldata: any) => {
        return (
          <div>
            <p>{finaldata.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Parent;
