import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopMenu from "./modules/layout/TopMenu";
import BottomBar from "./modules/layout/BottomBar";

import ComprobantesRibbon from "./modules/comprobantes/ComprobantesRibbon";
import GastosRibbon from "./modules/gastos/GastosRibbon";
import ReportesRibbon from "./modules/reportes/ReportesRibbon";
import EstadisticasRibbon from "./modules/estadisticas/EstadisticasRibbon";
import ConfiguracionRibbon from "./modules/configuracion/ConfiguracionRibbon";
import VistaRibbon from "./modules/vista/VistaRibbon";
import AyudaRibbon from "./modules/ayuda/AyudaRibbon";

import GastosPage from "./modules/gastos/GastosPage";
import ReportesPage from "./modules/reportes/ReportesPage";
import EstadisticasPage from "./modules/estadisticas/EstadisticasPage";
import ConfiguracionPage from "./modules/configuracion/ConfiguracionPage";
import VistaPage from "./modules/vista/VistaPage";
import AyudaPage from "./modules/ayuda/AyudaPage";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TopMenu />

        <Routes>
          <Route path="/comprobantes" element={<ComprobantesRibbon />} />
          <Route path="/gastos" element={<GastosRibbon />} />
          <Route path="/reportes" element={<ReportesRibbon />} />
          <Route path="/estadisticas" element={<EstadisticasRibbon />} />
          <Route path="/configuracion" element={<ConfiguracionRibbon />} />
          <Route path="/vista" element={<VistaRibbon />} />
          <Route path="/ayuda" element={<AyudaRibbon />} />
        </Routes>

        <div style={{ flex: 1, background: "#f3f6fb" }}>
          <Routes>
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

export default App;
