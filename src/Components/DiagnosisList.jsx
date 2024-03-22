import React, { useState, useEffect } from 'react';

const DiagnosisData = ({ diagnoses }) => {
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

  return (
    <div>
      {showPopup && (
        <div style={popupStyle}>
          <div style={closeButtonStyle} onClick={() => setShowPopup(false)}>Close [X]</div>
          <h3>All Diagnosis Data</h3>
          <ul>
            {/* Render all diagnosis data */}
            {diagnoses.map((diagnosis, index) => (
              <li key={index}>{diagnosis.name}: {diagnosis.description}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Static data for diagnoses
const staticDiagnoses = [
  { name: "Common Cold", description: "A viral infectious disease of the upper respiratory tract" },
  { name: "Influenza", description: "A viral infection that attacks your respiratory system" },
  { name: "Pneumonia", description: "An infection that inflames the air sacs in one or both lungs" },
  // Add more diagnoses as needed
];

const App = () => {
  return (
    <div>
      <DiagnosisData diagnoses={staticDiagnoses} />
    </div>
  );
}

export default App;
