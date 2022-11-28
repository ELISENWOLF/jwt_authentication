import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import { AuthProvider } from './Component/Context/AuthProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
   document.getElementById('root')
);

