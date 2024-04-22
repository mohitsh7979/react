import React, { useEffect, useState } from 'react';

const Data = () => {
  const [data, setData] = useState([]);
    
    useEffect(()=>{
      
      const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const jsonData = await response.json();
        setData(jsonData);
      };
  
      fetchData();
    },[])




  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.products && data.products.map((item) => (
           
             console.log(item)
        ))}
      </ul>
    </div>
  );
};

export default Data;
