const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
    clienteId: String,
    itens: Array,
    status: { type: String, default: "pendente" }
});

const PedidoModel = mongoose.model("Pedido", pedidoSchema);

module.exports = PedidoModel;