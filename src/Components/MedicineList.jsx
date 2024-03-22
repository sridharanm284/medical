import React, { useState, useEffect } from 'react';

const MedicineData = ({ medicines }) => {
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
          <h3>All Medicine Data</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Dosage</th>
              </tr>
            </thead>
            <tbody>
              {/* Render all medicine data */}
              {medicines.map((medicine, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{medicine.name}</td>
                  <td style={tdStyle}>{medicine.type}</td>
                  <td style={tdStyle}>{medicine.dosage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Static data for medicines
const staticMedicines = [
  { name: "Paracetamol", type: "Pain reliever", dosage: "500mg" },
  { name: "Amoxicillin", type: "Antibiotic", dosage: "250mg" },
  { name: "Loratadine", type: "Antihistamine", dosage: "10mg" },
  // Add more medicines as needed
];

const App = () => {
  return (
    <div>
      <MedicineData medicines={staticMedicines} />
    </div>
  );
}

export default App;
