export default function Botao({ texto = "Comprar", variante = "primario", onClick }) {
  return (
    <button className={`botao botao--${variante}`} onClick={onClick}>
      {texto}
    </button>
  );
}
