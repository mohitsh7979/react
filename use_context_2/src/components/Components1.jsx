import React,{useContext} from 'react'
import mycontext from '../context/context'

function Components1() {
    const a = useContext(mycontext);
    // console.log(a)
  return (
    <div>Components {a.count}</div>
  )
}

export default Components1