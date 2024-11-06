import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NotificationProvider } from './context/Notifications/NotificationContext';
import { SupportIcon, SearchIcon } from './components/Icons/index';
import { Sidebar } from './components/Sidebar/Sidebar';
import { DashboardPage } from './pages/Dashboard/DashboardPage';
import { Calculator } from './pages/Calculator/Calculator';

import './App.css';
import { RickAndMortyList } from './components/RyckAndMortyApi/RyckAndMortyApi';
  
export const App: React.FC = () => {

  return (
    <NotificationProvider>
      <Router>
        <div className="app-container">
          <Sidebar />
          <main className="main-content">
            <div className="support-section">
              <div className="input-search-container">
                <SearchIcon />
                <p>Búsqueda</p>
              </div>
              <div className="support">
                <SupportIcon />
                <p>Soporte</p>
              </div>
            </div>
            <div className="content">
              <Routes>
                <Route path="/" element={<Navigate to="/calculator" />} />
                <Route path="/home" element={<DashboardPage />} />
                <Route path="calculator/*" element={<Calculator />} />
                <Route path='apiRickAndMorty' element={<RickAndMortyList />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </NotificationProvider>
  )
}

