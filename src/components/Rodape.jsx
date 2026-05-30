export default function Rodape() {
const ano = new Date().getFullYear();

  return (
    <footer className="rodape">
      <p>Desenvolvido por Lucas Lira - {ano}</p>
    </footer>
  );
}
