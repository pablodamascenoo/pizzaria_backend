const express = require("express");
const PedidoModel = require("../models/pedido.model");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { clienteId, itens } = req.body;
        const pedido = new PedidoModel({ clienteId, itens });
        await pedido.save();
        res.status(201).json(pedido);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});

router.get("/", async (req, res) => {
    try {
        const pedidos = await PedidoModel.find();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar pedidos" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const pedido = await PedidoModel.findByIdAndUpdate(id, { status }, { new: true });
        if (!pedido) return res.status(404).json({ error: "PedidoModel não encontrado" });
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar pedido" });
    }
});

module.exports = router;
