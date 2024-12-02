import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();

        if (!username || !password || !confirmPassword) {
            setErrorMessage('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        // Simulate signup (replace with actual API logic)
        const token = 'some-token'; // Replace with token from successful signup

        // Save token to localStorage
        localStorage.setItem('accessToken', token);

        // Redirect to login page after signup
        navigate('/login');
    };

    return (
        <div className="page-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup} className="form-container">
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errorMessage && <p>{errorMessage}</p>} {/* Display error message */}
                <button type="submit">Sign Up</button>
            </form>
            <div className="login-container">
                <span>Already have an account? </span>
                <button onClick={() => navigate('/login')} className="login-button">
                    Login
                </button>
            </div>
        </div>
    );
};

export default SignupPage;
