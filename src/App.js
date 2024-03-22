import React, { useState, useEffect } from 'react';
import Home from './Home';
import LoginForm from './LoginForm'; // Import LoginForm component
import Doctor from './Doctor.jsx'; // Corrected import path for Doctor component
import Patient from './Patient.jsx'; // Corrected import path for Patient component
// Import Patient component
import './App.css'; // Import CSS file for styling

const App = () => {
  // Define state variables for each category
  const [loggedIn, setLoggedIn] = useState(false); // Track login state
  const [userType, setUserType] = useState(null); // Track user type

  // Fetch static data from API endpoint or local JSON file
  useEffect(() => {
    // Fetch data here if needed
  }, []);

  useEffect(() => {
    // Check if the user is logged in on component mount
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userType = localStorage.getItem('userType');
    if (isLoggedIn === 'true') {
      setLoggedIn(true);
      setUserType(userType);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    // Implement logout logic here
    localStorage.removeItem('isLoggedIn'); // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('userType'); // Remove userType flag from localStorage
    setLoggedIn(false); // Update login state to false
    setUserType(null); // Update user type to null
  };

  return (
    <div className="app-container">
      {loggedIn ? (
        <div>
          {userType === 'doctor' ? (
            <Doctor />
          ) : userType === 'patient' ? (
            <Patient />
          ) : (
            <Home />
          )}
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          {/* Render LoginForm component when logged out */}
          <LoginForm onLogin={(userData) => {
            localStorage.setItem('isLoggedIn', 'true'); // Set isLoggedIn flag to true in localStorage
            localStorage.setItem('userType', userData.user_type); // Set userType in localStorage
            setLoggedIn(true);
            setUserType(userData.user_type);
          }} />
        </div>
      )}
    </div>
  );
}

export default App;
