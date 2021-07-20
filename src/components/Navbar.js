import React, { useState } from 'react'
import { Link } from "gatsby"
import { FiAlignJustify } from 'react-icons/fi';
import logo from '../assets/images/logo.svg'

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="SimplyRecipes" />
                    </Link>
                    <button className="nav-btn" onClick={() => setShow(!show)}>
                        <FiAlignJustify />
                    </button>
                </div>
                <div className={show ? "nav-links show-links" : "nav-links"}>
                    <Link onClick={() => setShow(false)} className="nav-link" activeClassName="active-link" to="/">Home</Link>
                    <Link onClick={() => setShow(false)} className="nav-link" activeClassName="active-link" to="/recipes">Recipes</Link>
                    <Link onClick={() => setShow(false)} className="nav-link" activeClassName="active-link" to="/tags">Tags</Link>
                    <Link onClick={() => setShow(false)} className="nav-link" activeClassName="active-link" to="/about">About</Link>
                    <div className="nav-link contact-link">
                        <Link onClick={() => setShow(false)} to="/contact" className="btn">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
