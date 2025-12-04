import { useState } from "react";
import ConfiguracionRibbon from "./ConfiguracionRibbon";
import SharedWindow from "../shared/SharedWindow";

export default function ConfiguracionPage() {
  const [modal, setModal] = useState(null);

  const renderContent = () => {
    if (modal === "parametros") return <div>Parámetros del sistema</div>;
    if (modal === "establecer_contra") return <div>Establecer contraseña</div>;
    if (modal === "eliminar_contra") return <div>Eliminar contraseña</div>;
    if (modal === "activar_sistema") return <div>Activar sistema</div>;
    return null;
  };

  return (
    <div style={{ width: "100%", flex: 1, position: "relative" }}>
      <ConfiguracionRibbon onOpen={setModal} />

      {modal && (
        <SharedWindow title={modal} onClose={() => setModal(null)}>
          {renderContent()}
        </SharedWindow>
      )}
    </div>
  );
}
