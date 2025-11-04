import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router'
import { CREATE_NOTE } from '../resources/api';

const CreateNote = () => {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const handleSaveNote = async (data) => {
    if (!data.title) {
      toast.error("Title field is required!", { duration: 3000 })
      return;
    } else if (!data.description) {
      toast.error("Description field is required!", { duration: 3000 })
      return;
    }

    setIsLoading(true)
    try {
      const success = await axios.post(CREATE_NOTE, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`
          }
        });
      if (success) {
        toast.success(success.data.message, { duration: 3000 })
        navigate('/')
      } else {
        toast.error(success.data.message, { duration: 3000 })
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
        <div>Create Note</div>
        <div>
          <NavLink
            className="px-4 py-1 rounded bg-blue-100"
            to={"/"}
          >
            All Notes
          </NavLink>
        </div>
      </div>

      <div className='my-5 p-5 rounded bg-white/30'>
        <div className='max-w-xl rounded bg-white/70 p-3'>
          <form onSubmit={handleSubmit(handleSaveNote)}>
            <div>
              <label className='block'>Title</label>
              <input {...register("title")} className='w-full rounded p-3 shadow' placeholder='Enter title' />
            </div>
            <div className='my-3'>
              <label className='block'>Description</label>
              <textarea {...register("description")} className='w-full rounded p-3 shadow' placeholder='Enter description'></textarea>
            </div>
            <div>
              {isLoading ?
                <button className="cursor-not-allowed px-4 py-2 rounded bg-blue-100">
                  Saving...
                </button> :
                <button className="cursor-pointer px-4 py-2 rounded bg-blue-100">
                  Save Note
                </button>
              }
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateNote