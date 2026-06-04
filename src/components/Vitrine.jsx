import { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard";

export default function Vitrine() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [cotacao, setCotacao] = useState(5.00);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    setCarregando(true);
    setErro(null);

    fetch("https://dummyjson.com/products?limit=12&skip=0")
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao carregar os produtos");
        return res.json();
      })
      .then((dados) => {
        setProdutos(dados.products);
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((dados) => {
        const lista = dados.map((c) =>
          typeof c === "string"
            ? { slug: c, nome: c }
            : { slug: c.slug, nome: c.name }
        );
        setCategorias(lista);
      })
      .catch(() => setCategorias([]));
  }, []);

  useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
      .then((res) => res.json())
      .then((dados) => {
        const valor = parseFloat(dados.USDBRL.bid);
        if (!isNaN(valor)) setCotacao(valor);
      })
      .catch(() => {
      });
  }, []);

  const produtosFiltrados = produtos.filter((p) => {
    const correspondeBusca = p.title
      .toLowerCase()
      .includes(busca.toLowerCase());
    const correspondeCategoria =
      categoria === "" || p.category === categoria;
    return correspondeBusca && correspondeCategoria;
  });

  return (
    <section className="vitrine">
      <h2 className="vitrine_titulo">Produtos</h2>

      <div className="vitrine_filtros">
        <input
          type="text"
          className="vitrine_busca"
          placeholder="Buscar produto..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <select
          className="vitrine_select"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Todas as categorias</option>
          {categorias.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.nome}
            </option>
          ))}
        </select>
      </div>

      {carregando && <p className="vitrine_estado">Carregando...</p>}

      {erro && (
        <p className="vitrine_estado vitrine_estado--erro">
          {erro}. Tente novamente mais tarde.
        </p>
      )}

      {!carregando && !erro && produtosFiltrados.length === 0 && (
        <p className="vitrine_estado">Nenhum produto encontrado.</p>
      )}

      {!carregando && !erro && produtosFiltrados.length > 0 && (
        <div className="vitrine_grade">
          {produtosFiltrados.map((produto) => (
            <ProdutoCard
              key={produto.id}
              produto={produto}
              cotacao={cotacao}
            />
          ))}
        </div>
      )}
    </section>
  );
}