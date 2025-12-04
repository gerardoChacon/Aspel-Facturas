export default function EstadisticasRibbon({ onOpen }) {
  return (
    <div className="ribbon-bg">
      <div className="grupo">
        <div className="grupo-icons">
          <div className="btn-item" onClick={() => onOpen("ventas_mes")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Ventas
              <br />
              por mes
            </span>
          </div>

          <div
            className="btn-item"
            onClick={() => onOpen("clientes_importantes")}
          >
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Clientes más
              <br />
              importantes
            </span>
          </div>

          <div
            className="btn-item"
            onClick={() => onOpen("documentos_pagados")}
          >
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Documentos
              <br />
              pagados por cliente
            </span>
          </div>

          <div className="btn-item" onClick={() => onOpen("saldo_clientes")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Saldo de
              <br />
              clientes
            </span>
          </div>

          <div
            className="btn-item"
            onClick={() => onOpen("productos_vendidos")}
          >
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Productos más
              <br />
              vendidos
            </span>
          </div>

          <div className="btn-item" onClick={() => onOpen("tablero")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">Tablero</span>
          </div>
        </div>

        <div className="grupo-footer">Gráficas</div>
      </div>
    </div>
  );
}
