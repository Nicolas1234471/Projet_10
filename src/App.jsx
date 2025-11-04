import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from './features/auth/authSlice';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import User from './pages/user/user.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';

function App() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        if (storedToken && !token) {
            dispatch(getUserProfile());
        }
    }, [dispatch, token]);

    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/user"
                        element={
                            <PrivateRoute>
                                <User />
                            </PrivateRoute>
                        }
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
