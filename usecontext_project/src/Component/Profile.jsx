import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'


function Profile() {
    
  const {user} = useContext(UserContext);

   if(!user) return <div>Please Login</div>

   return(

     <h1>{user.username}</h1>
   )
}

export default Profile