import React from "react";
import "./bottomBar.css";

export default function BottomBar() {
  return (
    <div className="bottom-bar">
      {/* Caja de búsqueda */}
      <input className="bottom-search" type="text" placeholder="Buscar…" />

      {/* Sección derecha */}
      <div className="bottom-right">
        <div className="user-icon"></div>

        <span className="bottom-text">Wednesday 03 de December de 2025</span>
      </div>
    </div>
  );
}
