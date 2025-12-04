import { useState } from "react";
import AyudaRibbon from "./AyudaRibbon";
import SharedWindow from "../shared/SharedWindow";

export default function AyudaPage() {
  const [modal, setModal] = useState(null);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <AyudaRibbon onOpen={setModal} />

      {modal && (
        <SharedWindow title={modal} onClose={() => setModal(null)}>
          <div>{modal}</div>
        </SharedWindow>
      )}
    </div>
  );
}
