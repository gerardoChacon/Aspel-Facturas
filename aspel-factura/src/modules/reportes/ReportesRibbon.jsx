export default function ReportesRibbon({ onOpen }) {
  return (
    <div className="ribbon-bg">
      <div className="grupo">
        <div className="grupo-icons">
          <div className="btn-item" onClick={() => onOpen("emision")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Emisión
              <br />
              de documentos
            </span>
          </div>

          <div className="btn-item" onClick={() => onOpen("resumen")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Resumen documentos
              <br />
              (Ingresos/Egresos)
            </span>
          </div>

          <div className="btn-item" onClick={() => onOpen("formatos_doc")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Edición de formatos
              <br />
              de documentos
            </span>
          </div>

          <div className="btn-item" onClick={() => onOpen("reportes_usuario")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Emisión
              <br />
              de reportes
            </span>
          </div>

          <div className="btn-item" onClick={() => onOpen("formatos_ret")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Edición formatos
              <br />
              retenciones
            </span>
          </div>

          <div className="btn-item" onClick={() => onOpen("retenciones")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Emisión
              <br />
              de retenciones
            </span>
          </div>
        </div>

        <div className="grupo-footer">Documentos</div>
      </div>
    </div>
  );
}
