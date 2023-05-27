import React from 'react'
import './Manage.css'
import { useNavigate } from 'react-router-dom'

function Manage() {

    const navigate = useNavigate()

    return (
        <div>
            <input type='text' name='search' id='search' className='search' placeholder='Search User...'/>
            <div className='manage-container'>
                <table className='table' id='table'>
                    <tr className='row'>
                        <th>ProfilePic</th>
                        <th>UserName</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    <tr className='row'>
                        <td><img src="../../../avatar.png" alt='profile pic' className='admin-profile-pic'/></td>
                        <td>Vishnu M K</td>
                        <td><i className='fa fa-edit' style={{cursor:'pointer',fontSize:'25px'}} title='Edit User' onClick={() => navigate('/admin/edit_user')}></i></td>
                        <td><i className='fa fa-trash' style={{cursor:'pointer',fontSize:'25px'}} title='Delete User'></i></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Manage
