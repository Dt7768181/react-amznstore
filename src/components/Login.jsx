import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
export default function login(){
    return(
        <div className='log'>
            <div className='logb'>
                <h2>Login</h2>
                <input type="text" id="Username" placeholder='Enter username...'/>
                <br/>
                <input type="password" id="password" placeholder='Enter password...'/>
                <br/>
                <br/>
                <Link to="../register">Create Account?</Link>
                <br/>
                <button onclick="f()">Login</button>
            </div>
        </div>
    )
}