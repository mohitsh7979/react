import React from 'react'
import Blog from './Blog'

function Home(props) {
  return (
    
    <div>
        <Blog count = {props.count} />
    </div>
  )
}

export default Home