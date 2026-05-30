import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Cabecalho />

      <main className="layout_miolo">{children}</main>

      <Rodape />
    </div>
  );
}
