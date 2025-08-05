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
import PatientReport from './pages/PatientReport';
import SerenityPatientReport from './Components/SerenityPatientReport';

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

        {/* Patient Portal Routes (all handled by PatientReport) */}
        <Route path="/dashboard" element={<PatientReport />} />
        <Route path="/calendar" element={<PatientReport />} />
        <Route path="/patient-report" element={<PatientReport />} />
        <Route path="/take-some" element={<PatientReport />} />
        <Route path="/doctors" element={<PatientReport />} />
        <Route path="/settings" element={<PatientReport />} />
        <Route path="/analytics" element={<PatientReport />} />
        <Route path="/accounts" element={<PatientReport />} />
        <Route path="/help" element={<PatientReport />} />

        {/* Special standalone route */}
        <Route path="/serenity-report-patient" element={<SerenityPatientReport />} />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<SerenityRehabLeadGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
