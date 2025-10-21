import moment from 'moment/moment'
import React from 'react'
import toast from 'react-hot-toast';
import { DELETE_NOTE } from '../resources/api';
import axios from 'axios';

const NotesItem = ({ note, setNotes }) => {

    const handleDelete = async (e, id) => {
        e.preventDefault();
        if(!window.confirm("Are your sure you want to delete this?")) return;
        
        try {
            const result = await axios.delete(`${DELETE_NOTE}/${id}`)
            if (result) {
                setNotes((prev) => prev.filter((note) => note._id !== id))
                toast.success(result.data.message)
            } else {
                toast.error(result.data.message)
            }
        } catch (error) {
            toast.error("Something went wrong")
        }

    }
    return (
        <div className='bg-white p-4 rounded'>
            <div>
                {note.title}
            </div>
            <div className='text-gray-600 h-56 overflow-y-auto'>
                {note.description}
            </div>
            <div className='flex items-center justify-between text-red-500'>
                <div className='text-gray-600 text-[11px] italic'>
                    {moment(note.updatedAt).format('LLL')}
                </div>
                <div>
                    <button className='cursor-pointer' onClick={(e) => handleDelete(e, note._id)}>Delete</button>
                </div>    
            </div>
        </div>
    )
}

export default NotesItem