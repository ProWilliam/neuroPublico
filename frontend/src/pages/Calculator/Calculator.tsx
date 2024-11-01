import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CreateProduct } from '../../components/CreateProduct/CreateProduct';
import { CalculatorResults } from '../../components/CalculatorResults/CalculatorResults';
import { CalculatorProvider } from '../../context/CalculatorContext';
import './Calculator.styles.css';

export const Calculator: React.FC = () => {

  return (
    <CalculatorProvider>
      <Routes>
        <Route index element={<CreateProduct />} />
        <Route path="dashboard" element={<CalculatorResults />} />
      </Routes>
    </CalculatorProvider>
  )
}
