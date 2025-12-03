import React from "react";
import "./gastosRibbon.css";

export default function GastosRibbon() {
  return (
    <div className="ribbon-bg">
      <div className="grupo">
        <div className="grupo-icons">
          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Gastos</span>
          </div>

          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Comprobantes de pago</span>
          </div>
        </div>

        <div className="grupo-footer">Documentos</div>
      </div>
    </div>
  );
}
