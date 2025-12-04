export default function VistaRibbon({ onOpen }) {
  return (
    <div className="ribbon-bg">
      {/* ===== GRUPO APARIENCIA ===== */}
      <div className="grupo">
        <div className="grupo-icons">
          {/* Temas */}
          <div className="btn-round" onClick={() => onOpen("tema_claro")}></div>
          <div className="btn-round" onClick={() => onOpen("tema_azul")}></div>
          <div
            className="btn-round"
            onClick={() => onOpen("tema_multicolor")}
          ></div>
          <div className="btn-round" onClick={() => onOpen("tema_verde")}></div>
          <div
            className="btn-round"
            onClick={() => onOpen("tema_turquesa")}
          ></div>
          <div className="btn-round" onClick={() => onOpen("tema_negro")}></div>
          <div className="btn-round" onClick={() => onOpen("tema_rosa")}></div>
          <div className="btn-round" onClick={() => onOpen("tema_rojo")}></div>
          <div
            className="btn-round"
            onClick={() => onOpen("tema_morado")}
          ></div>
          <div className="btn-round" onClick={() => onOpen("tema_gris")}></div>

          {/* Checkbox-like button */}
          <div className="btn-item">
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Barra de
              <br />
              herramientas
            </span>
          </div>
        </div>

        <div className="grupo-footer">Apariencia</div>
      </div>

      {/* ===== GRUPO VENTANA ===== */}
      <div className="grupo">
        <div className="grupo-icons">
          <div className="btn-item" onClick={() => onOpen("cascada")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">Cascada</span>
          </div>

          <div className="btn-item" onClick={() => onOpen("mosaico")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">Mosaico</span>
          </div>

          <div className="btn-item" onClick={() => onOpen("mosaico_vertical")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Mosaico
              <br />
              vertical
            </span>
          </div>

          <div className="btn-item" onClick={() => onOpen("cerrar_todo")}>
            <div className="icon-placeholder"></div>
            <span className="text-main">
              Cerrar
              <br />
              todo
            </span>
          </div>
        </div>

        <div className="grupo-footer">Ventana</div>
      </div>
    </div>
  );
}
