import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import App, { AppContext } from './App';
import { useContext, useState } from 'react';


export default function Login() {
  const {users} = useContext(AppContext);
  const [user, setUser] = useState({});
  const {error, setError} = useState();  
  const Navigate = useNavigate();
  
  const handleSubmit = () => {
    const found = users.find( (element) => element.email===user.email && element.pass===user.pass);
    if (!found){
      setError("Access Denied");
    }
    else{
      Navigate("/")
    }
  };
  return (
    <div>
        <h2>Login Form</h2>
        {error}
        <p>< input type="text" placeholder='Enter email' onChange={(e)=>setUser({...user, email:e.target.value})}/></p>
        <p><input type="password" placeholder='Enter password' onChange={(e)=>setUser({...user, pass:e.target.value})}/></p>
        <p><button onClick={handleSubmit}>Login</button></p>
        <hr />
        <Link to='/register'>Create an Account!</Link> 
    </div>
  )
}

///hi