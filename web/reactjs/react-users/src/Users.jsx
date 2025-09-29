import React from 'react'
import users from './utils/users'
import UserCard from './components/UserCard'
const Users = () => {
  return (
    <div>
        <h1 className='m-3 text-3xl text-green-400'>User data</h1>
        <div className='grid auto-cols-auto grid-cols-12'>
        {users.map(({id, name, profile, role})=>{
            return (
                <div className='m-3 lg:col-span-3 md:col-span-4 sm:col-span-6'>
                    <UserCard
                        key={id}
                        profile={profile}
                        name={name}
                        role={role}
                    />
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Users