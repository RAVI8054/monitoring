import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar from  './Componets/sideNavbar/Side-navbar';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <>
        <Sidebar></Sidebar>
  </>
  </React.StrictMode>
);

