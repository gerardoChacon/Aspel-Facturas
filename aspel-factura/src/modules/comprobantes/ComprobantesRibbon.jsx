import React from "react";
import "./comprobantes.css";

export default function ComprobantesRibbon() {
  return (
    <div className="ribbon-bg">
      {/* GRUPO: CATÁLOGOS */}
      <div className="grupo">
        <div className="grupo-icons">
          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Clientes</span>
          </div>

          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Productos</span>
          </div>

          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Terceros</span>
          </div>
        </div>

        <div className="grupo-footer">Catálogos</div>
      </div>

      {/* GRUPO: DOCUMENTOS */}
      <div className="grupo">
        <div className="grupo-icons">
          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Facturas</span>
          </div>

          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Recibo de honorarios</span>
          </div>

          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Recibo de arrendamiento</span>
          </div>

          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Notas de crédito</span>
          </div>

          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Traslados</span>
          </div>

          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Otros comprobantes</span>
          </div>

          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Viáticos y otros pagos</span>
          </div>

          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Recepción de pagos</span>
          </div>

          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Retenciones</span>
          </div>
        </div>

        <div className="grupo-footer">Documentos</div>
      </div>

      {/* GRUPO: IMPORTACIÓN */}
      <div className="grupo">
        <div className="grupo-icons">
          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Importación de CFDI</span>
          </div>
        </div>

        <div className="grupo-footer">Importación</div>
      </div>

      {/* GRUPO: ALARMAS */}
      <div className="grupo">
        <div className="grupo-icons">
          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">Visualizar alarmas</span>
          </div>
        </div>

        <div className="grupo-footer">Alarmas</div>
      </div>
    </div>
  );
}
