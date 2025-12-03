import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./topmenu.css";
import ArchivoMenu from "./ArchivoMenu";

export default function TopMenu() {
  const [openArchivo, setOpenArchivo] = useState(false);
  const refMenu = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;

  useEffect(() => {
    function handleClickOutside(e) {
      if (refMenu.current && !refMenu.current.contains(e.target)) {
        setOpenArchivo(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="topmenu-wrapper" ref={refMenu}>
      <div
        className={openArchivo ? "tab active-yellow" : "tab"}
        onClick={() => setOpenArchivo(!openArchivo)}
      >
        Archivo
      </div>

      <div
        className={path === "/comprobantes" ? "tab active-gray" : "tab"}
        onClick={() => navigate("/comprobantes")}
      >
        Comprobantes
      </div>

      <div
        className={path === "/gastos" ? "tab active-gray" : "tab"}
        onClick={() => navigate("/gastos")}
      >
        Gastos
      </div>

      <div
        className={path === "/reportes" ? "tab active-gray" : "tab"}
        onClick={() => navigate("/reportes")}
      >
        Reportes
      </div>

      <div
        className={path === "/estadisticas" ? "tab active-gray" : "tab"}
        onClick={() => navigate("/estadisticas")}
      >
        Estadísticas
      </div>

      <div
        className={path === "/configuracion" ? "tab active-gray" : "tab"}
        onClick={() => navigate("/configuracion")}
      >
        Configuración
      </div>

      <div
        className={path === "/vista" ? "tab active-gray" : "tab"}
        onClick={() => navigate("/vista")}
      >
        Vista
      </div>

      <div
        className={path === "/ayuda" ? "tab active-gray" : "tab"}
        onClick={() => navigate("/ayuda")}
      >
        Ayuda
      </div>

      {openArchivo && <ArchivoMenu />}
    </div>
  );
}
