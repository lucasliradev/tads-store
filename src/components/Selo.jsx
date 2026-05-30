export default function Selo({ texto = "Destaque", cor = "#2f7d63" }) {
  return (
    <span className="selo" style={{ backgroundColor: cor }}>
      {texto}
    </span>
  );
}
