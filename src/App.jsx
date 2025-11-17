// App.js (with React Router)
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import NetflixLogin from './components/NetflixLogin';
import UserPage from './components/UserPage';
import AdminPage from './components/AdminPage';
import './App.css';

function App() {
    return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<NetflixLogin />} />
                    <Route path="/login" element={<NetflixLogin />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                </Routes>
            </div>
    );
}

export default App;