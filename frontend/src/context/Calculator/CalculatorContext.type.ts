export interface CalculatorState {
  product: string;
  pricePerUnit: string;
  costPerUnit: string;
  desiredMonthlyProfit: string;
}

export interface CalculatorContextType {
  calculatorState: CalculatorState;
  updateCalculatorState: (field: keyof CalculatorState, value: string) => void;
  resetCalculatorState: () => void;
  calculateProfit: () => number;
}