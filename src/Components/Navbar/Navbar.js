import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiXCircle } from 'react-icons/hi'
import { FaGraduationCap } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div id='navbar'>
            <nav>
                <div className='logo'>
                    <FaGraduationCap className='logo-icon' />
                    <Link to="/" class="Edygrad">Edygrad</Link>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    {menuOpen ? (
                        <HiXCircle id="icons" />
                    ) : (
                        <HiMenu id="icons" />
                    )}
                </div>
                <ul className={`menu-toggle ${menuOpen ? 'open' : ''}`}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about' >About</Link></li>
                    <li><Link to='/teacher' >Teacher</Link></li>
                    <li><Link to='/course' >Course</Link></li>
                    <li><Link to='/Review' >Review</Link></li>
                    <li><Link to='/contact' >Contact</Link></li>
                    <li><Link to='/bhanu_page' >Bhanu_page</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar





















































