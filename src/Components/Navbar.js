import React from 'react';
import {NavLink } from 'react-router-dom';


const navbar = () => {
    return (
    <div className="clearfix">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
            <li className="nav-item"><NavLink to ="/" className="nav-link" exact strict>Home</NavLink></li>
            <li className="nav-item"><NavLink to ="/about" className="nav-link">About</NavLink></li>
            <li className="nav-item"><NavLink to ="/services" className="nav-link">Services</NavLink></li>
            </ul>
         </nav>
    </div>
    )
}

export default navbar;