// src/mockAuth.js
let users = []; // Mock user database

export const registerUser = (email, password) => {
    const user = users.find(user => user.email === email);
    if (user) {
        throw new Error('User already exists');
    }
    users.push({ email, password });
    return { email };
};

export const loginUser = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        throw new Error('Invalid username or password');
    }
    return { email };
};

export const resetPassword = (email) => {
    const user = users.find(user => user.email === email);
    if (!user) {
        throw new Error('User not found');
    }
    // Simulate sending a reset email
    console.log(`Password reset email sent to ${email}`);
};
