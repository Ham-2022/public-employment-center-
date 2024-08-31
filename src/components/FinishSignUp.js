// src/components/FinishSignUp.js
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase-config';

const FinishSignUp = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const emailFromStorage = window.localStorage.getItem('emailForSignIn');
        const actionCode = queryParams.get('oobCode');

        if (isSignInWithEmailLink(auth, actionCode)) {
            if (emailFromStorage) {
                signInWithEmailLink(auth, emailFromStorage, actionCode)
                    .then(() => {
                        window.localStorage.removeItem('emailForSignIn');
                        setMessage('Sign-in successful!');
                    })
                    .catch((error) => {
                        setMessage(`Error: ${error.message}`);
                    });
            } else {
                setMessage('Email not found. Please try logging in again.');
            }
        } else {
            setMessage('Invalid or expired link.');
        }
    }, []);

    return (
        <div className="finish-signup-container">
            <h2>Complete Sign In</h2>
            <p>{message}</p>
        </div>
    );
};

export default FinishSignUp;
