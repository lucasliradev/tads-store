import Selo from "./Selo";
import Botao from "./Botao";

function formatarDolar(valor) {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

function formatarReal(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function ProdutoCard({ produto, cotacao }) {
  const { title, price, images, category, discountPercentage } = produto;
  const precoReal = price * cotacao;

  return (
    <article className="produto-card">
      <div className="produto-card_imagem">
        <img src={images?.[0]} alt={title} loading="lazy" />
      </div>

      <div className="produto-card_corpo">
        <div className="produto-card_selos">
          <Selo texto={category.replace(/-/g, " ")} cor="#3a4942" />
          {discountPercentage > 5 && (
            <Selo
              texto={`-${Math.round(discountPercentage)}% OFF`}
              cor="#2f7d63"
            />
          )}
        </div>

        <h3 className="produto-card_nome">{title}</h3>

        <div className="produto-card_precos">
          <span className="produto-card_preco_usd">{formatarDolar(price)}</span>
          <p className="produto-card_preco">{formatarReal(precoReal)}</p>
        </div>

        <Botao texto="Adicionar ao carrinho" />
      </div>
    </article>
  );
}