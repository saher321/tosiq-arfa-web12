import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { VERIFY_OTP } from '../../resources/api.js'

const VerifyOtp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleVerifyOtp = async (data) => {
    if (!data.otp) {
      toast.error("OTP field is required!", { duration: 3000 })
      return;
    }

    setIsLoading(true)
    try {
      const newData = {
        email: localStorage.getItem("forgotUserEmail"),
        otp: data.otp
      }
      const response = await axios.post(VERIFY_OTP, newData);
      if (response.data.status == true) {
        toast.success(response.data.message)
        return;
        // navigate('/reset-password')
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
        <div>Verify OTP</div>
      </div>

      <div className='my-5 p-5 rounded bg-white/30'>
        <div className='max-w-xl rounded bg-white/70 p-3'>
          <form onSubmit={handleSubmit(handleVerifyOtp)}>
            <div className='my-3'>
              <label className='block'>OTP</label>
              <input {...register("otp")} type='OTP' className='w-full rounded p-3 shadow' placeholder='Enter OTP' />
            </div>
            <div className='mt-3'>
              {isLoading ?
                <button className="cursor-not-allowed px-4 py-2 rounded bg-blue-100">
                  Verifying OTP...
                </button> :
                <button className="cursor-pointer px-4 py-2 rounded bg-blue-100">
                  Verify OTP
                </button>
              }
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default VerifyOtp