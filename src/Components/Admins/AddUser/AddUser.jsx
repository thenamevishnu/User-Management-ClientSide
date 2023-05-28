import React from 'react'
import {useNavigate} from "react-router-dom"
import './AddUser.css'

function AddUser() {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/admin')
    }

    return (
        <div className='add-user-container'>
            <div className='form-container'>
                <h2 className='header'>Admin Add User</h2>
                <form onSubmit={handleSubmit} className='form'>
                    <input type='text' name='Username' id='Username' placeholder='Username'/>
                    <input type='password' name='Password' id='Password' placeholder='Password'/>
                    <button className='button' >Add User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser
