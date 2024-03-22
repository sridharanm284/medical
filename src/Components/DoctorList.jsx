import React, { useState, useEffect } from 'react';

const DoctorList = ({ doctors }) => {
  return (
    <div>
      <h2>Doctor List</h2>
      <ul>
        {doctors.map((doctor, index) => (
          <li key={index}>
            <strong>{doctor.name}</strong><br />
            Specialization: {doctor.specialization}<br />
            Contact: {doctor.contact}
          </li>
        ))}
      </ul>
    </div>
  );
}

const DoctorData = ({ doctors }) => {
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
          <h3>All Doctor Data</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Specialization</th>
                <th style={thStyle}>Contact</th>
              </tr>
            </thead>
            <tbody>
              {/* Render all doctor data */}
              {doctors.map((doctor, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{doctor.name}</td>
                  <td style={tdStyle}>{doctor.specialization}</td>
                  <td style={tdStyle}>{doctor.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Static data for doctors
const staticDoctors = [
  { name: "Dr. John Doe", specialization: "Cardiology", contact: "123-456-7890" },
  { name: "Dr. Jane Smith", specialization: "Pediatrics", contact: "987-654-3210" },
  { name: "Dr. Michael Johnson", specialization: "Orthopedics", contact: "555-123-4567" },
  // Add more doctors as needed
];

const App = () => {
  return (
    <div>
      <DoctorData doctors={staticDoctors} />
    </div>
  );
}

export default App;
