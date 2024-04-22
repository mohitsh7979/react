import React, { useState, useContext } from "react";
import Components1 from "./Components1";
import mycontext from "../context/context";

function Button() {
  let data = useContext(mycontext);

  console.log(data)
  return (
    <div>
      <button onClick={(e)=>{data.setCount((count)=>count+1)}}>
        <span>
          <Components1 />
        </span>
        I Am Button
      </button>
    </div>
  );
}

export default Button;
