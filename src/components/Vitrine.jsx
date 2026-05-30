import ProdutoCard from "./ProdutoCard";

const produtos = [
  { id: 1, nome: "Notebook Gamer", preco: 4799.9, freteGratis: true },
  { id: 2, nome: "Mouse Sem Fio", preco: 149.9, freteGratis: false },
  { id: 3, nome: "Teclado Mecânico", preco: 389.0, freteGratis: true },
  { id: 4, nome: 'Monitor 27"', preco: 1299.9, freteGratis: true },
  { id: 5, nome: "Headset", preco: 259.9, freteGratis: true },
  { id: 6, nome: "Webcam Full HD", preco: 199.9, freteGratis: false },
];

export default function Vitrine() {
  return (
    <section className="vitrine">
      <h2 className="vitrine_titulo">Produtos</h2>

      <div className="vitrine_grade">
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  );
}