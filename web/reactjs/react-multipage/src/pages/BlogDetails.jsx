import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'

export const BlogDetails = () => {
    const params = useParams();
  return (
    <div>
        <Navbar />
        BlogDetails 
        <div className='text-3xl'>{params.title}</div>
    </div>
  )
}
