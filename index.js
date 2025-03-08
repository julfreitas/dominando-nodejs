const express = require("express");
const server = express();

// http://localhost:3000/hello?nome=Julia&idade=22
// Query params = ?nome=Julia&idade=22
server.get("/hello", (req, res) => {
  const { nome, idade } = req.query;

  return res.json({
    title: "Hello World",
    message: `Olá, ${nome} tudo bem com vc?`,
    idade: idade,
  });
});

server.listen(3000);

// http://localhost:3000/hello/Julia
// Route params = /hello/:nome
server.get("/hello/:nome", (req, res) => {
  const nome = req.params.nome;

  return res.json({
    title: "hello world",
    message: `Olá, ${nome}`,
  });
});
