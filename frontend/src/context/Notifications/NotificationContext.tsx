// src/context/NotificationContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { NotificationContextType } from './NotificationProps';
import { AddFileIcon } from '../../components/Icons/index';
import './NotificationContext.styles.css';


const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState('');

  const hideNotification = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsLeaving(false);
      setNotificationTitle('');
    }, 500); 
  };

  const showCartNotification = ( title: string) => {
    if (!isVisible) {
      setNotificationTitle(title)
      setIsVisible(true);
      setIsLeaving(false);
      
      setTimeout(() => {
        hideNotification();
      }, 3000);
    }
  };
  return (
    <NotificationContext.Provider value={{ showCartNotification }}>
      {isVisible && ( 
        <div className="notification-container">
          <div className={`notification ${isVisible ? 'notification--visible' : ''} ${isLeaving ? 'notification--hidden' : ''}`}>
            <div className="notification__icon">
              <AddFileIcon />
            </div>
            <div className="notification__content">
              {notificationTitle} 
            </div>
            <button 
              className="notification__close" 
              onClick={() => setIsVisible(false)}
            >
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path 
                  fill="currentColor" 
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};