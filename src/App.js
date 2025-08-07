import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages/components
import SerenityRehabLeadGenerator from './pages/SerenityRehabLeadGenerator';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SerenitySupport from './pages/SerenitySupport';
import SerenityLogin from './Assets/SerenityLogin';
import SerenityConnect from './pages/SerenityConnect';
import TakeHome from './pages/TakeHome';
import Personal from './pages/Personal';
import SerenityPatientReport from './Components/SerenityPatientReport';
import SerenityGames from './Components/SerenityGames';
import PatientSubmissionHistory from './pages/PatientSubmissionHistory';


function App() {
  return (
    
    <Router>
      <Routes>
        {/* Main Site Pages */}
        <Route path="/" element={<SerenityRehabLeadGenerator />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/serenity-login" element={<SerenityLogin />} />
        <Route path="/serenity-support" element={<SerenitySupport />} />
        <Route path="/serenity-connect" element={<SerenityConnect />} />
        <Route path="/take-home" element={<TakeHome />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/patient-report" element={<SerenityPatientReport />} />
        <Route path="/serenity-games" element={<SerenityGames/>} />
         <Route path="/submission-history" element={<PatientSubmissionHistory />} />
          
        
        

        {/* Fallback for unknown routes */}
        <Route path="*/" element={<SerenityRehabLeadGenerator />} />
      </Routes>
    </Router>
  );
  
  


}

export default App;
