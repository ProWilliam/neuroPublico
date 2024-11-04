import { createContext, useContext, useState, ReactNode } from 'react';
import { CalculatorContextType, CalculatorState } from './CalculatorContext.type';

const initialState: CalculatorState = {
  product: '',
  pricePerUnit: '',
  costPerUnit: '',
  desiredMonthlyProfit: '',
  revenue: 0,         
  adSpend: 0,         
  variableCosts: 0,   
  fixedCosts: 0,      
  totalSales: 0,      
  totalMessages: 0,   
  conversations: 0,
  closedDeals: 0
};

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>(initialState);

  const updateCalculatorState = (updates: Partial<CalculatorState> | keyof CalculatorState, value?: string) => {
    if (typeof updates === "string") {
      setCalculatorState(prev => ({
        ...prev,
        [updates]: value
      }));
    } else {
      setCalculatorState(prev => ({
        ...prev,
        ...updates
      }));
    }
  };

  const updateProgress = ( field :keyof CalculatorState,  value: number) => {
    setCalculatorState(prev => ({
      ...prev,
      [field]: value
    }));
  }

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
        updateProgress,
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