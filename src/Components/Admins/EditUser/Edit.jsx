import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Edit.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Edit() {
    const navigate = useNavigate()

    const {editUsername , editId} = useSelector(state => state.edit)

    const [user,setUsername] = useState(editUsername) 

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

        if(!username_reg.test(user.Username)){
            toast.error("Invalid Username",toastMessage(3000))
        }else{
            const { data } = await axios.post(process.env.react_app_server_url+"/admin/edit_user",{user , editId},{withCredentials:true})
            if(data.exist){
                toast.error(data.response , toastMessage(3000))
            }else{
                navigate("/admin")
            }
        }
    }

    return (
        <div className='admin-edit-container'>
            <div className='form-container'>
                <h2 className='header'>Edit User</h2>
                <form onSubmit={handleSubmit} className='form'>
                    <input type='text' name='Username' id='Username' value={user} placeholder='Username' onChange={(e)=>setUsername(e.target.value)} />
                    <button className='button' >Edit</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Edit
