import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { SEND_OTP } from '../../resources/api.js'

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleUserLogin = async (data) => {
    if (!data.email) {
      toast.error("Email field is required!", { duration: 3000 })
      return;
    }

    setIsLoading(true)
    try {
      const response = await axios.post(SEND_OTP, data);
      if (response.data.code == 200) {
        toast.success(response.data.message)
        navigate('/verify-otp')
        return;
      } else if (response.data.code == 404) {
        toast.error(response.data.message);
        return;
      } else {
        toast.error(response.data.message, { duration: 3000 })
      }
    } catch (error) {
      console.log("Something went wrong!", error)      
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
    <div className="rounded bg-white/70 p-5 flex items-center justify-between">
        <div>Forgot password</div>
      </div>

      <div className='my-5 p-5 rounded bg-white/30'>
        <div className='max-w-xl rounded bg-white/70 p-3'>
          <form onSubmit={handleSubmit(handleUserLogin)}>
            <div className='my-3'>
              <label className='block'>Email</label>
              <input {...register("email")} type='email' className='w-full rounded p-3 shadow' placeholder='Enter your email' />
            </div>
            <div className='mt-3'>
              {isLoading ?
                <button className="cursor-not-allowed px-4 py-2 rounded bg-blue-100">
                  Sending OTP to your email...
                </button> :
                <button className="cursor-pointer px-4 py-2 rounded bg-blue-100">
                  Send OTP
                </button>
              }
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword