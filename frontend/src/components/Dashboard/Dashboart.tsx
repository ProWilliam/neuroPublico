// Dashboard.tsx
import React, { useState } from 'react';
import { DropDownIcon, QuestionMarkIcon } from '../Icons/index';
import './Dashboard.styles.css';
import { useCalculator } from '../../context/Calculator/CalculatorContext';
import { DashboardMetrics } from '../../utils/DashboardCalculations';

export const Dashboard: React.FC<{bange: boolean}> = ({bange}) => {

  const [activeTab, setActiveTab] = useState('Dashboard');

  // Ejemplo de datos
  const sampleData = {
    revenue: 945778400,
    adSpend: 281932100,
    variableCosts: 380873388,
    fixedCosts: 67900092,
    totalSales: 9016,
    totalMessages: 200000,
    conversations: 137859,
    closedDeals: 9016
  };

  // Context de tatos
  const {calculatorState} = useCalculator();

  console.log(calculatorState);

  // Inicializar calculadora de métricas
  const metrics = new DashboardMetrics(sampleData);

  // Calcular todas las métricas
  const totalBilling = metrics.getTotalBilling();
  const costs = metrics.getTotalCosts();
  const costPerSale = metrics.getCostPerSale();
  const roas = metrics.getROAS();
  const costPerMessage = metrics.getCostPerMessage();
  const closeRate = metrics.getCloseRate();
  const profitPerUnit = metrics.getProfitPerUnit();

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
        <div className="dashboard-container">
          <div className="main-card">
            <div className="billing-section">
              <div className="billing-left">
                <span className="label">Facturación</span>
                <div className="amount">{DashboardMetrics.formatCurrency(totalBilling, bange)}</div>
              </div>
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

            <div className="product-section">
              <div className="product-header">
                <h3>{calculatorState.product}</h3>

                <div className="metric-card" style={{width: '62%', marginLeft: '20px'}}>
                  <div className="metric-header">
                    <span>Costo por venta</span>
                    <span className="info-icon">
                      <QuestionMarkIcon />
                    </span>
                  </div>
                  <div className="metric-value">{DashboardMetrics.formatCurrency(costPerSale, bange)}</div>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '70%'}}></div>
                  </div>
                </div>

              </div>

              
              <div className="metrics-row">
                
                <div className="metric-card">
                  <div className="metric-header">
                    <span># Ventas</span>
                    <span className="info-icon">
                      <QuestionMarkIcon />
                    </span>
                  </div>
                  <div className="metric-value">{sampleData.totalSales.toLocaleString()}</div>
                </div>

                <div className="metric-card">
                  <div className="metric-header">
                    <span>Ganancias por unidad</span>
                    <span className="info-icon">
                      <QuestionMarkIcon />
                    </span>
                  </div>
                  <div className="metric-value">{DashboardMetrics.formatCurrency(profitPerUnit, bange)}</div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-header">
                    <span>ROAS</span>
                    <span className="info-icon">
                      <QuestionMarkIcon />
                    </span>
                  </div>
                  <div className="metric-value">{roas.toFixed(2)}</div>
                </div>

              </div>

            </div>
          </div>

          <div className="line-dashboard"></div>

          <div className="marketing-card">
            <div className="channel-section">
              <span className="section-label">Canal de venta:</span>
              <div className="channel-buttons">
                <button className="channel-btn active">Chat</button>
                <button className="channel-btn">Página de venta</button>
                <button className="channel-btn">VSL</button>
                <button className="channel-btn">Webinar</button>
              </div>
            </div>

            <div className="marketing-metrics" style={{width: '100%', background: 'linear-gradient(to bottom, #3D66B7, 29457C)'}}>
              <div className="metrics-title">
              <h4>Métricas de marketing</h4>
              <div className="metric-card" style={{width: '60%'}}>
                <div className="metric-header">
                  <span>Costo por mensaje</span>
                  <span className="info-icon">
                    <QuestionMarkIcon />
                  </span>
                </div>

                <div className="cost-sold">
                  <div className="metric-value">{DashboardMetrics.formatCurrency(costPerMessage, bange)}</div>
                  <div className="progress-bar">
                    <div className="progress" style={{width: '60%'}}></div>
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
                <button className="channel-btn active">Chat</button>
                <button className="channel-btn">Página de venta</button>
                <button className="channel-btn">VSL</button>
                <button className="channel-btn">Webinar</button>
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