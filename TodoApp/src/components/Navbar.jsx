import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleTheme, isDarkTheme, toggleBackground, changeThemeColor, changeBackgroundColor }) => {
  return (
    <nav className='navbar'>
        <ul className='nav-list'>
            <li><Link to='/home' className='nav-link'>Home</Link></li>
            <li><Link to='/todo' className='nav-link'>Todo</Link></li>
            <li><Link to='/calendar' className='nav-link'>Calendar</Link></li>
        </ul>
        <div>
            <button onClick={toggleTheme} className='theme-toggle-btn'>
                {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
            </button>
            <button onClick={toggleBackground} className='background-toggle-btn'>
                Toggle Background
            </button>
            <div className='color-buttons'>
                <button onClick={() => changeThemeColor('blue')} className='color-btn blue'>Blue</button>
                <button onClick={() => changeThemeColor('green')} className='color-btn green'>Green</button>
                <button onClick={() => changeThemeColor('red')} className='color-btn red'>Red</button>
                <button onClick={() => changeBackgroundColor('default')} className='color-btn default'>Default</button>
                <button onClick={() => changeBackgroundColor('dark')} className='color-btn dark'>Dark</button>
                <button onClick={() => changeBackgroundColor('light')} className='color-btn light'>Light</button>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;