import React, { useContext, useState } from "react";
import "./Login.css";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  
  const {setUser} = useContext(UserContext)

  const btnhandle = (e) => {
    e.preventDefault()
    setUser({username,password});
  };

  return (
    <div className="react">
      <center>Login Form</center>
      <label htmlFor="">Username :</label>
      <input type="text" onChange={(e) => {setusername(e.target.value)}} />
      <label htmlFor="">Password :</label>
      <input type="password" onChange={(e) => {setpassword(e.target.value)}}/>
      <button onClick={btnhandle}>Submit</button>
    </div>
  );
}

export default Login;
