export interface productType {
  product: string;
  pricePerUnit: string;
  costPerUnit: string;
  desiredMonthlyProfit: string;
}

export interface CalculatorState extends productType {
  revenue?: number;          // Ingresos totales
  adSpend?: number;         // Inversión en publicidad
  variableCosts?: number;   // Costos variables
  fixedCosts?: number;      // Gastos fijos
  totalSales?: number;      // Número total de ventas
  totalMessages?: number;   // Número total de mensajes enviados
  conversations?: number;   // Conversaciones iniciadas
  closedDeals?: number;
}

export interface CalculatorContextType {
  calculatorState: CalculatorState;
  updateCalculatorState: (updates: Partial<CalculatorState> | keyof CalculatorState, value?: string) => void;
  updateProgress: (field: keyof CalculatorState, value: number) => void;
  resetCalculatorState: () => void;
  calculateProfit: () => number;
  productArray: (newProduct: productType) => void;
  arrayProduct: productType[];
  backProductArray: () => void;
}