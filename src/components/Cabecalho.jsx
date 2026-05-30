export default function Cabecalho({ titulo = "TADS Store" }) {
  return (
    <header className="cabecalho">
      <div className="cabecalho_titulo">
          {titulo}
        </div>
    </header>
  );
}
