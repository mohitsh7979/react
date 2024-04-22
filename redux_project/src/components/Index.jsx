import React from 'react'
import { useSelector } from "react-redux";

function Index() {
  const count = useSelector((state) => state.counter.value);
  return (

    <h1>This is my index file {count} </h1>
  )
}

export default Index;