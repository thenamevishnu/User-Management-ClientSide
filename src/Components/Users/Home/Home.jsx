import React, { useEffect } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Home() {

    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("user")
        axios.post(process.env.react_app_server_url,{token}).then((response)=>{
            const data = response.data
            if(data.status){
                if(data.status===-1){ //Expired
                        localStorage.removeItem("user")
                        navigate("/login")
                }
                if(data.status===0){
                    navigate("/login")
                }
            }else{
                navigate("/login")
            }
        })
    },[navigate])

    return (
        <div className='home-container'>
        <button onClick={() => navigate('/profile') } className='profile-button'>Go To Profile</button>
        </div>
    )
}

export default Home
