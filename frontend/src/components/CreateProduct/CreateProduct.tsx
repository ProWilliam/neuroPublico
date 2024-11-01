import React, {useState} from 'react'
import { CalculatorIcon } from '../Icons/CalculatorIcon';
import { useCalculator } from '../../context/CalculatorContext';
import { useNavigate } from 'react-router-dom';
import './CreateProduct.styles.css';

export const CreateProduct: React.FC = () => {
  const { calculatorState, updateCalculatorState} = useCalculator();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);
      
      if (!calculatorState.product || !calculatorState.pricePerUnit || 
          !calculatorState.costPerUnit || !calculatorState.desiredMonthlyProfit) {
        throw new Error('Por favor completa todos los campos');
      }
      
      navigate('dashboard');
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear la proyección');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="calculator-card">
      <div className="sidebar-items-title">
        <div className="sidebar-item-icon-card">
          <CalculatorIcon />
        </div>
        <h1 className="calculator-title">
          Calculadora de ventas
        </h1>
      </div>
      <br />
      <hr />
      <p className="calculator-subtitle">Completa la información</p>
      <div className="input-container">
        <div className="input-column">
          <input
            type="text"
            placeholder="Producto"
            value={calculatorState.product}
            onChange={(e) => updateCalculatorState('product', e.target.value)}
          />
          <input
            type="number"
            placeholder="Precio por unidad"
            value={calculatorState.pricePerUnit}
            onChange={(e) => updateCalculatorState("pricePerUnit", e.target.value)}
          />
        </div>
        <div className="input-column">
          <input
            type="number"
            placeholder="Costo por unidad"
            value={calculatorState.costPerUnit}
            onChange={(e) => updateCalculatorState('costPerUnit', e.target.value)}
          />
          <input
            type="number"
            placeholder="Utilidad mensual deseada"
            value={calculatorState.desiredMonthlyProfit}
            onChange={(e) => updateCalculatorState('desiredMonthlyProfit', e.target.value)}
          />
        </div>
      </div>
      <p className="show-text">
        Cuanto te cuesta crear o fabricar el producto
      </p>
      <button className="calculate-button" onClick={handleSubmit}>
        {loading ? 'Creando...' : 'Crear proyección'}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  )
}

