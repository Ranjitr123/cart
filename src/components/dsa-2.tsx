import React from "react";

// text truncating

function truncate(str: any, maxlength: any) {
  let newstr = str.split(" ", 1).join();
  console.log(newstr);
  if (newstr.length > maxlength) {
    return newstr.slice(0, 6) + "...";
  } else {
    return newstr;
  }
}

console.log(truncate("pritima rautaray", 9));

let arr = 3430;
let checkarr = +arr.toString().split("").reverse().join("");
//  console.log(checkarr)

//  pallendrom or not
const ispalendrom = () => {
  if (arr < 0 ? false : arr === checkarr) {
    return true;
  } else {
    return false;
  }
};
console.log(ispalendrom());
let dis = 0;
// hamming distance
function hamming(x: any, y: any) {
  if (x.length !== y.length) {
    throw new Error("both the characters length are not matching");
  }
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      dis++;
    }
  }
}

hamming("rakesh", "sanjit");
console.log(dis);

// anagram test

function anagramtest(s: any, t: any) {
  let a = s.split("").sort().join("");
  let b = t.split("").sort().join("");
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
let ts: any = "telengana";
let newobj: any = {};
let loop2obj :any = {}
let objlooping = (loop: any,loop2 : any) => {
  for (let j = 0; j < loop.length; j++) {
    // console.log(newobj[loop[j]])
    newobj[loop[j]] = (newobj[loop[j]] || 0) + 1;
    loop2obj[loop2[j]] = (loop2obj[loop2[j]] || 0) + 1;
  }
  for(let key in newobj){
    if(newobj[key] !== loop2obj[key])
      return false
    
   
  }
  return true;
};

console.log(objlooping("anabid","jibana"))

newobj[ts[2]] = "sanjit"
console.log(newobj);

let latestobj:any = {}
let objstr = "ranjit rautaray";

latestobj[objstr[3]] = 45
latestobj[objstr[2]] = "sachin"
console.log(latestobj)


function Dsa2() {
  return (
    <div>
      <h1 className="text-center text-decoration-underline text-success my-5">
        Dsa - 2{" "}
      </h1>
    </div>
  );
}

export default Dsa2;
