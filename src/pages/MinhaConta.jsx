import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Botao from "../components/Botao";

export default function MinhaConta() {
  const { sair } = useAuth();
  const navegar = useNavigate();

  function aoSair() {
    sair();
    navegar("/");
  }

  return (
    <div className="minha-conta">
      <div className="minha-conta_card">
        <div className="minha-conta_avatar">A</div>

        <h1 className="minha-conta_titulo">Minha Conta</h1>
        <p className="minha-conta_usuario">Olá, <strong>aluno</strong>!</p>
        <p className="minha-conta_info">
          Você está autenticado e tem acesso à área restrita da TADS Store.
        </p>

        <div className="minha-conta_acoes">
          <Botao
            texto="Voltar à loja"
            variante="secundario"
            onClick={() => navegar("/")}
          />
          <Botao texto="Sair" variante="primario" onClick={aoSair} />
        </div>
      </div>
    </div>
  );
}
