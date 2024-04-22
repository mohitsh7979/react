import React from 'react'
import { useContext } from 'react'
import mycontext from '../context/Newcontext'

function About() {

    const count = useContext(mycontext);
    console.log(count)
  return (
    
    <h1>My Count is {count}</h1>
  )
}

export default About