import { createContext, useContext, useState, ReactNode } from 'react';
import { CalculatorContextType, CalculatorState } from './CalculatorContext.type';

const initialState: CalculatorState = {
  product: '',
  pricePerUnit: '',
  costPerUnit: '',
  desiredMonthlyProfit: '',
};

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>(initialState);

  const updateCalculatorState = (field: keyof CalculatorState, value: string) => {
    setCalculatorState(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetCalculatorState = () => {
    setCalculatorState(initialState);
  };

  const calculateProfit = () => {
    const price = parseFloat(calculatorState.pricePerUnit) || 0;
    const cost = parseFloat(calculatorState.costPerUnit) || 0;
    return price - cost;
  };

  return (
    <CalculatorContext.Provider 
      value={{
        calculatorState,
        updateCalculatorState,
        resetCalculatorState,
        calculateProfit
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
}