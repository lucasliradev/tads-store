import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RotaPrivada from "./components/RotaPrivada";
import Home from "./pages/Home";
import Detalhe from "./pages/Detalhe";
import Login from "./pages/Login";
import MinhaConta from "./pages/MinhaConta";
import NaoEncontrado from "./pages/NaoEncontrado";
import "./App.css";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Detalhe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<NaoEncontrado />} />
        <Route
          path="/minha-conta"
          element={
            <RotaPrivada>
              <MinhaConta />
            </RotaPrivada>
          }
        />

        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </Layout>
  );
}
