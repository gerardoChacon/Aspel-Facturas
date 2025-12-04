import { useState } from "react";
import ReportesRibbon from "./ReportesRibbon";
import SharedWindow from "../shared/SharedWindow";

export default function ReportesPage() {
  const [modal, setModal] = useState(null);

  const renderContent = () => {
    return <div>{modal}</div>;
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <ReportesRibbon onOpen={setModal} />

      {modal && (
        <SharedWindow title={modal} onClose={() => setModal(null)}>
          {renderContent()}
        </SharedWindow>
      )}
    </div>
  );
}
