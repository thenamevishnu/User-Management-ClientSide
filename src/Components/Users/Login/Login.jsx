import React, { useEffect, useState } from 'react'
import './Login.css'
import {Link, useNavigate} from "react-router-dom"
import { toast , ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import {useDispatch} from "react-redux"
import { updateUser } from '../../../Redux/User/UserSlice';

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [user,setUser] = useState({
        Username:"",
        Password:""
    })

    useEffect(()=>{
        const user = localStorage.getItem("user")
        if(user){
            navigate("/")
        }
    },[navigate])

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
            const { data } = await axios.post(process.env.react_app_server_url+"/login",{...user},{withCredentials:true})
            if(!data.exist){
                toast.error(""+data.response+"",toastMessage(1000))
            }else{
                toast.success("Successfully LoggedIn!",toastMessage(1000))
                setTimeout(() => {
                    localStorage.setItem("user",JSON.stringify(data))
                    dispatch(updateUser({Username:data.getUser.Username,Id:data.getUser._id,Dp:data.getUser.Dp}))
                    navigate("/")
                }, 2000);
            }
        }
    }

    return (
        <div className='login-container'>
            <div className='form-container'>
                <h2 className='header'>Sign In</h2>
                <form onSubmit={handleSubmit} className='form'>
                    <input type='text' name='Username' id='Username' placeholder='Username' onChange={(e) => setUser({...user,[e.target.name]:e.target.value})}/>
                    <input type='password' name='Password' id='Password' placeholder='Password' onChange={(e) => setUser({...user,[e.target.name]:e.target.value})}/>
                    <button className='button' >Sign In</button>
                    <div className='signup'>
                        <Link to='/signup' className='text-decoration'>Sign Up</Link>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login
