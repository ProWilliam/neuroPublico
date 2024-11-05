import React from 'react';
import { useCalculator } from '../../context/Calculator/CalculatorContext';
import { InputRange } from '../InputRange/InputRange';
import { sampleData } from '../../constants/mockData';
import { DashboardMetrics } from '../../utils/DashboardCalculations';
import { QuestionMarkIcon } from '../Icons/index';;
import './ProductIteratorDetails.styles.css'

export const ProductIteratorDetails: React.FC<{bange : boolean}> = ({ bange }) => {

  const { calculatorState } = useCalculator();

  // Inicializar calculadora de métricas
  const metrics = new DashboardMetrics(sampleData);


  const costPerSale = metrics.getCostPerSale();
  const roas = metrics.getROAS();
  const profitPerUnit = metrics.getProfitPerUnit();

  return (
    <div className="product-section">
      <div className="product-header">
        <h3>{calculatorState.product}</h3>

        <div className="metric-card" style={{width: '62%', marginLeft: '20px'}}>
          <div className="metric-header">
            <div className="content-cost-sold">
              <span>Costo por venta</span>
              <div className="metric-value">{DashboardMetrics.formatCurrency(costPerSale, bange)}</div>
            </div>
            <InputRange field="totalSales" />
            <div className="info-icon-cost-sold">
              <span className="info-icon">
                <QuestionMarkIcon />
              </span>
            </div>
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
  )
}
