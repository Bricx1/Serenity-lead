import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Get the container
const container = document.getElementById('root');

// Only render if root container is found
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("❌ Root container not found. Make sure <div id='root'></div> exists in index.html.");
}

reportWebVitals();
