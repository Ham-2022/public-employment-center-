// src/components/Settings.js
import React, { useState } from 'react';

const Settings = () => {
    const [theme, setTheme] = useState('light');
    const [notifications, setNotifications] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showHelp, setShowHelp] = useState(false);
    const [loginActivity, setLoginActivity] = useState([
        { date: '2024-08-31', location: 'New York, NY' },
        { date: '2024-08-30', location: 'San Francisco, CA' },
    ]);

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    const handleNotificationsChange = (e) => {
        setNotifications(e.target.checked);
    };

    const handleEmailChange = () => {
        // Add email change logic
        alert('Email updated!');
    };

    const handlePasswordChange = () => {
        // Add password change logic
        alert('Password updated!');
    };

    const handleLogout = () => {
        // Add logout logic
        alert('Logged out!');
    };

    return (
        <div className="container mt-5">
            <h2>Settings</h2>
            
            <div className="mb-4">
                <h4>Appearance</h4>
                <div className="mb-3">
                    <label htmlFor="themeSelect" className="form-label">Theme</label>
                    <select 
                        id="themeSelect" 
                        className="form-select" 
                        value={theme} 
                        onChange={handleThemeChange}
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
            </div>

            <div className="mb-4">
                <h4>Notifications</h4>
                <div className="form-check mb-3">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="notificationsCheck" 
                        checked={notifications} 
                        onChange={handleNotificationsChange} 
                    />
                    <label htmlFor="notificationsCheck" className="form-check-label">
                        Enable Notifications
                    </label>
                </div>
            </div>

            <div className="mb-4">
                <h4>Security</h4>
                <button className="btn btn-secondary" onClick={() => setShowHelp(true)}>
                    Show Help
                </button>
                {showHelp && (
                    <div className="mt-3 alert alert-info">
                        <p>For security settings, please contact support.</p>
                    </div>
                )}
            </div>

            <div className="mb-4">
                <h4>Account</h4>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter new email" 
                    />
                    <button 
                        className="btn btn-primary mt-2" 
                        onClick={handleEmailChange}
                    >
                        Update Email
                    </button>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter new password" 
                    />
                    <button 
                        className="btn btn-primary mt-2" 
                        onClick={handlePasswordChange}
                    >
                        Update Password
                    </button>
                </div>
            </div>

            <div className="mb-4">
                <h4>Login Activity</h4>
                <ul className="list-group">
                    {loginActivity.map((activity, index) => (
                        <li key={index} className="list-group-item">
                            <p><strong>Date:</strong> {activity.date}</p>
                            <p><strong>Location:</strong> {activity.location}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-4">
                <button 
                    className="btn btn-danger" 
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Settings;
