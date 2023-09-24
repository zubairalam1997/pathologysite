import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import BookTest from './components/BookTest';

import reportWebVitals from './reportWebVitals';
import PackageBlockTwo from './components/PackageBlockTwo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/BookAppointment" element={<BookTest/>} />
      <Route exact path="/TestList" element={<PackageBlockTwo />} />
    </Routes>
    </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
