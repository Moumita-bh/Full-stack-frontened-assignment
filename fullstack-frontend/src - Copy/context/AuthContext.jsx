import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        isAuthenticated: false,
        token: localStorage.getItem('accessToken') || null,
    });

    useEffect(() => {
        // Optional: Check authentication status on page load
        const token = localStorage.getItem('accessToken');
        if (token) {
            setAuth({ isAuthenticated: true, token });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
