import React from 'react';
import {NavLink} from 'react-router-dom';

const sidebar = () => {
    return (
        <React.Fragment>
            <ul>
            <li>
            <NavLink to="/ServicesJs/dashboard">
                Dashboard
            </NavLink>
            </li>
            <li><NavLink to="/ServicesJs/associates">
                Associates
            </NavLink>
            </li>
            <li><NavLink to="/ServicesJs/clients">
            Clients
            </NavLink>
            </li>
            </ul>
        </React.Fragment>
    )
}

export default sidebar;