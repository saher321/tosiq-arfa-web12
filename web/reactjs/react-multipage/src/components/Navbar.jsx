import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const links = [
        {url: "/", name: "Home"},
        {url: "/blog", name: "Blog"},
        {url: "/about-us", name: "About us"},
        {url: "/contact-us", name: "Contact us"},
        {url: "/help", name: "Help"},
    ]
    const activeCss = "text-red-500";
  return (
    <div>
        <nav>
            {links.map((link, i)=>{
                return (
                    <span key={i}>
                    <NavLink className={(e) => e.isActive ? activeCss : "text-gray-400"} to={link.url}>
                        {link.name}
                    </NavLink> { "  "}
                    </span>
                )
            })}
        </nav>
    </div>
  )
}

export default Navbar