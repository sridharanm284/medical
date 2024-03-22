import React, { useState, useEffect } from 'react';

const HospitalData = ({ hospitals }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    zIndex: '9999',
    width: '60%',
    maxHeight: '80%',
    overflowY: 'auto',
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
          <h3>All Hospital Data</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Location</th>
                <th style={thStyle}>Contact</th>
                <th style={thStyle}>Capacity</th>
              </tr>
            </thead>
            <tbody>
              {/* Render all hospital data */}
              {hospitals.map((hospital, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{hospital.name}</td>
                  <td style={tdStyle}>{hospital.location}</td>
                  <td style={tdStyle}>{hospital.contact}</td>
                  <td style={tdStyle}>{hospital.capacity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Static data for hospitals
const staticHospitals = [
  { name: "City Hospital", location: "New York", contact: "123-456-7890", capacity: 200 },
  { name: "Community Hospital", location: "Los Angeles", contact: "987-654-3210", capacity: 150 },
  { name: "General Hospital", location: "Chicago", contact: "555-123-4567", capacity: 300 },
  // Add more hospitals as needed
];

const App = () => {
  return (
    <div>
      <HospitalData hospitals={staticHospitals} />
    </div>
  );
}

export default App;
