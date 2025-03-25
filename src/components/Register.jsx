import React from 'react'
import './Register.css'
import { useState } from 'react'
import {Link} from "react-router-dom"
export default function Register() {
  const[users,setUsers]=useState([]);
  const[ruser,setRuser]=useState({});
  const handleUser=()=>{
    setUsers([...users,ruser])
  }
  const removeuser=(val)=>{
    setUsers(users.filter((value)=>val!==value))
  }
  return (
    <div className='reg'>
      <div className='regd'>
      <h2>Register</h2>
      <input type='text' onChange={(e)=>setRuser({...ruser,name:e.target.value})} placeholder='Your name'/>
      <br/>
      <br/>
      <input type='text' onChange={(e)=>setRuser({...ruser,username:e.target.value})} placeholder='Create Username'/>
      <br/>
      <br/>
      <input type='text' onChange={(e)=>setRuser({...ruser,email:e.target.value})} placeholder='Enter Your Email'/>
      <br/>
      <br/>    
      <input type='password' onChange={(e)=>setRuser({...ruser,password:e.target.value})} placeholder='Enter Password'/>
      <br/>
      <br/>
      <Link to="../login">Already a Member</Link>
      <br/>
      <button onClick={handleUser} id="enter">Register</button>
      </div>
      <div className='regd'>
        <table className='App-Register-Table'>
          <tr>
            <th>Name </th>
            <th>Username </th>
            <th>Email </th>
            <th>Remove </th>
          </tr>
        {users.map((value,index)=>(
          <tr>
            <td>{value.name}</td>
            <td>{value.username}</td>
            <td>{value.email}</td>
            <td><button id="remov" onClick={()=>removeuser(value)}>Remove</button></td>
          </tr>
        ))}
        </table>
      </div>
    </div>
  )
}