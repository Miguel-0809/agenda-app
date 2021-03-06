import React from 'react'
import {Link } from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    My Agenda</div>
                <input type="checkbox" id="click" />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars" />
                </label>
                <ul>
                        <li><Link to="/agenda-app/"><a className="active">Home</a></Link></li>
                        <li><Link to="/agenda-app/about"><a>About</a></Link></li>
                        <li><Link to="/agenda-app/login"><a>Login</a></Link></li>
                        <li><Link to="/agenda-app/contact"><a>Contact</a></Link></li>
                </ul>
            </nav>

            <div className="content">
            </div>

        </div>


    )
}
