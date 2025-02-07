import React from 'react'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='nav-list'>
            <li ><a className='nav-link' href='/home'>Home</a></li>
            <li ><a className='nav-link' href='/todo'>Todo-list</a></li>
        </ul>
    </nav>
  )
}

export default Navbar