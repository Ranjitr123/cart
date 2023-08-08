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

  

  let addsum = (val:any,finalval:any)=>{
    for(let i = 0 ; i< val.length; i++){
          for(let j = i+1; j< val.length;j++  ){
            if(val[i] + val[j] === finalval){
              return [val[i],val[j]]
            
            }
          
          }
    }
  }
    console.log(addsum([4,6,-3,5,3],2))
//  best time for buy and sell stocks

function maxProfit(prices:any) {
  let profit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  
  return profit;
}

const stockPrices = [2,22,1,45,55];
const result = maxProfit(stockPrices);
console.log("Max Profit:", result);

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
