import { useState } from "react";
import EstadisticasRibbon from "./EstadisticasRibbon";
import SharedWindow from "../shared/SharedWindow";

export default function EstadisticasPage() {
  const [modal, setModal] = useState(null);

  const renderContent = () => {
    if (modal === "ventas_mes") return <div>Ventas por mes</div>;
    if (modal === "clientes_importantes")
      return <div>Clientes más importantes</div>;
    if (modal === "documentos_pagados")
      return <div>Documentos pagados por cliente</div>;
    if (modal === "saldo_clientes") return <div>Saldo de clientes</div>;
    if (modal === "productos_vendidos")
      return <div>Productos más vendidos</div>;
    if (modal === "tablero") return <div>Tablero</div>;
    return null;
  };

  return (
    <div style={{ width: "100%", flex: 1, position: "relative" }}>
      <EstadisticasRibbon onOpen={setModal} />

      {modal && (
        <SharedWindow title={modal} onClose={() => setModal(null)}>
          {renderContent()}
        </SharedWindow>
      )}
    </div>
  );
}
