import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Selo from "../components/Selo";
import Botao from "../components/Botao";

function formatarDolar(valor) {
  return valor.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function formatarReal(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function Estrelas({ rating }) {
  const estrelas = [1, 2, 3, 4, 5];

  function preenchimento(posicao) {
    if (rating >= posicao) return 1;
    if (rating >= posicao - 0.5) return 0.5;
    return 0;
  }

  return (
    <span className="detalhe_estrelas" title={`${rating} de 5`}>
      {estrelas.map((pos) => {
        const p = preenchimento(pos);
        const id = `grad-${pos}-${rating}`;
        return (
          <svg
            key={pos}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={id}>
                {/* lado esquerdo preenchido conforme o valor */}
                <stop offset={`${p * 100}%`} stopColor="var(--cor-acento-claro)" />
                <stop offset={`${p * 100}%`} stopColor="var(--cor-borda)" />
              </linearGradient>
            </defs>
            <polygon
              points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              fill={`url(#${id})`}
              stroke="var(--cor-acento-claro)"
              strokeWidth="1.5"
            />
          </svg>
        );
      })}
      <span className="detalhe_rating_num">{rating.toFixed(1)}</span>
    </span>
  );
}

export default function Detalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [produto, setProduto] = useState(null);
  const [cotacao, setCotacao] = useState(5.0);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    setCarregando(true);
    setErro(null);
    setProduto(null);

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (res.status === 404) {
          navigate("/404", { replace: true });
          return null;
        }
        if (!res.ok) throw new Error("Erro ao carregar produto");
        return res.json();
      })
      .then((dados) => {
        if (!dados) return;
        setProduto(dados);
        setCarregando(false);
      })
      .catch((err) => {
        setErro(err.message);
        setCarregando(false);
      });
  }, [id]);

  useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
      .then((res) => res.json())
      .then((dados) => {
        const valor = parseFloat(dados.USDBRL.bid);
        if (!isNaN(valor)) setCotacao(valor);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="detalhe">
      <Link to="/" className="detalhe_voltar">
        ← Voltar à loja
      </Link>

      {carregando && <p className="vitrine_estado">Carregando...</p>}

      {erro && (
        <div className="detalhe_erro">
          <p>{erro}.</p>
          <Link to="/" className="detalhe_voltar">← Voltar à loja</Link>
        </div>
      )}

      {produto && (
        <div className="detalhe_conteudo">
          <div className="detalhe_galeria">
            <img
              className="detalhe_imagem_principal"
              src={produto.images?.[0]}
              alt={produto.title}
            />
            {produto.images?.length > 1 && (
              <div className="detalhe_miniaturas">
                {produto.images.slice(0, 4).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${produto.title} — foto ${i + 1}`}
                    className="detalhe_miniatura"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="detalhe_info">
            <div className="detalhe_selos">
              <Selo texto={produto.category.replace(/-/g, " ")} cor="#3a4942" />
              {produto.discountPercentage > 5 && (
                <Selo
                  texto={`-${Math.round(produto.discountPercentage)}% OFF`}
                  cor="#2f7d63"
                />
              )}
            </div>

            <h1 className="detalhe_titulo">{produto.title}</h1>
            <p className="detalhe_marca">por {produto.brand ?? produto.category}</p>

            <Estrelas rating={produto.rating} />

            <p className="detalhe_descricao">{produto.description}</p>

            <div className="detalhe_precos">
              <span className="produto-card_preco_usd">
                {formatarDolar(produto.price)}
              </span>
              <p className="produto-card_preco">
                {formatarReal(produto.price * cotacao)}
              </p>
            </div>

            <p className="detalhe_estoque">
              {produto.stock > 0
                ? `${produto.stock} unidades em estoque`
                : "Fora de estoque"}
            </p>

            <Botao texto="Adicionar ao carrinho" />
          </div>
        </div>
      )}
    </div>
  );
}