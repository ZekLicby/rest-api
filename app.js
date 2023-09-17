const express = require("express");
const app = express();
const morgan = require("morgan");

const productsRoute = require("./routes/produtos");
const ordersRoute = require("./routes/pedidos");

app.use(morgan("dev"));
app.use("/produtos", productsRoute);
app.use("/pedidos", ordersRoute);

app.use((req, res, next) => {
  const erro = new Error("Rota não encontrada.");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});

module.exports = app;
