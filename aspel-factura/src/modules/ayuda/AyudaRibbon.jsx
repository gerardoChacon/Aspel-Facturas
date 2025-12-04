export default function AyudaRibbon({ onOpen }) {
  return (
    <div className="ribbon-bg">
      {/* ===== GRUPO NOVEDADES ===== */}
      <div className="grupo">
        <div className="grupo-icons">
          <div className="btn-item" onClick={() => onOpen("Lo nuevo")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Lo nuevo
              <br />
              Novedades
            </span>
          </div>

          <div className="btn-item" onClick={() => onOpen("Índice")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">Índice</span>
          </div>

          <div className="btn-item" onClick={() => onOpen("Tópicos")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">Tópicos</span>
          </div>

          <div
            className="btn-item"
            onClick={() => onOpen("Búsqueda por temas")}
          >
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Búsqueda por
              <br />
              temas
            </span>
          </div>
        </div>

        <div className="grupo-footer">Ayuda</div>
      </div>

      {/* ===== GRUPO ASISTENCIA ===== */}
      <div className="grupo">
        <div className="grupo-icons">
          <div
            className="btn-item"
            onClick={() => onOpen("Centro de asistencia en línea")}
          >
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Centro de
              <br />
              asistencia en línea
            </span>
          </div>

          <div
            className="btn-item"
            onClick={() => onOpen("Servicio de actualización en línea")}
          >
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Servicio de
              <br />
              actualización en línea
            </span>
          </div>

          <div
            className="btn-item"
            onClick={() => onOpen("Acerca de FACTURE 6.0")}
          >
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Acerca de
              <br />
              FACTURĒ 6.0
            </span>
          </div>
        </div>

        <div className="grupo-footer">Asistencia</div>
      </div>
    </div>
  );
}
