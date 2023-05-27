import React from 'react'
import './Signup.css'
import {Link, useNavigate} from "react-router-dom"

function Signup() {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/login')
    }

    return (
        <div className='container'>
            <div className='form-container'>
                <h2 className='header'>Sign Up</h2>
                <form onSubmit={handleSubmit} className='form'>
                    <input type='text' name='Username' id='Username' placeholder='Username'/>
                    <input type='password' name='Password' id='Password' placeholder='Password'/>
                    <button className='button'>Sign Up</button>
                    <div className='Login'>
                        <Link to='/login' className='text-decoration'>Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
