import React, { useState, useEffect } from 'react';

const PatientData = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [additionalData, setAdditionalData] = useState([]);

  // Sample patient data
  const samplePatientData = [
    { id: 1, name: 'Arun', age: 30, gender: 'Male', condition: 'Hypertension' },
    { id: 2, name: 'anushiya', age: 25, gender: 'Female', condition: 'Ringworm' },
    { id: 3, name: 'priya', age: 40, gender: 'Female', condition: 'Alzheimers Disease' },
    { id: 4, name: 'Prakesh', age: 35, gender: 'Male', condition: 'Heart Disease' },
      { id: 5, name: 'dharshini', age: 28, gender: 'Female', condition: 'Dengue' },
      { id: 6, name: 'sanjay', age: 15, gender: 'Male', condition: 'Pneumonia' },
    // Add more sample data as needed
  ];

  // Function to load more data into the popup
  const loadMoreData = () => {
    // Example: Load additional patient data from an API
    const additionalDataFromAPI = [
      { id: 4, name: 'Bob Williams', age: 35, gender: 'Male', condition: 'Arthritis' },
      { id: 5, name: 'Emma Davis', age: 28, gender: 'Female', condition: 'Migraine' },
      // Add more additional data as needed
    ];

    setAdditionalData(additionalDataFromAPI);
  };

  useEffect(() => {
    setShowPopup(true); // Set showPopup to true when component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '10px', // Increased border radius for a larger card
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    zIndex: '9999',
    width: '60%', // Increased width for a larger card
    maxHeight: '80%', // Added max height to prevent overflow
    overflowY: 'auto', // Added overflowY to enable scrolling if needed
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  };

  const thStyle = {
    backgroundColor: '#f2f2f2',
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
  };

  const tdStyle = {
    border: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
  };

  return (
    <div>
      {showPopup && (
        <div style={popupStyle}>
          <div style={closeButtonStyle} onClick={() => setShowPopup(false)}>Close [X]</div>
          <h3>All Patient Data</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Age</th>
                <th style={thStyle}>Gender</th>
                <th style={thStyle}>Condition</th>
              </tr>
            </thead>
            <tbody>
              {/* Render all patient data */}
              {[...samplePatientData, ...additionalData].map(patient => (
                <tr key={patient.id}>
                  <td style={tdStyle}>{patient.id}</td>
                  <td style={tdStyle}>{patient.name}</td>
                  <td style={tdStyle}>{patient.age}</td>
                  <td style={tdStyle}>{patient.gender}</td>
                  <td style={tdStyle}>{patient.condition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PatientData;
