import React from 'react';
import {NavLink } from 'react-router-dom';


const navbar = () => {
    return (
    <div className="container">
            <ul>
            <li><NavLink to ="/" className="" exact strict>Home</NavLink></li>
            <li><NavLink to ="/about" className="">About</NavLink></li>
            <li><NavLink to ="/services" className="">Services</NavLink></li>
            </ul>
    </div>
    )
}

export default navbar;