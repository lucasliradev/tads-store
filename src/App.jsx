import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Detalhe from "./pages/Detalhe";
import NaoEncontrado from "./pages/NaoEncontrado";
import "./App.css";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Detalhe />} />
        {/* path="*" captura qualquer rota não reconhecida — sempre por último */}
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </Layout>
  );
}
