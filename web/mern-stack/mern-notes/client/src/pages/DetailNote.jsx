import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { NavLink, useNavigate, useParams } from "react-router";
import { NOTE, UPDATE_NOTE } from "../resources/api";

const DetailNote = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const detailNote = async () => {
      try {
        const result = await axios.get(`${NOTE}/${params.id}`);
        if (result) {
          reset(result.data.note)
        } else {
          toast.error(success.data.message, { duration: 3000 });
        }
      } catch (error) {
        toast.error("Something went wrong!", { duration: 3000 });
      } finally {
        setIsLoading(false);
      }
    };
    detailNote();
  }, [params.id]);

  const handleUpdateNote = async (data) => {

    try {
      const success = await axios.patch(`${UPDATE_NOTE}/${params.id}`, data);
      if (success) {
        setIsLoading(true)
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
        <div>Detail Note</div>
        <div>
          <NavLink className="px-4 py-1 rounded bg-blue-100" to={"/"}>
            All Notes
          </NavLink>
        </div>
      </div>

      <div className="my-5 p-5 rounded bg-white/30">
        <div className="max-w-xl rounded bg-white/70 p-3">
          <form onSubmit={handleSubmit(handleUpdateNote)}>
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
                  Updating...
                </button> :
                <button className="cursor-pointer px-4 py-2 rounded bg-blue-100">
                  Update
                </button>
              }
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DetailNote;
