const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Retorna os pedidos",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "O pedido foi criado",
  });
});

router.get("/:oderId", (req, res, next) => {
  const id = req.params.orderId;

  res.status(200).send({
    id,
    produto: `Detalhes do pedido ${id}`,
  });
});

router.delete("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Pedido excluído",
  });
});

module.exports = router;
