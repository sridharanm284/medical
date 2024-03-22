import React, { useState , useEffect } from 'react';
import './Home.css'; // Import the CSS file
import PatientData from './Components/PatientData';
import HospitalList from './Components/HospitalList';
import DoctorList from './Components/DoctorList';
import MedicineList from './Components/MedicineList';
import DiagnosisList from './Components/DiagnosisList';
import axios from 'axios';


const Doctor = ({ handleFileUpload }) => {
  const [currentPage, setCurrentPage] = useState(null);
  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const [predictionResult, setPredictionResult] = useState(null);
  const [csrfToken, setCSRFToken] = useState('');
  const [diseaseSymptoms, setDiseaseSymptoms] = useState({
    "Alzheimer's Disease": ["Memory loss", "Confusion", "Difficulty in problem-solving"],
    "Heart Disease": ["Chest pain", "Shortness of breath", "Fatigue"],
    "Hypertension": ["Headaches", "Dizziness", "Nosebleeds"],
    "Malaria or Dengue": ["Fever", "Chills", "Headache"],
    "Pneumonia": ["Cough", "Fever", "Difficulty breathing"],
    "Ringworm": ["Itchy, red, raised, scaly patches", "Circular patches"]
  });
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  useEffect(() => {
    const getCSRFToken = async () => {
      const response = await axios.get('http://localhost:8000/api/api/get-csrf-token/');
      setCSRFToken(response.data.csrfToken);
    };
    getCSRFToken();
  }, []);

  const handleSymptomCheckboxChange = (symptom) => {
    setSelectedSymptoms((prevSelected) => {
      if (prevSelected.includes(symptom)) {
        return prevSelected.filter((item) => item !== symptom);
      } else {
        return [...prevSelected, symptom];
      }
    });
  };

  const handlePredictClick = async () => {
    try {
      if (selectedSymptoms.length === 0) {
        setPredictionResult({
          normal: true,
          disease: null
        });
      } else {
        let predictedDisease = null;
        // Find diseases associated with the selected symptoms
        for (const disease of Object.keys(diseaseSymptoms)) {
          if (selectedSymptoms.some(symptom => diseaseSymptoms[disease].includes(symptom))) {
            predictedDisease = disease;
            break; // Break loop on first matching disease found
          }
        }
  
        if (predictedDisease) {
          setPredictionResult({
            normal: false,
            disease: predictedDisease
          });
        } else {
          setPredictionResult({
            normal: true,
            disease: null
          });
        }
      }
    } catch (error) {
      console.error('Error predicting:', error);
      alert('Error predicting. Please try again later.');
    }
  };
  
  
  // Function to handle card click
  const handleCardClick = (pageName) => {
    setCurrentPage(pageName);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setCurrentPage(null);
  };

  return (
    <div>
      <h2 className="patient-page-heading">Doctor Page</h2>
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

        <div className="disease-symptoms" style={{ marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)', display: 'flex' }}>
  {/* Left side: Symptoms List */}
  <div style={{ flex: '1', padding: '10px' }}>
    <h3>Symptoms List</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'transparent' }}>
      <thead>
        <tr>
          <th style={{ border: 'none' }}></th>
          <th style={{ border: 'none', textAlign: 'right' }}>
            <button onClick={handlePredictClick} style={{ fontSize: '12px' }}>Start Prediction</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.values(diseaseSymptoms).map((symptoms, diseaseIndex) => (
          <React.Fragment key={diseaseIndex}>
            {symptoms.map((symptom, symptomIndex) => (
              <tr key={symptomIndex}>
                <td style={{ border: '1px solid #ccc', padding: '8px', width: '40px' }}>
                  <input
                    type="checkbox"
                    checked={selectedSymptoms.includes(symptom)}
                    onChange={() => handleSymptomCheckboxChange(symptom)}
                  />
                </td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{symptom}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>

  {/* Right side: Prediction Result */}
  <div style={{ flex: '1', padding: '10px' }}>
    <h3>Prediction Result</h3>
    <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'transparent' }}>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #ccc', padding: '8px', width: '40px' }}>Result:</td>
          <td style={{ border: '1px solid #ccc', padding: '8px' }}>
            {predictionResult ? (
              <div className="prediction-result" style={{ color: predictionResult.normal ? 'green' : 'red' }}>
                <p>{predictionResult.normal ? 'The patient is normal.' : 'The patient has a disease.'}</p>
                {predictionResult.disease && (
                  <div>
                    <h4>Predicted Disease:</h4>
                    <p>{predictionResult.disease}</p>
                  </div>
                )}
              </div>
            ) : (
              <p>No prediction result available</p>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


        {/* Render the selected page as a popup */}
        {currentPage && (
          <div>
            <div>
             
              {/* Render components based on currentPage */}
              {currentPage === 'patient-data' && <PatientData />}
              {currentPage === 'hospital-list' && <HospitalList />}
              {currentPage === 'doctor-list' && <DoctorList />}
              {currentPage === 'medicine-list' && <MedicineList />}
              {currentPage === 'diagnosis-list' && <DiagnosisList />}
            </div>
          </div>
        )}

       
      </div>
    </div>
  );
};

export default Doctor;
