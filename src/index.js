import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './reducers/profile';
import DoctorRegister from './components/auth/DoctorRegister';
import Review from './components/dashboard/Review';
import Navbar from './components/layout/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
