const express = require("express");
const mongoose = require("mongoose");
const pedidoRoutes = require("./src/controllers/pedido.controller.js");
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/pizzaria", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use("/pedidos", pedidoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
