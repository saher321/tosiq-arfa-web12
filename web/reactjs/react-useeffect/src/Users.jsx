import React, { useEffect, useState } from 'react'
import {ScaleLoader} from 'react-spinners'
import UserCard from './components/UserCard';
const Users = () => {
    const [userList, setUserList] = useState([]);
    const [isloading, setIsLoading] = useState(true)

    useEffect(()=>{
        const getUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
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
        <div className='m-4'>
            <div className='text-3xl'>Users</div>
            {isloading ? 
            <ScaleLoader /> :
            <div className='mt-4 grid grid-cols-12 gap-4'>
                {userList.length > 0 ?
                    userList.map((user, i)=>{
                        return (
                            <div key={i} className='col-span-4'>
                                <UserCard user={user}/>
                            </div>
                        )
                    }) : "No records were found"
                }
            </div>
            }
        </div>
    )
}

export default Users