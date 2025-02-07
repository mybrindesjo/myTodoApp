import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Todo from './pages/Todo';

import './index.css';

function App() {
    return (
        <Router>
            <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/todo" element={<Todo />} />
              </Routes>
            <Footer />
        </Router>
    );
}

export default App;
