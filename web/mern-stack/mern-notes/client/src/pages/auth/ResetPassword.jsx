import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { RESET_PASSWORD, VERIFY_OTP } from '../../resources/api.js'

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleResetPassword = async (data) => {
    if (!data.newPassword) {
      toast.error("New Password field is required!", { duration: 3000 })
      return;
    }

    setIsLoading(true)
    try {
      const newData = {
        email: localStorage.getItem("forgotUserEmail"),
        newPassword: data.newPassword
      }
      const response = await axios.post(RESET_PASSWORD, newData);
      if (response.data.status == true) {
        toast.success(response.data.message)
        localStorage.getItem("forgotUserEmail") && localStorage.removeItem("forgotUserEmail")
        navigate('/login')
        return;
      } else {
        toast.error(response.data.message);
        return;
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
        <div>Reset Password</div>
      </div>

      <div className='my-5 p-5 rounded bg-white/30'>
        <div className='max-w-xl rounded bg-white/70 p-3'>
          <form onSubmit={handleSubmit(handleResetPassword)}>
            <div className='my-3'>
              <label className='block'>New Password</label>
              <input {...register("newPassword")} type='text' className='w-full rounded p-3 shadow' placeholder='Enter new password' />
            </div>
            <div className='mt-3'>
              {isLoading ?
                <button className="cursor-not-allowed px-4 py-2 rounded bg-blue-100">
                  Password is reseting...
                </button> :
                <button className="cursor-pointer px-4 py-2 rounded bg-blue-100">
                  Reset my password
                </button>
              }
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ResetPassword