import React, { useState } from 'react'
import './Profile.css'

function Profile() {

    const [image,setImage] = useState(null)

    return (
        <div className='container'>
            <div className='profile-container'>
                <div className='profile-pic'>
                    <img src={image ? URL.createObjectURL(image) : "../../../avatar.png"} alt='profile pic'/>
                </div>
                <div className='profile-info'>
                    <span>Vishnu M K</span>
                </div>
                <div className='upload-image'>
                    <input type='file' name='dp' id='dp' onChange={(e)=>setImage(e.target.files[0])} />
                    <label for="dp" className='custom-file-button' title='Upload Pic'><i className='fa fa-upload'></i></label>
                </div>
            </div>
        </div>
    )
}

export default Profile
