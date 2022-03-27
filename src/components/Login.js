// import React from 'react'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice'
import "./Login.css";


const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const dispatch = useDispatch();
    

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
          login({
          name:name,
          email:email,
          password:password,
          LoggedIn : true,
        })
        );
    };

    return (
    <div className="login">
    <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="login-form-h" >Login Here</h1>
        <input className="login-from-input" type="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="login-from-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="login-from-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="submit-btn">Submit</button>

    </form>


    </div>
  );
};

export default Login;
