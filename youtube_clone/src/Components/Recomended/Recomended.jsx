import React from 'react'
import './Recomended.css'
import aside_pic from '../../images/aside-pic.jpg'

function Recomended() {
  return (
    
    <>
        <aside className="aside">
                        <div className="aside__top-container">
                            <p>Up next</p>
                            <a href="#">AUTOPLAY</a>
                        </div>
                        <a href="#" className="first-img-aside">
                            <img src={aside_pic} alt="Next video" />
                        </a>
                        <a href="#" >
                            <img  className="aside__video" src={aside_pic}  alt="Next video" />
                        </a>
                        <a href="#" >
                            <img  className="aside__video" src={aside_pic}  alt="Next video" />
                        </a>
                        <a href="#" >
                            <img  className="aside__video" src={aside_pic}  alt="Next video" />
                        </a>
                        <a href="#" >
                            <img  className="aside__video" src={aside_pic}  alt="Next video" />
                        </a>
                         <a href="#" >
                            <img  className="aside__video" src={aside_pic}  alt="Next video" />
                        </a>
                        <a href="#" >
                            <img  className="aside__video" src={aside_pic}  alt="Next video" />
                        </a>
                        <a href="#" >
                            <img  className="aside__video" src={aside_pic}  alt="Next video" />
                        </a>
                        <a href="#" >
                            <img  className="aside__video" src={aside_pic}  alt="Next video" />
                        </a>
                        <a href="#" >
                            <img  className="aside__video" src={aside_pic}  alt="Next video" />
                        </a>
                        <a href="#" >
                            <img  className="aside__video" src={aside_pic}  alt="Next video" />
                        </a>
                        <a href="#" >
                            <img  className="aside__video" src={aside_pic}  alt="Next video" />
                        </a>
                        <a href="#" >
                            <img  className="aside__video" src={aside_pic}  alt="Next video" />
                        </a>
                        <div className="aside__more">
                            <a href="#">SHOW MORE</a>
                        </div>
                    </aside>
    </>
  )
}

export default Recomended