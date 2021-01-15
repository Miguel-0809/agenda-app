import React from 'react'
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
                    <li><a className="active" href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </nav>

            <div className="content">
            </div>

        </div>


    )
}
