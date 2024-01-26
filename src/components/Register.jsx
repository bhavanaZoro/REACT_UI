import React, { useState } from 'react'
import STYLE from "./register.module.css"
import axiosInstance from '../helper/axiosInstence'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Register = () => {

        let navigate=useNavigate()
        let [studentData, setstudentData] = useState({
                userName: "",
                lastName: ""
        })




        let handleRegister = (e) => {

                e.preventDefault();
                try {
                        axiosInstance.post("/users/save", studentData)
                        navigate("/login")
                        toast.success(`user ${studentData.userName} registered successfully !`)
                }
                catch (err) {
                        console.log(err);
                        alert("Fill the details properly")
                }

        }

        return (
                <div className={STYLE.formholder} >
                        <form className={STYLE.form} action="" onSubmit={handleRegister}>
                                <h2>Register User</h2>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="username">Username </label>
                                        <input type="text" id='username' name='userName' />
                                </div>
                                <div className={STYLE.formitems}>
                                        <label htmlFor="lastName">Last Name </label>
                                        <input type="text" id='lastName' name='lastName'/>
                                </div>
                                <button className={STYLE.register} >Register</button>
                        </form>
                </div>
        )
}

export default Register