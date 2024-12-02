import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

const LoginPage = () => {
    const { setAuth } = useContext(AuthContext); // Access setAuth from context
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setErrorMessage('Username and password are required');
            return; // Prevent redirect if fields are empty
        }

        // Simulate login process (replace this with your actual login logic)
        const token = 'some-token'; // Replace with token from successful login API call

        // Save token to localStorage and set auth context
        localStorage.setItem('accessToken', token);
        setAuth({ isAuthenticated: true, token });

        // Redirect to ProductsPage after login
        navigate('/products');
    };

    return (
        <div className="page-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin} className="form-container">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && <p>{errorMessage}</p>} {/* Display error message */}
                <button type="submit">Login</button>
            </form>
            <div className="signup-container">
                <span>Don't have an account? </span>
                <button onClick={() => navigate('/signup')} className="signup-button">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
