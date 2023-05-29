import React, { useEffect, useState } from 'react'
import './Manage.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { changeEditUser } from '../../../Redux/AdminEdit/AdminEditSlice'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'


function Manage() {

    const navigate = useNavigate()
    const [users,setUsers] = useState([])
    const dispatch = useDispatch()

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

    const updateOnSearch = async (params) => {
        const regex = new RegExp(""+params+"","i")
        const { data } = await axios.get(process.env.react_app_server_url+"/admin/get_users")
        setUsers(data.allUsers.filter(obj => obj.Username.match(regex)))
    }

    const DeleteUser = async (props) => {
        confirmAlert({
            title:"Delete User",
            message:`Are you confirm to delete ${props.Username} ?`,
            buttons:[
                {
                    label:"YES",
                    onClick : async () => {
                        const { data } = await axios.post(process.env.react_app_server_url+"/admin/delete_user",props,{withCredentials:true})
                        if(!data.exist){
                            toast.error(data.response,toastMessage(1000))
                        }else{
                            setUsers(users.filter(obj => obj._id !== props.Id))
                            toast.success(props.Username+" removed!",toastMessage(1000))
                        }
                    }
                },{
                    label:"NO",
                    onClick : () => {
                        navigate("/admin")
                    }
                }
            ]
        })
    }

    return (
        <div>
            <span className='add-users' onClick={()=>{
                navigate("/admin/add_user");
            }}><i className='fa fa-user-plus'/> Add Users</span>
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
                                        <td><i className='fa fa-edit' style={{cursor:'pointer',fontSize:'25px'}} title='Edit User' onClick={() => {
                                            dispatch(changeEditUser({Id:obj._id,Username:obj.Username})); navigate('/admin/edit_user');
                                        }}></i></td>
                                        <td><i className='fa fa-trash' style={{cursor:'pointer',fontSize:'25px'}} title='Delete User' onClick={() => DeleteUser({Id:obj._id,Username:obj.Username})}></i></td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Manage
