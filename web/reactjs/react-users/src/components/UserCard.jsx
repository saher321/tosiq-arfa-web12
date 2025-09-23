import React from 'react'
import { TfiLock } from "react-icons/tfi";
import noImg from '../assets/images/users/no-img.png'

const UserCard = ({ profile, name, role}) => {

  return (
      <div className='profile-card'>
        
        <img 
          className='items-center aspect-video object-cover' 
          src={profile == null ? noImg : profile} 
        />
        
        <h3 className='text-xl'>{name}</h3>
        <p className='mb-3'>
          <TfiLock className='inline mt-[-3px]' /> {role}
        </p>
        <button>Action</button>
      </div>
  )
}

export default UserCard