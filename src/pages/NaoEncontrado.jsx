import { Link } from "react-router-dom";

export default function NaoEncontrado() {
  return (
    <div className="nao-encontrado">
      <span className="nao-encontrado_codigo">404</span>
      <h2 className="nao-encontrado_titulo">PÁGINA NÃO ENCONTRADA</h2>
      <Link to="/" className="nao-encontrado_link">
        ← Voltar à loja
      </Link>
    </div>
  );
}