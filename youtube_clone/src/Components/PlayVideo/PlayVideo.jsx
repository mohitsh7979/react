import React, { useState } from 'react'
import './PlayVideo.css'
import describe_icons from '../../images/describe-icons.jpg'
import describe_name from '../../images/describe-name.jpg'
import subscribed from '../../images/subscribed.jpg'
import sort from '../../images/sort.jpg'
import profile_icon from '../../images/profile_icon.png'
import like from '../../images/like.jpg'
import dislike from '../../images/dislike.jpg'
import { API_KEY } from '../../data'
import { useEffect } from 'react'

function PlayVideo({videoId}) {

    const [apidata,setapidata] = useState([]);

    const fetchapidata = async ()=>{

        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
        const final_data = await data.json()
        setapidata(final_data.items)
        console.log(apidata[0])
    }

    useEffect(()=>{
       fetchapidata()
    },[])
  return (
   
     <div classNameName="wrapper">
           <div className="main-wrapper">
                <div className="left"></div>
                <main>
                    <div className="main__video">
                        <div className="main__video-container">
                                <iframe width="100%" height="650" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="main__description">
                            <p>Steph Curry & DeMarcus Postgame Interview - Game 2 | Warriors vs Raptos | 2019 NBA Finals</p>
                            <p>290,399 views</p>
                            <a href="#">
                                <img src={describe_icons} alt="describe-icons" />
                            </a>
                        </div>
                        <div className="main__sub-description">
                            <a href="#">
                                <div className="channel-logo">
                                    <img src="" alt="" />
                                </div>
                                <div className="channel-detail">
                                   <p></p>
                                   <p></p>
                                </div>
                                {/* <img className="main__name" src={describe_name} alt="name" /> */}
                            </a>
                            <a href="#">
                                <img className="main__subscriptions" src={subscribed} alt="subscriptions" />
                            </a>
                            <p>Stephen A. Smith gives his best sales pitch for Kevin Durant to sign with the New York Knicks ahead of 2019 NBA free agency, saying KD would get whatever he desired courtesy of James Dolan..</p>
                        </div>
                        <div className="main__more">
                            <a href="#" >
                                <p>SHOW MORE</p>
                            </a>
                        </div>
                    </div>
                
                    <section>
                        <div>
                            <div className="section__comments">
                                <p>6,806 Comments</p>
                            </div>
                            <div className="section__sort-container">
                                <a href="#">
                                    <img src={sort} alt="sort comments" />
                                    <p>SORT BY</p>
                                </a>
                            </div>
                            <div className="section__profile">
                                <img src={profile_icon} alt="profile_icon" /> 
                            </div>
                            <div className="input__container">
                                <form>
                                    <input type="text" name="comment" id="comment" value="Add a public comment..." />
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="comments">
                                <img src={profile_icon} alt="profile icon" width="50" />
                                <p className="comments__name">John Snow <a href="#">10 months ago</a> </p>
                                <p className="comments__comment">Stephen A will do anything he possibly can to get KD on the Knicks 😂.</p>
                                <div className="likes">
                                    <a href="#">
                                        <img src={like} alt="like" />
                                    </a>
                                    <p className="comments__text">1K</p>
                                    <a href="#">
                                        <img src={dislike} alt="dislike" />
                                    </a>
                                    <a href="#" className="comments__text">REPLY</a>
                                </div>
                                <a href="#" className="comments_replies">View all 7 replies</a>
                            </div>
                            <div className="comments">
                                <img src={profile_icon} alt="profile icon" width="50" />
                                <p className="comments__name">John Snow <a href="#">10 months ago</a> </p>
                                <p className="comments__comment">Stephen A will do anything he possibly can to get KD on the Knicks 😂.</p>
                                <div className="likes">
                                    <a href="#">
                                        <img src={like} alt="like" />
                                    </a>
                                    <p className="comments__text">1K</p>
                                    <a href="#">
                                        <img src={dislike} alt="dislike" />
                                    </a>
                                    <a href="#" className="comments__text">REPLY</a>
                                </div>
                                <a href="#" className="comments_replies">View all 7 replies</a>
                            </div>
                            <div className="comments">
                                <img src={profile_icon} alt="profile icon" width="50" />
                                <p className="comments__name">John Snow <a href="#">10 months ago</a> </p>
                                <p className="comments__comment">Stephen A will do anything he possibly can to get KD on the Knicks 😂.</p>
                                <div className="likes">
                                    <a href="#">
                                        <img src={like} alt="like" />
                                    </a>
                                    <p className="comments__text">1K</p>
                                    <a href="#">
                                        <img src={dislike} alt="dislike" />
                                    </a>
                                    <a href="#" className="comments__text">REPLY</a>
                                </div>
                                <a href="#" className="comments_replies">View all 7 replies</a>
                            </div>
                            <div className="comments">
                                <img src={profile_icon} alt="profile icon" width="50" />
                                <p className="comments__name">John Snow <a href="#">10 months ago</a> </p>
                                <p className="comments__comment">Stephen A will do anything he possibly can to get KD on the Knicks 😂.</p>
                                <div className="likes">
                                    <a href="#">
                                        <img src={like} alt="like" />
                                    </a>
                                    <p className="comments__text">1K</p>
                                    <a href="#">
                                        <img src={dislike} alt="dislike" />
                                    </a>
                                    <a href="#" className="comments__text">REPLY</a>
                                </div>
                                <a href="#" className="comments_replies">View all 7 replies</a>
                            </div>
                            <div className="comments">
                                <img src={profile_icon} alt="profile icon" width="50" />
                                <p className="comments__name">John Snow <a href="#">10 months ago</a> </p>
                                <p className="comments__comment">Stephen A will do anything he possibly can to get KD on the Knicks 😂.</p>
                                <div className="likes">
                                    <a href="#">
                                        <img src={like} alt="like" />
                                    </a>
                                    <p className="comments__text">1K</p>
                                    <a href="#">
                                        <img src={dislike} alt="dislike" />
                                    </a>
                                    <a href="#" className="comments__text">REPLY</a>
                                </div>
                                <a href="#" className="comments_replies">View all 7 replies</a>
                            </div>
                         
                        </div>
                    </section>

                </main>
            </div>
     </div>
  )
}

export default PlayVideo