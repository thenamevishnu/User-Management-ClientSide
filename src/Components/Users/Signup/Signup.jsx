import React, { useEffect, useState } from 'react'
import './Signup.css'
import {Link, useNavigate} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

function Signup() {

    const [user,setUser] = useState({
        Username:"",
        Password:""
    })

    const navigate = useNavigate()
    
    useEffect(()=>{
        const user = localStorage.getItem("user")
        if(user){
            navigate("/")
        }
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
                toast.success("New Account Created!",toastMessage(1000))
                setTimeout(() => {
                    navigate("/login")
                }, 2000);
            }
        }
    }

    return (
        <div className='signup-container'>
            <div className='form-container'>
                <h2 className='header'>Sign Up</h2>
                <form onSubmit={handleSubmit} className='form'>
                    <input type='text' name='Username' id='Username' placeholder='Username' onChange={(e) => setUser({...user,[e.target.name]:e.target.value})}/>
                    <input type='password' name='Password' id='Password' placeholder='Password' onChange={(e) => setUser({...user,[e.target.name]:e.target.value})}/>
                    <button className='button'>Sign Up</button>
                    <div className='Login'>
                        <Link to='/login' className='text-decoration'>Sign In</Link>
                    </div>
                </form>
            </div>
            <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover>
            </ToastContainer>
        </div>
    )
}

export default Signup
