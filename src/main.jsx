import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AOS from 'aos'; // Animate On Scroll library
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
