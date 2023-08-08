import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/store";

function Parent() {
  const count = useSelector((val: any) => val.counter);
  const dispatch = useDispatch();

  //  let number = 121;
  //  palindrome
  function palindrome(x: any) {
    let z = +x.toString().split("").reverse().join("");
    console.log(z === x);

    // 121 = "121" = [1,2,1] = [1,2,1] = 121
  }

  palindrome(223);

  // fibonance number

  const fib = function (y: any) {
    let arr = [0, 1];
    for (let i = 2; i <= y; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    console.log(arr);

    return arr[y];
  };

  fib(5);

  // anagram test

  let anagramtest = (t: any, s: any) => {
    t = t.split("").sort().join("");
    s = s.split("").sort().join("");
    console.log(t === s);
    return t === s;
  };

  anagramtest("sachin", "nischan");

  // addsum test 

  let array = [4,6,-3,5,1]
  let target = 2

  let addsum = (val:any,finalval:any)=>{
    for(let i = 0 ; i<= val.length; i++){
          for(let j = i+1; j<= val.length;j++  ){
            if(val[i] + val [j] === finalval){
            
              return [i,j]
            }
          }
    }
  }
    console.log(addsum([4,6,2,5,1],7))

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="btn btn-success" onClick={() => dispatch(decrement())}>
        -
      </button>
      <hr />
    </div>
  );
}

export default Parent;
