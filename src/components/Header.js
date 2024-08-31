// src/components/Header.js

import { faBriefcase, faCog, faComments, faHome, faSignInAlt, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth for authentication
import './Header.css';

const Header = () => {
    const { isAuthenticated, logout } = useAuth();

    const handleLoginLogout = () => {
        if (isAuthenticated) {
            logout();
        } else {
            // Navigate to login page if not authenticated
            window.location.href = '/login';
        }
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img src={require('../images/logo.png')} alt="Public Employment Center Logo" className="logo" />
                <h1>Public Employment Center</h1>
            </div>
            <nav>
                <ul className="nav-list">
                    <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                    <li><Link to="/jobs"><FontAwesomeIcon icon={faBriefcase} /> Jobs</Link></li>
                    <li><Link to="/people"><FontAwesomeIcon icon={faUsers} /> People</Link></li>
                    <li><Link to="/assign"><FontAwesomeIcon icon={faBriefcase} /> Assign Jobs</Link></li>
                    <li><Link to="/reassign"><FontAwesomeIcon icon={faBriefcase} /> Reassign Jobs</Link></li>
                    <li><Link to="/salary"><FontAwesomeIcon icon={faBriefcase} /> Process Salary</Link></li>
                    <li><Link to="/settings"><FontAwesomeIcon icon={faCog} /> Settings</Link></li>
                    <li><Link to="/feedback"><FontAwesomeIcon icon={faComments} /> Feedback</Link></li>
                    <li>
                        <Link to="#" className="nav-list-link" onClick={handleLoginLogout}>
                            <FontAwesomeIcon icon={isAuthenticated ? faSignOutAlt : faSignInAlt} />
                            {isAuthenticated ? ' Logout' : ' Login'}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
