import React from 'react'
import { useNavigate } from 'react-router-dom'

function Edit() {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/admin')
    }

    return (
        <div className='container'>
            <div className='form-container'>
                <h2 className='header'>Edit User</h2>
                <form onSubmit={handleSubmit} className='form'>
                    <input type='text' name='Username' id='Username' placeholder='Username'/>
                    <button className='button' >Edit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit
