import React, { useEffect, useState } from 'react'
import './Manage.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Manage() {

    const navigate = useNavigate()
    const [users,setUsers] = useState([])

    useEffect(()=>{

        const fetchInfo = async ()=>{
            const token = localStorage.getItem("admin")
            const response = await axios.post(process.env.react_app_server_url+"/admin/auth",{token},{withCredentials:true})
            if(response.data.status){
                if(response.data.status===-1){
                    localStorage.removeItem("admin")
                    navigate("/admin/login")
                }

                if(response.data.status===0){
                    navigate("/admin/login")
                }
            }else{
                navigate("/admin/login")
            }

            const { data } = await axios.get(process.env.react_app_server_url+"/admin/get_users")
            setUsers(data.allUsers)
        }

        fetchInfo()

    },[navigate])

    const updateOnSearch = async (params) => {
        const regex = new RegExp(""+params+"","i")
        const { data } = await axios.get(process.env.react_app_server_url+"/admin/get_users")
        setUsers(data.allUsers.filter(obj => obj.Username.match(regex)))
    }

    return (
        <div>
            <input type='text' name='search' id='search' className='search' placeholder='Search User...' onChange={(e)=>{updateOnSearch(e.target.value)}}/>
            <div className='manage-container'>
                <table className='table' id='table'>
                    <thead>
                        <tr className='row'>
                            <th>ProfilePic</th>
                            <th>UserName</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    
                    {
                        users.map(obj => {
                            return(
                                <tbody key={obj._id}>
                                    <tr className='row'>
                                        <td><img src={obj.Dp ? `../../../Images/${obj.Dp}` : "../../../Images/avatar.png" } alt='profile pic' className='admin-profile-pic'/></td>
                                        <td>{obj.Username}</td>
                                        <td><i className='fa fa-edit' style={{cursor:'pointer',fontSize:'25px'}} title='Edit User' onClick={() => navigate('/admin/edit_user')}></i></td>
                                        <td><i className='fa fa-trash' style={{cursor:'pointer',fontSize:'25px'}} title='Delete User'></i></td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}

export default Manage
