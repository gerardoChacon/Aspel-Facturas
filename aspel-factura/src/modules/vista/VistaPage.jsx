import { useState } from "react";
import VistaRibbon from "./VistaRibbon";
import SharedWindow from "../shared/SharedWindow";

export default function VistaPage() {
  const [modal, setModal] = useState(null);

  const renderContent = () => {
    return <div>{modal}</div>;
  };

  return (
    <div style={{ width: "100%", flex: 1, position: "relative" }}>
      <VistaRibbon onOpen={setModal} />

      {modal && (
        <SharedWindow title={modal} onClose={() => setModal(null)}>
          {renderContent()}
        </SharedWindow>
      )}
    </div>
  );
}
