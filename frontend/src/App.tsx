import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SupportIcon } from './components/Icons/index';
import { Sidebar } from './components/Sidebar/Sidebar';
import { DashboardPage } from './pages/Dashboard/DashboardPage';
import { Calculator } from './pages/Calculator/Calculator';

import './App.css';
import { RickAndMortyList } from './components/RyckAndMortyApi/RyckAndMortyApi';
  
export const App: React.FC = () => {

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <div className="support-section">
            <SupportIcon />
            Soporte
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="calculator/*" element={<Calculator />} />
              <Route path='apiRickAndMorty' element={<RickAndMortyList />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
}

