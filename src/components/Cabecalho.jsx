export default function Cabecalho({ titulo = "TADS Store" }) {
  return (
    <header className="cabecalho">
      <div className="cabecalho_titulo">
        <img src="/images/ifes_logo.png" alt="Logo IFES" className="cabecalho_img" />
          {titulo}
        </div>
    </header>
  );
}
