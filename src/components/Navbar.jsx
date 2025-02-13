import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='nav-list'>
            <li><Link to='/home' className='nav-link'>Home</Link></li>
            <li><Link to='/todo' className='nav-link'>Todo</Link></li>
            <li><Link to='/info' className='nav-link'>Info</Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;