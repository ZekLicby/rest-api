const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Get da página de produtos",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).send({
    mensagem: "Post da página de produtos",
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;

  if (id === "777") {
    res.status(200).send({
      id,
      produto: "Geladeira Samsung Be Spoke",
    });
  } else {
    res.status(200).send({
      id,
    });
  }
});

router.patch("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Patch da página de produtos",
  });
});

router.delete("/", (req, res, next) => {
  res.status(200).send({
    mensagem: "Delete da página de produtos",
  });
});

module.exports = router;
