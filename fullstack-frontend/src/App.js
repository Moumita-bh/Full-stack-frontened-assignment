import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage'; // Add HomePage component
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar'; // Add Navbar component
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar /> {/* Add the Navbar component */}
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/login" />} // Redirect to login page by default
                    />
                    <Route
                        path="/home"
                        element={<HomePage />} // Add Home route
                    />
                    <Route
                        path="/login"
                        element={<LoginPage />} // Public route for login
                    />
                    <Route
                        path="/signup"
                        element={<SignupPage />} // Public route for signup
                    />
                    <Route
                        path="/products"
                        element={
                            <ProtectedRoute>
                                <ProductsPage /> {/* Protected route for products */}
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
