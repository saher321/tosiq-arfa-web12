import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import NotesList from '../pages/NotesList'
import CreateNote from '../pages/CreateNote'

const Routes = () => {
    const router = createBrowserRouter([
        { path: '/', element: <NotesList /> },
        { path: '/notes/create', element: <CreateNote /> },
        { path: '*', element: <NotesList /> },
    ]);
    return (
        <RouterProvider router={router} />
    )
}
export default Routes