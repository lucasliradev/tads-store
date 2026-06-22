# TADS Store

A TADS Store é uma loja virtual desenvolvida como Projeto Integrador da disciplina de Desenvolvimento Front-End II, no curso de Análise e Desenvolvimento de Sistemas do IFES Campus de Alegre.

O projeto foi construído em quatro etapas ao longo do semestre — partindo de uma estrutura simples de componentes até chegar em uma aplicação completa com consumo de API, navegação entre páginas e autenticação.

---

## Como rodar

Você vai precisar do Node.js instalado na máquina.

```bash
git clone https://github.com/lucasliradev/tads-store.git
cd tads-store
npm install
npm run dev
```

Abra `http://localhost:5173` no navegador.

### Login de teste

> O login é simulado — as credenciais estão fixas no front-end, sem back-end real.

| Usuário | Senha |
|---------|-------|
| aluno   | 1234  |

---

## O que a loja faz

- Exibe produtos buscados em tempo real da API DummyJSON
- Permite buscar por nome e filtrar por categoria
- Mostra o preço em dólar e em real, com a cotação atualizada automaticamente
- Ao clicar em um produto, abre a página de detalhe com imagens, avaliação, descrição e estoque
- Tem uma área de login e uma página "Minha Conta" que só abre para quem está autenticado
- A sessão é mantida mesmo após recarregar a página
- Rotas inexistentes e produtos não encontrados mostram uma página 404

---

## Tecnologias

- React 18 + Vite 6
- React Router DOM 7
- JavaScript e CSS puro
- [DummyJSON](https://dummyjson.com/) — produtos
- [AwesomeAPI](https://docs.awesomeapi.com.br/) — cotação USD-BRL

---

## Estrutura

```
src/
├── contexts/
│   └── AuthContext.jsx
├── components/
│   ├── Layout.jsx
│   ├── Cabecalho.jsx
│   ├── Rodape.jsx
│   ├── Vitrine.jsx
│   ├── ProdutoCard.jsx
│   ├── RotaPrivada.jsx
│   ├── Botao.jsx
│   └── Selo.jsx
├── pages/
│   ├── Home.jsx
│   ├── Detalhe.jsx
│   ├── Login.jsx
│   ├── MinhaConta.jsx
│   └── NaoEncontrado.jsx
├── App.jsx
├── App.css
└── main.jsx
```

---

## Autor

**Lucas Lira Soares da Cunha** · IFES Campus de Alegre · 2026
