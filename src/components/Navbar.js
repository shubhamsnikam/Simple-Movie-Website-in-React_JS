import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='main'>
       <nav class="navbar">
        <div class="navbar-brand">
            <a href="#">Panchvati Cinema</a>
        </div>
        <div class="navbar-toggle" id="navbar-toggle">
            <i class="fas fa-bars"></i>
        </div>
        <ul class="navbar-menu" id="navbar-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#movie">Movies</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
            
        </ul>
    </nav>

    </div>
  )
}

export default Navbar
