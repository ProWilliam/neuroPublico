// DashboardCalculations.ts

interface SaleData {
  revenue: number;         // Ingresos totales
  adSpend: number;         // Inversión en publicidad
  variableCosts: number;   // Costos variables
  fixedCosts: number;      // Gastos fijos
  totalSales: number;      // Número total de ventas
  totalMessages: number;   // Número total de mensajes enviados
  conversations: number;   // Conversaciones iniciadas
  closedDeals: number;     // Ventas cerradas
}

export class DashboardMetrics {
  private data: SaleData;

  constructor(data: SaleData) {
    this.data = data;
  }

  // 1. Facturación Total (Billing)
  getTotalBilling(): number {
    return this.data.revenue;
  }

  // 2. Costos Totales (Total Costs)
  getTotalCosts(): {
    advertising: number;
    variable: number;
    fixed: number;
    total: number;
  } {
    return {
      advertising: this.data.adSpend,
      variable: this.data.variableCosts,
      fixed: this.data.fixedCosts,
      total: this.data.adSpend + this.data.variableCosts + this.data.fixedCosts
    };
  }

  // 3. Costo por Venta (Cost per Sale)
  getCostPerSale(): number {
    const totalCosts = this.getTotalCosts().total;
    return this.data.totalSales > 0 
      ? totalCosts / this.data.totalSales 
      : 0;
  }

  // 4. ROAS (Return on Ad Spend)
  getROAS(): number {
    return this.data.adSpend > 0 
      ? this.data.revenue / this.data.adSpend 
      : 0;
  }

  // 5. Costo por Mensaje (Cost per Message)
  getCostPerMessage(): number {
    return this.data.totalMessages > 0 
      ? this.data.adSpend / this.data.totalMessages 
      : 0;
  }

  // 6. Porcentaje de Cierre (Close Rate)
  getCloseRate(): number {
    return this.data.conversations > 0 
      ? (this.data.closedDeals / this.data.conversations) * 100 
      : 0;
  }

  // 7. Ganancia por Unidad (Profit per Unit)
  getProfitPerUnit(): number {
    const totalCosts = this.getTotalCosts().total;
    return this.data.totalSales > 0 
      ? (this.data.revenue - totalCosts) / this.data.totalSales 
      : 0;
  }

  // 8. Margen de Beneficio (Profit Margin)
  getProfitMargin(): number {
    const totalCosts = this.getTotalCosts().total;
    return this.data.revenue > 0 
      ? ((this.data.revenue - totalCosts) / this.data.revenue) * 100 
      : 0;
  }

  // Formatear números para mostrar en pantalla
  static formatCurrency(amount: number, bange: boolean): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: bange ? 'COP' : 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  static formatPercentage(value: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value / 100);
  }
}