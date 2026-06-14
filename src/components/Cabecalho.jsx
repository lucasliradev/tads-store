import { NavLink } from "react-router-dom";

export default function Cabecalho({ titulo = "TADS Store" }) {
  return (
    <header className="cabecalho">
      <NavLink to="/" className="cabecalho_titulo">
        <img src="/images/ifes_logo.png" alt="Logo IFES" className="cabecalho_img" />
        {titulo}
      </NavLink>

      <nav className="cabecalho_nav">
        <NavLink to="/">Início</NavLink>
      </nav>
    </header>
  );
}
