import React from 'react'
import { HeartIcon } from '../Icons/index';
import { useCalculator } from '../../context/Calculator/CalculatorContext';
import { CalculatorState } from '../../context/Calculator/CalculatorContext.type';
import './InputCreate.styles.css'

interface InputCreateProps {
  title: string;
  fieldKey: keyof  CalculatorState;
  placeholderInput: string;
}

export const InputCreate: React.FC<InputCreateProps> = ({ title, fieldKey, placeholderInput }) => {

  const { calculatorState, updateCalculatorState} = useCalculator();

  return (
    <div className="input-wrapper">
      <div className="input-icon">
        <HeartIcon />
      </div>
      <span className="input-span">{title}</span>
      <input
        type="text"
        placeholder={placeholderInput}
        value={calculatorState[fieldKey]}
        onChange={(e) => updateCalculatorState(fieldKey, e.target.value)}
      />
    </div>
  )
}
