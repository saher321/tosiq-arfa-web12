import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blog from './pages/Blog.jsx'
import About from './pages/About.jsx'
import Contactus from './pages/Contactus.jsx'
import Page404 from './pages/Page404.jsx'
const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/blog", element: <Blog />},
  {path: "/about-us", element: <About />},
  {path: "/contact-us", element: <Contactus />},
  {path: "*", element: <Page404 />},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
