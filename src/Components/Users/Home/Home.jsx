import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    return (
        <div className='container'>
        <button onClick={() => navigate('/profile') } className='profile-button'>Go To Profile</button>
        </div>
    )
}

export default Home
