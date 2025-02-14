import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Info from './pages/Info';
import Todo from './pages/Todo';

import './index.css';

function App() {
    return (
        <Router>
            <div className="flex-wrapper">
            <Navbar />
                <Routes>
                    <Route path="/" element={<Todo />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/todo" element={<Todo />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
