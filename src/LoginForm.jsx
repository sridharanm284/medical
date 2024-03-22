import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Doctor from './Doctor.jsx'; // Corrected import path for Doctor component
import Patient from './Patient.jsx'; // Corrected import path for Patient component



function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('doctor');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let payload = {
        username,
        password,
        user_type: userType,
      };

      // Include user_id in the payload if userType is 'doctor' or 'patient'
      if (userType === 'doctor' || userType === 'patient') {
        payload.user_id = userId;
      }

      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      // Call the onLogin callback with the user data received from the backend
      onLogin(data);
      setLoggedIn(true); // Set login status to true upon successful login
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Render the Home component if logged in, otherwise render the login form
  return (
    <div>
      {loggedIn ? (
        // Redirect based on user type
        userType === 'doctor' ? <Doctor /> : <Patient />
      ) : (
        <div className="login-container">
          <div className="login-content">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </label>
              <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <label>
                User Type:
                <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                  <option value="doctor">Doctor</option>
                  <option value="patient">Patient</option>
                </select>
              </label>
              {/* Render the ID input field based on the selected user type */}
              {userType === 'doctor' && (
                <label>
                  Doctor ID:
                  <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
                </label>
              )}
              {userType === 'patient' && (
                <label>
                  Patient ID:
                  <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
                </label>
              )}
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
