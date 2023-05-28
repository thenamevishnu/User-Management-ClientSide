import React, { useEffect } from 'react'
import './Header.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

    const { Username } = useSelector(state => state.user)

    const navigate = useNavigate()

    useEffect(()=>{
        const user = localStorage.getItem("user")
        if(!user){
            navigate("/login")
        }
    },[navigate])

    const logout = () => {
        localStorage.removeItem("user")
        navigate("/login")
    }

    return (
        <div className='head-container'>
        <div className='header'>
                USER MANAGEMENT
        </div>
        <div className='user-info'>
            { Username && <span className='profile-name'>{Username} <i className='fa fa-sign-out' onClick={logout}></i></span> }
        </div>
        </div>
    )
}

export default Header
