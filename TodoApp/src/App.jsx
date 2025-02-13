import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Info from './pages/Info';
import Todo from './pages/Todo';

import './index.css';

function App() {
    const [date, setDate] = useState(new Date());

    return (
        <Router>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Todo />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/todo" element={<Todo />} />
                </Routes>
            <Footer />
        </Router>
    );
}

export default App;
