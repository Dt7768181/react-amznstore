import React from 'react'
import { appContext } from '../App'
import { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { Link } from 'react-router-dom'
export default function Login(){
    const navi1=useNavigate();
    const {users,ruser}=useContext(appContext);
    const [use,setUse]=useState({});
    const [msg,setMsg]=useState();
    const handlelogin=()=>{
        const found = users.find((value) => value.email === use.email);
        const pwdfound = users.find((value)=> value.password === use.password)
        if(found&&pwdfound){
            ruser.name=found.name
            navi1("/Products")
        }else{
            setMsg("Invalid Login")
        }
    }
    return(
        <div className='log'>
            <div className='logb'>
                <h2>Login</h2>
                <p>{msg}</p>
                <input type="text" onChange={(e)=>setUse({...use,email:e.target.value})} placeholder='Enter email...'/>
                <br/>
                <input type="password"  onChange={(e)=>setUse({...use,password:e.target.value})} placeholder='Enter password...'/>
                <br/>
                <br/>
                <Link to="../register">Create Account?</Link>
                <br/>
                <button onClick={handlelogin}>Login</button>
            </div>
        </div>
    )
}