import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.styles.css';
import { MenuSectionProps, MenuItemProps } from './Sidebar.types';
import logo from '../../../public/logo.png';

// Icon Imports
import { 
  HomeIcon, 
  SalesIcon, 
  ProductIcon,
  ChatIcon,
  PageWebIcon,
  CalculatorIcon,
  GraphUpArrowIcon,
  InformationVariant,
  SettingsOutline
 } from '../Icons/index';

export const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const navigate = useNavigate();

  const menuSections: MenuSectionProps[] = [
    
    {
      title: null,
      items: [
        { icon: <HomeIcon />, text: 'Inicio', key: 'home', route: '/' },
        { icon: <SalesIcon />, text: 'Ventas', key: 'sales', route: '/sales' },
        { icon: <ProductIcon />, text: 'Productos', key: 'products', route: '/products' }
      ]
    },
    {
      title: 'Canales de venta',
      items: [
        { icon: <ChatIcon />, text: 'Chat', key: 'apiRickAndMorty', route: '/apiRickAndMorty' },
        { icon: <PageWebIcon />, text: 'Página Web', key: 'paginaWeb', route: '/paginaWeb' },
      ]
    },
    {
      title: 'Herramientas',
      items: [
        { icon: <GraphUpArrowIcon />, text: 'Métricas', key: 'metricas', route: '/metricas' },
        { icon: <CalculatorIcon />, text: 'Calculadora', key: 'calculator', route: '/calculator' },
        { icon: <ProductIcon />, text: 'Ventaflow Center', key: 'ventaflow', route: '/ventaflow' }
      ]
    },
    {
      title: 'Educación',
      items: [
        { icon: <InformationVariant />, text: 'Fórmula de ventas', key: 'formulaventa', route: '/formulaventa' },
      ]
    },
  ];

  const handleItemClick = (item: MenuItemProps) => {
    setActiveItem(item.key);
    if (item.route) {
      navigate(item.route);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo"> <img src={logo} alt='Logo'/></div>
      {menuSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="sidebar-section">
          {section.title && (
            <h3 className="sidebar-section-title">{section.title}</h3>
          )}
          {section.items.map((item: any) => (
            <div 
              key={item.key}
              onClick={() => handleItemClick(item)}
              className={`sidebar-item ${activeItem === item.key ? 'active' : ''}`}
            >
              <div className="sidebar-item-icon">{item.icon}</div>
              {item.text && (
                <span className="sidebar-item-text">{item.text}</span>
              )}
            </div>
          ))}
          {section.title !== null && (
            <div className="sidebar-divider"></div>
          )}
        </div>
      ))}
      <div className="config-button">
        <SettingsOutline />
        <p>
          Configuración
        </p>
      </div>
    </div>
  );
};

