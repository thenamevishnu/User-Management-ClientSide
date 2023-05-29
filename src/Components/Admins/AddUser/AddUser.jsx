import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import './AddUser.css'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

function AddUser() {

    const navigate = useNavigate()

    const [user,setUser] = useState({
        Username:"",
        Password:""
    })

    const toastMessage = (param)=>{
        return {
                position: "top-center",
                autoClose: param,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const username_reg = /^[A-Za-z_][a-zA-Z0-9_.]{3,15}$/gm
        const password_reg = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*().\\?]).{8,16}$/gm
        if(!username_reg.test(user.Username)){
            toast.error("Invalid username",toastMessage(1000));
        }else if(!password_reg.test(user.Password)){
            toast.error("Invalid Password",toastMessage(1000));
        }else{
            const { data } = await axios.post(process.env.react_app_server_url+"/signup",{...user},{withCredentials:true})
            if(data.exist){
                toast.error("Username already exist",toastMessage(3000))
            }else{
                toast.success("New User Account Created!",toastMessage(1000))
                setTimeout(() => {
                    navigate("/admin")
                }, 2000);
            }
        }
    }

    return (
        <div className='add-user-container'>
            <div className='form-container'>
                <h2 className='header'>Admin Add User</h2>
                <form onSubmit={handleSubmit} className='form'>
                    <input type='text' name='Username' id='Username' placeholder='Username' onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} />
                    <input type='password' name='Password' id='Password' placeholder='Password'  onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})} />
                    <button className='button'>Add User</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AddUser
