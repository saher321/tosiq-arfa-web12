import React, { useEffect, useState } from 'react'
import {ScaleLoader} from 'react-spinners'
import UserCard from '../components/UserCard';
import Navbar from '../components/Navbar';
import { USERS_API } from '../resources/api.js';
import { NavLink } from 'react-router-dom';
const Users = () => {
    const [userList, setUserList] = useState([]);
    const [isloading, setIsLoading] = useState(true)

    useEffect(()=>{
        const getUsers = async () => {
            const response = await fetch(USERS_API);
            const users = await response.json();
            if (!users) {
                console.log("User data is not fetching")
            } else {
                setUserList(users);
                setIsLoading(false)
            }
        }

        getUsers()
    })

    return (
        <>
        <Navbar />
        <div className='m-4'>
            <div className='text-3xl'>Users</div>
            {isloading ? 
            <ScaleLoader /> :
            <div className='mt-4 grid grid-cols-12 gap-4'>
                {userList.length > 0 ?
                    userList.map((user, i)=>{
                        return (
                            <div key={i} className='col-span-4'>
                                <NavLink to={ `/users/${user.id}`}>
                                    <UserCard user={user}/>
                                </NavLink>
                            </div>
                        )
                    }) : "No records were found"
                }
            </div>
            }
        </div>
        </>
    )
}

export default Users