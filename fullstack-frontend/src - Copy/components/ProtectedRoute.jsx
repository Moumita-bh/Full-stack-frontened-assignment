import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import context

const ProtectedRoute = ({ children }) => {
    const { auth } = useContext(AuthContext); // Access auth from context

    // If auth is not loaded or if user is not authenticated, redirect to login
    if (!auth || !auth.isAuthenticated) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    return children; // Render children (products page) if authenticated
};

export default ProtectedRoute;



