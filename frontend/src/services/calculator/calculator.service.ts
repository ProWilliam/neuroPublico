import { CalculatorData } from './Calculator.types';


class CalculatorService {
  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = 'http://127.0.0.1:3000/product';
  }

  async createProjection(data: CalculatorData) {
    try {
      const response = await fetch(`${this.apiUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al crear la proyección');
      }

      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}

export const calculatorService = new CalculatorService();