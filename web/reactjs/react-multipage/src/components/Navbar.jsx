import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to={"/"}>
                Home
            </NavLink> | {" "}
            <NavLink to={"/blog"}>
                Blog
            </NavLink> | {" "}
            <NavLink to={"/about-us"}>
                About us
            </NavLink> | {" "}
            <NavLink to={"/contact-us"}>
                Contact us
            </NavLink>
        </nav>
    </div>
  )
}

export default Navbar