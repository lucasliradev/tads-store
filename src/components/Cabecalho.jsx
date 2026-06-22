import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Cabecalho({ titulo = "TADS Store" }) {
  const { logado, sair } = useAuth();
  const navegar = useNavigate();

  function aoSair() {
    sair();
    navegar("/");
  }

  return (
    <header className="cabecalho">
      <NavLink to="/" className="cabecalho_titulo">
        <img src="/images/ifes_logo.png" alt="Logo IFES" className="cabecalho_img" />
        {titulo}
      </NavLink>

      <nav className="cabecalho_nav">
        <NavLink to="/">Início</NavLink>

        {logado ? (
          <>
            <NavLink to="/minha-conta">Minha Conta</NavLink>
            <button className="cabecalho_sair" onClick={aoSair}>Sair</button>
          </>
        ) : (
          <NavLink to="/login">Entrar</NavLink>
        )}
      </nav>
    </header>
  );
}
