import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Todo from './pages/Todo';
import CalendarPage from './pages/CalendarPage';
import CalendarComponent from './components/Calender';

import './index.css';

function App() {
    const [date, setDate] = useState(new Date());
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [isBackgroundImage, setIsBackgroundImage] = useState(false);
    const [themeColor, setThemeColor] = useState('blue');
    const [backgroundColor, setBackgroundColor] = useState('default');

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const toggleBackground = () => {
        setIsBackgroundImage(!isBackgroundImage);
    };

    const changeThemeColor = (color) => {
        setThemeColor(color);
    };

    const changeBackgroundColor = (color) => {
        setBackgroundColor(color);
    };

    return (
        <Router>
            <Navbar 
                toggleTheme={toggleTheme} 
                isDarkTheme={isDarkTheme} 
                toggleBackground={toggleBackground} 
                changeThemeColor={changeThemeColor} 
                changeBackgroundColor={changeBackgroundColor} 
            />
            <div className={`${isDarkTheme ? 'dark-theme' : 'light-theme'} ${isBackgroundImage ? 'background-image' : ''} ${themeColor}-theme ${backgroundColor}-background`}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                </Routes>
                <CalendarComponent date={date} setDate={setDate} />
            </div>
            <Footer />
        </Router>
    );
}

export default App;
