import React, { useState } from 'react';
import './Home.css'; // Import the CSS file
import PatientData from './Components/PatientData';
import HospitalList from './Components/HospitalList';
import DoctorList from './Components/DoctorList';
import MedicineList from './Components/MedicineList';
import DiagnosisList from './Components/DiagnosisList';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(null);

  // Function to handle card click
  const handleCardClick = (pageName) => {
    setCurrentPage(pageName);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setCurrentPage(null);
  };

  return (
    <div className="container">
      <h1>Machine Learning Based Smart Health Care Management Systems </h1>
      <div className="card-container">
        {/* Patient Data Card */}
        <div className="card patient-data" onClick={() => handleCardClick('patient-data')}>
          <h2>Patient Data</h2>
          <p>View and manage patient data</p>
          <span>Click Here</span>
        </div>

        {/* Hospital List Card */}
        <div className="card hospital-list" onClick={() => handleCardClick('hospital-list')}>
          <h2>Hospital List</h2>
          <p>Explore hospitals in your area</p>
          <span>Click Here</span>
        </div>

        {/* Doctor List Card */}
        <div className="card doctor-list" onClick={() => handleCardClick('doctor-list')}>
          <h2>Doctor List</h2>
          <p>Find qualified doctors near you</p>
          <span>Click Here</span>
        </div>

        {/* Medicine List Card */}
        <div className="card medicine-list" onClick={() => handleCardClick('medicine-list')}>
          <h2>Medicine List</h2>
          <p>Discover medications and treatments</p>
          <span>Click Here</span>
        </div>

        {/* Diagnosis List Card */}
        <div className="card diagnosis-list" onClick={() => handleCardClick('diagnosis-list')}>
          <h2>Diagnosis List</h2>
          <p>Explore common diagnoses and symptoms</p>
          <span>Click Here</span>
        </div>
      </div>

      {/* Render the selected page as a popup */}
      {currentPage && (
        <div className="popup-content">
        <button className="close-btn" onClick={handleClosePopup}>
          {/* Add your close icon here */}
          <img src="close-icon.png" alt="Close" />
        </button>
        {currentPage === 'patient-data' && <PatientData />}
        {currentPage === 'hospital-list' && <HospitalList />}
        {currentPage === 'doctor-list' && <DoctorList />}
        {currentPage === 'medicine-list' && <MedicineList />}
        {currentPage === 'diagnosis-list' && <DiagnosisList />}
      </div>
      
      )}
    </div>
  );
}

export default Home;
