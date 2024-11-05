import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { useCalculator } from '../../context/Calculator/CalculatorContext';
import { productType } from '../../context/Calculator/CalculatorContext.type';
import { useNotification } from '../../context/Notifications/NotificationContext';
import { InputCreate } from '../InputCreate/InputCreate';

import { CalculatorIcon} from '../Icons/index';
import coinImage from '../../../public/imageCoin.png';
import './CreateProduct.styles.css';

export const CreateProduct: React.FC = () => {
  const { calculatorState, productArray} = useCalculator();
  const { showCartNotification } = useNotification();
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

      const newProduct: productType = {
        product: calculatorState.product,
        costPerUnit: calculatorState.costPerUnit,
        desiredMonthlyProfit: calculatorState.desiredMonthlyProfit,
        pricePerUnit: calculatorState.pricePerUnit
      };
      
      productArray(newProduct);
      navigate('dashboard');
      showCartNotification('Producto agregado')
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al crear la proyección');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="calculator-card">
      <img src={coinImage} alt="Coin image" className="image-coin"/>
      <div className="sidebar-items-title">
        <div className="sidebar-item-icon-card">
          <CalculatorIcon />
        </div>
        <h1 className="calculator-title">
          Calculadora de ventas
        </h1>
      </div>
      <div className="line-create-section"></div>
      <p className="calculator-subtitle">Completa la información</p>
      <div className="input-container">
        <InputCreate  title='Producto' fieldKey='product'  placeholderInput='Tennis deportivos'/>
        <InputCreate  title='Precio por unidad' fieldKey='pricePerUnit' placeholderInput='$39' />
        <InputCreate  title='Costo por unidad' fieldKey='costPerUnit' placeholderInput='$11' />
        <InputCreate  title='Utilidad mensual deseada' fieldKey='desiredMonthlyProfit' placeholderInput='$50.000' />
      </div>
      <p className="show-text">
        Cuánto te cuesta crear o fabricar el producto
      </p>
      <button className="calculate-button" onClick={handleSubmit}>
        {loading ? 'Creando...' : 'Crear proyección'}
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  )
}

