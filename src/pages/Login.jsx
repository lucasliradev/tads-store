import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const { entrar } = useAuth();
  const navegar = useNavigate();

  function aoEnviar(e) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    setTimeout(() => {
      if (usuario === "aluno" && senha === "1234") {
        entrar();
        navegar("/minha-conta");
      } else {
        setErro("Usuário ou senha inválidos.");
        setCarregando(false);
      }
    }, 600);
  }

  return (
    <div className="login">
      <div className="login_card">
        <h1 className="login_titulo">Entrar</h1>
        <p className="login_subtitulo">Acesse a sua conta para continuar</p>

        <form className="login_form" onSubmit={aoEnviar}>
          <div className="login_campo">
            <label htmlFor="usuario">Usuário</label>
            <input
              id="usuario"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="login"
              autoComplete="username"
              required
            />
          </div>

          <div className="login_campo">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="senha"
              autoComplete="current-password"
              required
            />
          </div>

          {erro && <p className="login_erro">{erro}</p>}

          <button
            type="submit"
            className="botao botao--primario login_botao"
            disabled={carregando}
          >
            {carregando ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="login_rodape">
          <Link to="/">← Voltar à loja</Link>
        </p>
      </div>
    </div>
  );
}
