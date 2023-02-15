import React, { Component } from 'react'
import { useState, useEffect }  from 'react';
import axios from 'axios';

const sendRequest=async(url:any)=>{
  try {
    const response = await axios.get(url,
      {headers:{'Access-Control-Allow-Origin': 'http://localhost:4000',crossDomain: true,'Access-Control-Allow-Headers':true}})
  } catch (err) {
    console.log(err);
  }
}
const Registration = () => {
var [email, setEmail] = useState("");
var [psw, setPsw] = useState("");
var [pswr , setPswr] = useState("");
var [posts, setPosts] = useState([]);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(`The name you entered was: ${email}`)
    var url=`http://localhost:4000/register?email=${email}&password=${psw}`;
    console.log(url)
    sendRequest(url);
   /* useEffect(() => { 
      axios.get(url,
        {headers:{'Access-Control-Allow-Origin': 'http://localhost:4000',crossDomain: true,'Access-Control-Allow-Headers':true}})
      .then((response:any) => {
  
  setPosts(response.data);
  
  console.log(response.data);
  alert("user register")
  
  }).catch(function (error) {
    if (error.response) {
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
    }
  });
    }, []);*/
  /*  useEffect(() => {  sendRequest(url);
    }, []);
*/
  }

    return (
     <div>
      <span className="container">
<form onSubmit={handleSubmit}>
<h1>Register</h1>
<p>Please fill in this form to create an account.</p>
<hr/>
<label ><b>Email</b></label>
<input type="text" placeholder="Enter Email" name={email} id="email" required onChange={(e) => setEmail(e.target.value)}/>
<label ><b>Password</b></label>
<input type="password" placeholder="Enter Password" name={psw} id="psw" required onChange={(e) => setPsw(e.target.value)}/>
<label ><b>Repeat Password</b></label>
<input type="password" placeholder="Repeat Password" name={pswr} id="psw-repeat" required onChange={(e) => setPswr(e.target.value)}/>
<hr/>
<button type="submit" className="registerbtn">Register</button>
</form>
</span> 
     </div>

);
};
export default Registration; 