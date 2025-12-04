import { useState } from "react";
import GastosRibbon from "./GastosRibbon";
import SharedWindow from "../shared/SharedWindow";

export default function GastosPage() {
  const [modal, setModal] = useState(null);

  return (
    <div style={{ width: "100%", flex: 1, position: "relative" }}>
      <GastosRibbon onOpen={setModal} />

      {modal && (
        <SharedWindow
          title={modal === "gastos" ? "Gastos" : "Comprobantes de pago"}
          onClose={() => setModal(null)}
        >
          {modal === "gastos" && <div>Gastos</div>}
          {modal === "comprobantes_pago" && <div>Comprobantes de pago</div>}
        </SharedWindow>
      )}
    </div>
  );
}
