// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const sampleUsers = [
    { email: 'user@example.com', password: 'password123' },
    { email: 'admin@example.com', password: 'adminpass' }
];

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = sampleUsers.find(user => user.email === email && user.password === password);
        if (user) {
            login(email, password); // Authenticate user
            navigate('/home');
        } else {
            setError('Invalid email or password. Please check your credentials or register a new account.');
        }
    };

    const handleRegister = () => {
        const userExists = sampleUsers.some(user => user.email === email);
        if (userExists) {
            setError('User already exists. Please log in or use a different email.');
        } else {
            sampleUsers.push({ email, password });
            login(email, password); // Authenticate newly registered user
            navigate('/home');
        }
    };

    const handleForgotPassword = () => {
        const userExists = sampleUsers.some(user => user.email === email);
        if (userExists) {
            setError('Password reset email sent. Please check your inbox.');
        } else {
            setError('Email not found. Please register or use a different email.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>{isRegistering ? 'Register' : 'Login'}</h2>
                {error && <p className="error-message">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={isRegistering ? handleRegister : handleLogin}>
                    {isRegistering ? 'Register' : 'Login'}
                </button>
                <button onClick={() => setIsRegistering(!isRegistering)}>
                    {isRegistering ? 'Already have an account? Login' : 'Create an account'}
                </button>
                <button onClick={() => setShowForgotPassword(!showForgotPassword)}>
                    Forgot Password?
                </button>
                {showForgotPassword && (
                    <div>
                        <button onClick={handleForgotPassword}>Send Password Reset Email</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
