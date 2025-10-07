import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import User from './pages/user/user.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user" element={<User />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
