import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='head'>
        <div className="container grid nav-grid">
            <div className="logo">
                <h1>VisitWorld</h1>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/"/>Home</li>
                    <li><NavLink to="/about"/>About</li>
                    <li><NavLink to="/country"/>Country</li>
                    <li><NavLink to="/contact"/>Contact</li>
                    
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header