import React from "react";
import "./archivoMenu.css";

export default function ArchivoMenu() {
  return (
    <div className="archivo-menu">
      <div className="menu-item">
        <div className="menu-icon doc-icon"></div>
        Cambiar RFC de emisión
      </div>

      <div className="menu-item">
        <div className="menu-icon printer-icon"></div>
        Especificar impresora
      </div>

      <div className="menu-item submenu">
        <div className="menu-icon folder-icon"></div>
        Respaldo de archivos
        <span className="arrow">▶</span>
      </div>

      <div className="menu-item">
        <div className="menu-icon qr-icon"></div>
        Importación de CFDI
      </div>

      <div className="menu-item">
        <div className="menu-icon star-icon"></div>
        Activar sistema
      </div>

      <div className="menu-item">
        <div className="menu-icon new-icon"></div>
        Lo nuevo
      </div>

      <div className="menu-item">
        <div className="menu-icon exit-icon"></div>
        Salir
      </div>
    </div>
  );
}
