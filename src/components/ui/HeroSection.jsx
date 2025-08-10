import React from 'react'
import { NavLink } from 'react-router-dom'

function HeroSection() {
  return (
    <main>
        <div className='hero-section container grid grid-two-cols'>
            <div className="content">
                <h1 className='heading'>This isabout Us</h1>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum ea suscipit quaerat soluta facere! Minus 
                    autem voluptatum eum fugit rem. A veniam possimus eos, harum velit aperiam saepe distinctio.</p>
                    <NavLink to="/about"><button>About Us</button></NavLink>
            </div>
            <div className="image">
                <img src="/images/hero-img.png" alt="" srcset="" className='banner-img' />
            </div>
        </div>
    </main>
  )
}

export default HeroSection