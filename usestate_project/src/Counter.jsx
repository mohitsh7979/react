import { useState } from "react";

function Counter() {
  let [count, setcount] = useState(0);

  function inc() {
    count++;
    setcount(count);
  }

  function dec() {
    count--;
    setcount(count);
  }

  return (
    <>
      <div className="counter">
        <h1>This is counter Project</h1>
        <div className="inner-counter">
          <button onClick={inc}>+</button>
          <span>{count}</span>
          <button onClick={dec}>-</button>
        </div>
        <p>Lorem, ipsum dolor sit amet {count} consectetur adipisicing elit {count}. Labore commodi qui culpa repudiandae. Ipsam dignissimos labore a hic velit fugit unde neque {count} repudiandae iusto assumenda recusandae quam eos consectetur, aut provident nostrum minima, {count} pariatur rerum, itaque facilis officiis inventore minus! Velit iste nisi repellendus aperiam minus voluptate laudantium {count} excepturi placeat!</p>
      </div>
    </>
  );
}

export default Counter;
