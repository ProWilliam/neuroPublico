import { CalculatorData } from './Calculator.types';


class CalculatorService {
  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = import.meta.env.VITE_URL_BACKEND + import.meta.env.VITE_PATH_PRODUCT;
  }

  async createProjection(data: CalculatorData) {
    try {
      console.log(this.apiUrl);
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