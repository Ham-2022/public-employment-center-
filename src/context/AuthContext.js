// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a Context for authentication
const AuthContext = createContext();

const sampleUsers = [
    { email: 'user@example.com', password: 'password123' },
    { email: 'admin@example.com', password: 'adminpass' }
];

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (email, password) => {
        // Simple check against sample data
        const user = sampleUsers.find(user => user.email === email && user.password === password);
        if (user) {
            setIsAuthenticated(true);
            return user;
        }
        return null;
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
