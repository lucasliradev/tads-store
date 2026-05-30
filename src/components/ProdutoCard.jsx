import Selo from "./Selo";
import Botao from "./Botao";

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function ProdutoCard({ produto }) {
  const { nome, preco, freteGratis } = produto;

  return (
    <article className="produto-card">
      <div className="produto-card_imagem" aria-hidden="true">
        {nome.charAt(0)}
      </div> 

      <div className="produto-card_corpo">
        {freteGratis
          ? <Selo texto="Frete grátis" cor="#2f7d63" />
          : <Selo texto="Cupom 10% OFF" cor="#886211" />
        }

        <h3 className="produto-card_nome">{nome}</h3>
        <p className="produto-card_preco">{formatarPreco(preco)}</p>

        <Botao texto="Adicionar ao carrinho" />
      </div>
    </article>
  );
}
