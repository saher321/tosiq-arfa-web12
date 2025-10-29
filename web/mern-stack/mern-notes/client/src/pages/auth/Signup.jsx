import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { SIGNUP_URL } from '../../resources/api';

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const handleUserRegister = async (data) => {
    if (!data.name) {
      toast.error("Name field is required!", { duration: 3000 })
      return;
    } else if (!data.email) {
      toast.error("Email field is required!", { duration: 3000 })
      return;
    } else if (!data.password) {
      toast.error("Password field is required!", { duration: 3000 })
      return;
    }

    setIsLoading(true)
    try {
      const response = await axios.post(SIGNUP_URL, data);
      if (response.data.code == 302) {
        toast.error(response.data.message);
        return;
      }
      if (response.data.code == 777) {
        toast.error(response.data.message);
        return;
      }
      if (response.data.code == 200) {
        toast.success(response.data.message, { duration: 3000 })
        navigate('/login')
      } else {
        toast.error(response.data.message, { duration: 3000 })
      }
    } catch (error) {
      toast.error("Something went wrong!", { duration: 3000 })      
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
    <div className="rounded bg-white/70 p-5 flex items-center justify-between">
        <div>Signup</div>
      </div>

      <div className='my-5 p-5 rounded bg-white/30'>
        <div className='max-w-xl rounded bg-white/70 p-3'>
          <form onSubmit={handleSubmit(handleUserRegister)}>
            <div>
              <label className='block'>Name</label>
              <input {...register("name")} className='w-full rounded p-3 shadow' placeholder='Enter name' />
            </div>
            <div className='my-3'>
              <label className='block'>Email</label>
              <input {...register("email")} className='w-full rounded p-3 shadow' placeholder='Enter email' />
            </div>
            <div>
              <label className='block'>Password</label>
              <input {...register("password")} className='w-full rounded p-3 shadow' placeholder='Enter password' />
            </div>
            <div className='mt-3'>
              {isLoading ?
                <button className="cursor-not-allowed px-4 py-2 rounded bg-blue-100">
                  Singning...
                </button> :
                <button className="cursor-pointer px-4 py-2 rounded bg-blue-100">
                  Signup
                </button>
              }
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup