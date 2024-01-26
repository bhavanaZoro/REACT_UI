import React, { useState } from 'react'
import "./global.css"
import axiosInstance from '../helper/axiosInstence'
import STYLE from "./login.module.css"
import { useNavigate } from 'react-router-dom'
const Login = () => {
  let navigate=useNavigate()
  let [firstname , setfirstname] = useState("")
  let [lastname , setlastname] = useState("")

  let handleSubmit = (e)=>{
      e.preventDefault() ; 
      let payload = {
        firstname , 
        lastname
      }
      axiosInstance.post("/students" , payload)
     navigate("/")
  }

  return (
    <div className={STYLE.formholder} >
                        <form className={STYLE.form} action="" onSubmit={handleSubmit}>
                                <h2>Login User</h2>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="username">Username </label>
                                        <input type="text" id='username' name='userName' onChange={(e)=>{
                                          setfirstname(e.target.value)
                                          }} />
                                </div>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="lastName">Last Name </label>
                                        <input type="text" id='lastName' name='lastName'/>
                                </div>
                                <button className={STYLE.login}>Login</button>
                        </form>
                </div>
  )
}

export default Login
