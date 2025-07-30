import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SerenityRehabLeadGenerator from './pages/SerenityRehabLeadGenerator';
import  Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SerenitySupport from './pages/SerenitySupport';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <main className="p-6">
          <Routes>
            <Route path="/*" element={<SerenityRehabLeadGenerator />} />\
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/serenity-support" element={<SerenitySupport/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
