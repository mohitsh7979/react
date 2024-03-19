// function New_Component(my){

//     console.log(my)

//     return(

//         <h1>My Name is {my.name} and age is {my.age}</h1>
//     )

// }

// export default New_Component;

// function New_Component({name,age}){

//     console.log(name,age)

//     return(

//         <h1>My Name is {name} and age is {age}</h1>
//     )

// }

// export default New_Component;


// function New_Component(my){


//     return(

//         <div className="container">
//             <div className="image">
//                 <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
//             </div>
//             <div className="content">
//                 <h2>Mohit</h2>
//                 <h3>Django Developer</h3>
//             </div>
//         </div>
//     )

// }

// export default New_Component;



import React, { useState, useEffect } from 'react';

const New_Component = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <p>Seconds: {seconds}</p>
    </div>
  );
};

export default New_Component;


