export default function ConfiguracionRibbon({ onOpen }) {
  return (
    <div className="ribbon-bg">
      {/* GRUPO 1 */}
      <div className="grupo">
        <div className="grupo-icons">
          <div className="btn-item" onClick={() => onOpen("parametros")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Parámetros
              <br />
              del sistema
            </span>
          </div>

          <div className="btn-item" onClick={() => onOpen("establecer_contra")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Establecer
              <br />
              contraseña
            </span>
          </div>

          <div className="btn-item" onClick={() => onOpen("eliminar_contra")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Eliminar
              <br />
              contraseña
            </span>
          </div>

          <div className="btn-item" onClick={() => onOpen("activar_sistema")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Activar
              <br />
              sistema
            </span>
          </div>
        </div>

        <div className="grupo-footer">Configuración</div>
      </div>

      {/* GRUPO 2 */}
      <div className="grupo">
        <div className="grupo-icons"></div>
        <div className="grupo-footer">Activación</div>
      </div>
    </div>
  );
}
