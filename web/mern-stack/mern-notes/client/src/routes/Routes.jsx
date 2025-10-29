import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import NotesList from '../pages/NotesList'
import CreateNote from '../pages/CreateNote'
import DetailNote from '../pages/DetailNote'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'

const Routes = () => {
    const router = createBrowserRouter([
        { path: '/', element: <NotesList /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> },
        { path: '/notes/create', element: <CreateNote /> },
        { path: '/notes/edit/:id', element: <DetailNote /> },
        { path: '*', element: <NotesList /> },
    ]);
    return (
        <RouterProvider router={router} />
    )
}
export default Routes