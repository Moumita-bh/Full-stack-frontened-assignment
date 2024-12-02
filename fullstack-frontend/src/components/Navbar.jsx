import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Optional: Include styles for the Navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li>
                    <NavLink to="/home" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        Signup
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
