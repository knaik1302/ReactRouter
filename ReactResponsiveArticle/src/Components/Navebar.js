import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function Navebar() {
    return (
        <div>
            <nav>
                <h1>MY ARTICLE</h1>
                    <NavLink exact to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <div className="toggle-button" >
                        <button 
                            className="btn" 
                            onClick={() => document.getElementById("mySidenav").style.width = "250px"}>
                                <AiOutlineMenuFold />
                        </button>
                    </div>
            </nav>
            <div className="sidenav" id="mySidenav">
                <div className="toggle-close-button">
                            <button 
                                className="btn" 
                                onClick={() =>document.getElementById("mySidenav").style.width = "0"}>
                                    <AiOutlineClose/>
                            </button>
                </div>
                <div className="container">
                    <NavLink exact to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink> 
                </div>  
            </div>
        </div>
    )
}

export default Navebar
