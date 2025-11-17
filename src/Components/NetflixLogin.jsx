// Components/NetflixLogin.jsx
import React, { useState } from 'react';
import Modal from './Modal';
import UserPage from './UserPage';
import AdminPage from './AdminPage';
import './NetflixLogin.css';

function NetflixLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [currentPage, setCurrentPage] = useState('login');
    const [isLoading, setIsLoading] = useState(false);

    const adminCredentials = { username: 'admin', password: '12345' };
    const userCredentials = { username: 'user', password: '00000' };

    const handleLogin = (e) => {
        e.preventDefault();
        
        if (!username || !password) {
            alert('Please enter both username and password');
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            
            if (username === adminCredentials.username && password === adminCredentials.password) {
                setModalMessage('Welcome Admin!');
                setShowModal(true);
                
                setTimeout(() => {
                    setShowModal(false);
                    setCurrentPage('admin');
                }, 2000);
                
            } else if (username === userCredentials.username && password === userCredentials.password) {
                setModalMessage('Welcome User!');
                setShowModal(true);
                
                setTimeout(() => {
                    setShowModal(false);
                    setCurrentPage('user');
                }, 2000);
                
            } else {
                alert('Invalid credentials! Please use:\nAdmin - admin/admin123\nUser - user/user123');
            }
        }, 1000);
    };

    const handleLogout = () => {
        setCurrentPage('login');
        setUsername('');
        setPassword('');
    };

    if (currentPage === 'user') {
        return <UserPage onLogout={handleLogout} />;
    }

    if (currentPage === 'admin') {
        return <AdminPage onLogout={handleLogout} />;
    }

    return (
        <div className="netflix-login-container">
            <div className="background-wrapper">
                <div className="gradient-overlay"></div>
            </div>

            <header className="login-header">
                <div className="logo">NETFLIX</div>
            </header>

            <div className="login-form-container">
                <form className="login-form" onSubmit={handleLogin}>
                    <h1>Sign In</h1>
                    
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-input"
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="login-button"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </button>

                    <div className="login-help">
                        <div className="remember-me">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <a href="#" className="help-link">Need help?</a>
                    </div>

                    <div className="signup-section">
                        <p>New to Netflix? <a href="#" className="signup-link">Sign up now</a>.</p>
                    </div>

                   
                </form>
            </div>

            <Modal show={showModal} close={() => setShowModal(false)}>
                <h2>{modalMessage}</h2>
                <p>Redirecting...</p>
            </Modal>
        </div>
    );
}

export default NetflixLogin; // ✅ Make sure this is default export