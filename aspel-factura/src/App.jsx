import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopMenu from "./modules/layout/TopMenu";
import BottomBar from "./modules/layout/BottomBar";

import ComprobantesRibbon from "./modules/comprobantes/ComprobantesRibbon";
import GastosPage from "./modules/gastos/GastosPage";
import ReportesPage from "./modules/reportes/ReportesPage";
import EstadisticasPage from "./modules/estadisticas/EstadisticasPage";
import ConfiguracionPage from "./modules/configuracion/ConfiguracionPage";
import VistaPage from "./modules/vista/VistaPage";
import AyudaPage from "./modules/ayuda/AyudaPage";

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <TopMenu />

        <div style={{ flex: 1, overflow: "hidden" }}>
          <Routes>
            {/* ESTE ES EL ÚNICO ESPECIAL */}
            <Route path="/comprobantes" element={<ComprobantesRibbon />} />

            {/* LOS DEMÁS TIENEN PAGE */}
            <Route path="/gastos" element={<GastosPage />} />
            <Route path="/reportes" element={<ReportesPage />} />
            <Route path="/estadisticas" element={<EstadisticasPage />} />
            <Route path="/configuracion" element={<ConfiguracionPage />} />
            <Route path="/vista" element={<VistaPage />} />
            <Route path="/ayuda" element={<AyudaPage />} />
          </Routes>
        </div>

        <BottomBar />
      </div>
    </BrowserRouter>
  );
}
