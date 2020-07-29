import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    return(
        <nav className = "grey darken-4">
            <div className="nav-wrapper container">
            <NavLink to = "/store" className="brand-logo">Merch</NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to = "/store">Store</NavLink></li>
                <li><NavLink to = "/cart">Cart</NavLink></li>
            </ul>
            </div>
        </nav>
    )
}