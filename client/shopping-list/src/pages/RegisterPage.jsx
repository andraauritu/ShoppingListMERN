//You need to create a registration page in your React application. This page should have a form where users can enter their username and password, and a button to submit the form. When the form is submitted, it should make a POST request to the /register endpoint with the username and password.


// Path: client/shopping-list/src/pages/RegisterPage.jsx
import { useState } from 'react';
import '../App.css';
import registerRequest from '../api/registerRequest';

export const RegisterPage = () => {
    const [username, setUsername] = useState(''); // Add username state
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (event) => {
        console.log('handleRegister called'); // Add this line
        event.preventDefault();

        try {
            console.log('Register attempted'); // Add this line
            const response = await registerRequest(username, password);
            console.log('Full response:', response);
        } catch (error) {
            setError(error.message);
            console.error('Register failed:', error);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <div style={{ color: 'red' }}>{error}</div>
            <form onSubmit={handleRegister}>
                <input
                    type="text" // Change to text input for username
                    placeholder="Username" // Add a placeholder
                    name="username" // Add a name attribute
                    value={username} // Use username state
                    onChange={(e) => setUsername(e.target.value)} // Update username state
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
