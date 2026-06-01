import React from 'react'
import Home from "./Home"
import About from "./About";
import Dashbord  from "./Dashbord";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to='/' >Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>about</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard'>Dashboard</NavLink>
            </li>
        </ul>
      
    </div>
  )
}

export default Navbar
