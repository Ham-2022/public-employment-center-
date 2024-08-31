// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center mt-5 py-3 bg-light">
            <p>&copy; 2024 Public Employment Center. All rights reserved.</p>
            <p>
                <a href="/privacy-policy">Privacy Policy</a> | 
                <a href="/terms-of-service"> Terms of Service</a>
            </p>
        </footer>
    );
};

export default Footer;
