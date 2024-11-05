import React, { useState, useEffect } from 'react';
import { useCalculator } from '../../context/Calculator/CalculatorContext';
import { ProductIteratorDetails } from '../ProductIteratorDetails/ProductIteratorDetails';
import { InputRange } from '../InputRange/InputRange'
import { ButtonCarousel } from '../ButtonCarousel/ButtonCarousel';
import { DashboardMetrics } from '../../utils/DashboardCalculations';;
import { DropDownIcon, QuestionMarkIcon } from '../Icons/index';
import { sampleData } from '../../constants/mockData';

import './Dashboard.styles.css';

export const Dashboard: React.FC<{bange: boolean}> = ({ bange }) => {

  // Context de datos
  const { updateCalculatorState, arrayProduct } = useCalculator();

  // States
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeButton, setActiveButton] = useState('Chat');


  // Inicializar calculadora de métricas
  const metrics = new DashboardMetrics(sampleData);

  // Calcular todas las métricas
  const totalBilling = metrics.getTotalBilling();
  const costs = metrics.getTotalCosts();
  const costPerMessage = metrics.getCostPerMessage();
  const closeRate = metrics.getCloseRate();

  const handleNext = () => {
    if (currentSlide < arrayProduct.length - 2) {
      const slideAmount =  554; // 442px (width) + 16px (gap)
      setCurrentSlide(currentSlide + 1);
      const carousel: any = document.querySelector('.carousel-product');
      if (carousel) {
        carousel.style.transform = `translateX(-${slideAmount * (currentSlide + 1)}px)`;
      }
    }
  };
  
  const handlePrev = () => {
    if (currentSlide > 0) {
      const slideAmount = 554; // 442px (width) + 16px (gap)
      setCurrentSlide(currentSlide - 1);
      const carousel: any = document.querySelector('.carousel-product');
      if (carousel) {
        carousel.style.transform = `translateX(-${slideAmount * (currentSlide - 1)}px)`;
      }
    }
  };

  const handleButtonClick = (channel: any) => {
    setActiveButton(channel);
  };

  useEffect(() => {
    updateCalculatorState(sampleData); 
  }, []);

  return (
    <div className="dashboard">
      <div className="header">
        <h2>Tus números objetivo:</h2>
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'Dashboard' ? 'active' : ''}`} 
            onClick={() => setActiveTab('Dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`tab ${activeTab === 'Resumen' ? 'active' : ''}`} 
            onClick={() => setActiveTab('Resumen')}
          >
            Resumen
          </button>
        </div>
      </div>

      {activeTab === 'Dashboard' ? (
        <>
          <div className="dashboard-container">
            <div className="main-card">
              <div className="billing-section">
                <div className="billing-left">
                  <span className="label">Facturación</span>
                  <div className="amount">{DashboardMetrics.formatCurrency(totalBilling, bange)}</div>
                </div>
                <div className="vertical-line-dasboard"></div>
                <div className="billing-right">
                  <div className="cost-item">
                    <span>Inversión en publicidad</span>
                    <span className="value">- {DashboardMetrics.formatCurrency(costs.advertising, bange)}</span>
                  </div>
                  <div className="cost-item">
                    <span>Costos variables</span>
                    <span className="value">- {DashboardMetrics.formatCurrency(costs.variable, bange)}</span>
                  </div>
                  <div className="cost-item">
                    <span>Gastos fijos</span>
                    <span className="value">- {DashboardMetrics.formatCurrency(costs.fixed, bange)}</span>
                  </div>
                </div>
                <button className="toggle-btn">
                  <div className='box-toggle'>
                    <DropDownIcon />
                  </div>
                </button>
              </div>

              { arrayProduct.length === 1 && (<ProductIteratorDetails bange={bange}/>) }

            </div>

            {arrayProduct.length >= 2 && (
              <div className="carousel-container">
                <div 
                  className="carousel-product" 
                  style={{ 
                    transform: `translateX(-${currentSlide * 452.5}px%)`,
                  }}
                >
                  {arrayProduct.map(( _,index) => (
                    <div className="carousel-item" key={index}>
                      <ProductIteratorDetails bange={bange} />
                    </div>
                  ))}
                </div>
              </div>
            )}
            

            <div className="line-dashboard"></div>

            <div className="marketing-card">
              <div className="channel-section">
                <span className="section-label">Canal de venta:</span>
                <div className="channel-buttons">
                  <button
                    className={`channel-btn ${activeButton === 'Chat' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Chat')}
                  >
                    Chat
                  </button>
                  <button
                    className={`channel-btn ${activeButton === 'Página de venta' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Página de venta')}
                  >
                    Página de venta
                  </button>
                  <button
                    className={`channel-btn ${activeButton === 'VSL' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('VSL')}
                  >
                    VSL
                  </button>
                  <button
                    className={`channel-btn ${activeButton === 'Webinar' ? 'active' : ''}`}
                    onClick={() => handleButtonClick('Webinar')}
                  >
                    Webinar
                  </button>
                </div>
              </div>

              <div className="marketing-metrics" style={{width: '100%', background: 'linear-gradient(to bottom, #3D66B7, 29457C)'}}>
                <div className="metrics-title">
                <h4>Métricas de marketing</h4>
                <div className="metric-card" style={{width: '60%'}}>
                  <div className="metric-header">
                    <div className="content-cost-sold">
                        <span>Costo por mensaje</span>
                        <div className="metric-value">{DashboardMetrics.formatCurrency(costPerMessage, bange)}</div>
                      </div>
                      <div className="progress-bar-message">
                        <InputRange field="adSpend"/>
                      </div>
                      <div className="info-icon-cost-sold">
                        <span className="info-icon">
                          <QuestionMarkIcon />
                        </span>
                      </div>
                  </div>
                </div>
                </div>
                <div className="metrics-marketing-row">

                  <div className="metric-card">
                    <div className="metric-header">
                      <span>Conversaciones iniciadas</span>
                      <span className="info-icon">
                        <QuestionMarkIcon />
                      </span>
                    </div>
                    <div className="metric-value">{sampleData.conversations.toLocaleString()}</div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-header">
                      <span>% Cierre</span>
                      <span className="info-icon">
                        <QuestionMarkIcon />
                      </span>
                    </div>
                    <div className="metric-value">{DashboardMetrics.formatPercentage(closeRate)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-controls">
            <div className='carousel-button' style={{visibility: `${currentSlide === 0 ? 'hidden' : 'visible' }`}}>
              <ButtonCarousel direction='left' cliked={handlePrev} />
            </div>

            <div className='carousel-button' style={{visibility: `${currentSlide >= arrayProduct.length - 2 ? 'hidden' : 'visible' }`}}>
              <ButtonCarousel direction='right' cliked={handleNext} />
            </div>
          </div>
        </>
      ) : (
        <div className="dashboard-container">
          <div className="main-card-summary">
            <div className="billing-section-summary">
              
              <div className="text-summary">
                <span className="">Para alcanzar la utilidad de: </span>
                <div className="amount-sumary">$250,250,000</div>
              </div>
              <div className="text-summary">
                <span className="">Debes generar una Facturacíon de: </span>
                <div className="amount-sumary">{DashboardMetrics.formatCurrency(totalBilling, bange)}</div>
              </div>
            
            </div>

            <div className="billing-section-summary">
              
              <div className="text-summary">
                <span className="">Inversión en publicidad: </span>
                <div className="amount-sumary">$261,932,100</div>
              </div>
              <div className="text-summary">
                <span className="">Costos variables: </span>
                <div className="amount-sumary">$380,873,388</div>
              </div>
              <div className="text-summary">
                <span className="">Gastos fijos: </span>
                <div className="amount-sumary">$67,900,092</div>
              </div>
            
            </div>

            <div className="billing-section-summary">
              
              <div className="text-summary">
                <span className="">Venderás</span>
                <div className="amount-sumary">9,016</div>
                <span className="">unidades a un precio de:</span>
                <div className="amount-sumary">$104,900</div>
              </div>

              <div className="text-summary">
                <span className="">Cada venta te costará </span>
                <div className="amount-sumary">$20,200</div>
                <span className="">en publicidad</span>
              </div>

              <div className="text-summary">
                <span className="">Retorno de inversión en publicidad: </span>
                <div className="amount-sumary">3.1</div>
              </div>
            
            </div>

  
          </div>

          <div className="line-dashboard"></div>

          <div className="marketing-card">
            <div className="channel-section">
              <span className="section-label">Canal de venta:</span>
              <div className="channel-buttons">
                <button
                  className={`channel-btn ${activeButton === 'Chat' ? 'active' : ''}`}
                  onClick={() => handleButtonClick('Chat')}
                >
                  Chat
                </button>
                <button
                  className={`channel-btn ${activeButton === 'Página de venta' ? 'active' : ''}`}
                  onClick={() => handleButtonClick('Página de venta')}
                >
                  Página de venta
                </button>
                <button
                  className={`channel-btn ${activeButton === 'VSL' ? 'active' : ''}`}
                  onClick={() => handleButtonClick('VSL')}
                >
                  VSL
                </button>
                <button
                  className={`channel-btn ${activeButton === 'Webinar' ? 'active' : ''}`}
                  onClick={() => handleButtonClick('Webinar')}
                >
                  Webinar
                </button>
              </div>
            </div>

            <div className="marketing-metrics" style={{width: '100%', background: 'linear-gradient(to bottom, #3D66B7, 29457C)'}}>
              <div className="metrics-title-summary">
                <div className="billing-section-summary">
                  <h4>Métricas de marketing</h4>
                  <div className="text-summary">
                    <span className="">Costo por mensaje: </span>
                    <div className="amount-sumary">$1,900</div>
                  </div>
                  <div className="text-summary">
                    <span className="">Conversaciones iniciadas: </span>
                    <div className="amount-sumary">$ 124,634</div>
                  </div>
                  <div className="text-summary">
                    <span className="">Procentaje de cierre de ventas: </span>
                    <div className="amount-sumary">6.54%</div>
                  </div>
            
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="containter-whatsapp-button">
          <button className="whatsapp-button">
            Empieza a vender por whatsapp
          </button>
        </div>
    </div>
  );
};