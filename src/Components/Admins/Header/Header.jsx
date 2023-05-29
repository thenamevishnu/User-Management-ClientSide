import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()

    useEffect(() => {
        const admin = localStorage.getItem("admin")
        if(!admin){
            navigate("/admin/login")
        }
    })

    const { Username } = useSelector(state => state.admin)

    const logout = () => {
        localStorage.removeItem("admin")
        navigate("/admin/login")
    }

    return (
        <div className='head-container'>
            <div className='header'>
                    ADMIN PANEL
            </div>
            <div className='user-info'>
                { Username && <span className='profile-name'>Admin : {Username} <i className='fa fa-sign-out' onClick={logout} title='logout'></i></span> }
            </div>
            </div>
    )
}

export default Header
