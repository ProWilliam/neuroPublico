import React from 'react'

export const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-page">
      <h1>Panel Principal</h1>
      <div className="dashboard-content">
        <div className="dashboard-widget">
          <h2>Resumen de Ventas</h2>
          {/* Contenido del widget */}
        </div>
        <div className="dashboard-widget">
          <h2>Productos Más Vendidos</h2>
          {/* Contenido del widget */}
        </div>
      </div>
    </div>

  )
}
