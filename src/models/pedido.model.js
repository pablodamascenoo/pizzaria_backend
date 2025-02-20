const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
    clienteId: String,
    primeiraMetade: String,
    segundaMetade: String,
    nome: String,
    endereco: String,
    status: { type: String, default: "pendente" }
});

const PedidoModel = mongoose.model("Pedido", pedidoSchema);

module.exports = PedidoModel;