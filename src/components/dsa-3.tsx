import React from "react";

function Dsa3() {
  // 3rd largest number
  let arr = [12, 21, 35, 1, 34, 1, 54];
  console.log(arr.sort());

  let largestthird = (newarr: any) => {
    let testarr = Array.from(new Set(newarr));
    testarr.sort((a: any, b: any) => b - a);
    let finaltestarr = testarr[1];
    return finaltestarr;
  };
  console.log(largestthird(arr));

  return (
    <div>
      <h1>dsa 3</h1>
    </div>
  );
}

export default Dsa3;
