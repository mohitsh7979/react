import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recomended from '../../Components/Recomended/Recomended'
import { useParams } from 'react-router-dom'

function Video() {

  const {videoId , setCategoryId} = useParams();
  console.log(videoId,'<<<<videoId>>>>')
  return (
    <>
     <div className="video">
       <PlayVideo videoId = {videoId} />
       <Recomended />
     </div>
    </>
  )
}

export default Video