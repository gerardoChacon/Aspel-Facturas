import React, { useState } from "react";
import "./comprobantesRibbon.css";

import SharedWindow from "../shared/SharedWindow";

export default function ComprobantesRibbon() {
  const [modal, setModal] = useState(null);

  const renderContent = () => {
    if (modal === "clientes") return <div>Clientes</div>;
    if (modal === "productos") return <div>Productos</div>;
    if (modal === "terceros") return <div>Terceros</div>;
    if (modal === "facturas") return <div>Facturas</div>;
    if (modal === "honorarios") return <div>Recibo de honorarios</div>;
    if (modal === "arrendamiento") return <div>Recibo de arrendamiento</div>;
    if (modal === "notas") return <div>Notas de crédito</div>;
    if (modal === "traslados") return <div>Traslados</div>;
    if (modal === "otros") return <div>Otros comprobantes</div>;
    if (modal === "viaticos") return <div>Viáticos y otros pagos</div>;
    if (modal === "recepcion") return <div>Recepción de pagos</div>;
    if (modal === "retenciones") return <div>Retenciones</div>;

    return null;
  };

  return (
    <div className="ribbon-bg">
      <div className="grupo">
        <div className="grupo-icons">
          <div className="btn-item" onClick={() => setModal("clientes")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">Clientes</span>
          </div>

          <div className="btn-item" onClick={() => setModal("productos")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">Productos</span>
          </div>

          <div className="btn-item" onClick={() => setModal("terceros")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">Terceros</span>
          </div>
        </div>
        <div className="grupo-footer">Catálogos</div>
      </div>

      <div className="grupo">
        <div className="grupo-icons">
          <div className="btn-item" onClick={() => setModal("facturas")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">Facturas</span>
          </div>

          <div className="btn-item" onClick={() => setModal("honorarios")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">Recibo de honorarios</span>
          </div>

          <div className="btn-item" onClick={() => setModal("arrendamiento")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">Recibo de arrendamiento</span>
          </div>

          <div className="btn-item" onClick={() => setModal("notas")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">Notas de crédito</span>
          </div>

          <div className="btn-item" onClick={() => setModal("traslados")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">Traslados</span>
          </div>

          <div className="btn-item" onClick={() => setModal("otros")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">Otros comprobantes</span>
          </div>

          <div className="btn-item" onClick={() => setModal("viaticos")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Viáticos y<br />
              otros pagos
            </span>
          </div>

          <div className="btn-item" onClick={() => setModal("recepcion")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Recepción
              <br />
              de pagos
            </span>
          </div>

          <div className="btn-item" onClick={() => setModal("retenciones")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">Retenciones</span>
          </div>
        </div>
        <div className="grupo-footer">Documentos</div>
      </div>

      <div className="grupo">
        <div className="grupo-icons">
          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Importación
              <br />
              de CFDI
            </span>
          </div>
        </div>
        <div className="grupo-footer">Importación</div>
      </div>

      <div className="grupo">
        <div className="grupo-icons">
          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Visualizar
              <br />
              alarmas
            </span>
          </div>
        </div>
        <div className="grupo-footer">Alarmas</div>
      </div>

      {modal && (
        <SharedWindow
          title={modal.toUpperCase()}
          onClose={() => setModal(null)}
        >
          {renderContent()}
        </SharedWindow>
      )}
    </div>
  );
}
