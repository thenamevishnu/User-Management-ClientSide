import React from 'react'
import './Login.css'
import {useNavigate} from "react-router-dom"

function Login() {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/admin')
    }

    return (
        <div className='container'>
            <div className='form-container'>
                <h2 className='header'>Admin Login</h2>
                <form onSubmit={handleSubmit} className='form'>
                    <input type='text' name='Username' id='Username' placeholder='Username'/>
                    <input type='password' name='Password' id='Password' placeholder='Password'/>
                    <button className='button' >Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
