import React, { Component } from 'react'
import { useState, useEffect }  from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const [loginmsg, setLoginmsg] = useState("");
  const navigate = useNavigate();
  const sendPostRequest = async () => {
    console.log("check email "+email)
    var formdata={
      'email': email,
      'password': psw,
    }
    console.log(formdata)
    try {
      const response = await axios.post(
        'http://localhost:4000/login',formdata
        
      );

      console.log(response);
      console.log("checkk here "+response.status)
      alert("login successfully")
      setLoginmsg("login successfully please wait");
      navigate('/RestaurantList');
    } catch (err) {
      console.log("error agaya hai re baba")
      console.log(err);
      alert("login nahi hua re baba")
      setLoginmsg("login nahi hua re baba");
     
    }
  };
  useEffect(() => {
  }, []);
    return (
      <div>
        <span className="container">
          {/* <form > */}
          <h2 className='error_msg'>{loginmsg}</h2>
            <h1>Login</h1>
            <label ><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name={email} id="email" required onChange={(e) => setEmail(e.target.value)}/>
            <label ><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name={psw} id="psw" required onChange={(e) => setPsw(e.target.value)}/>
            <hr/>
            <button onClick={sendPostRequest} className="registerbtn">Login</button>
          {/* </form> */}
        </span>


      </div>
    )
  
}

export default Login