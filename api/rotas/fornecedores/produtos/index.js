const roteador = require("express").Router({ mergeParams: true })
const Tabela = require("./TabelaProduto")
const Produto = require("./Produto")

roteador.get("/", async (req, res) => {
    const produtos = await Tabela.listar(req.params.idFornecedor)
    res.send(
        JSON.stringify(produtos)
    )
})

roteador.post("/", async (req, res) => {
    const idFornecedor = req.params.idFornecedor
    const corpo = req.body
    const dados = Object.assign({}, corpo, { fornecedor: idFornecedor })
    const produto = new Produto(dados)
    await produto.criar()
    res.status (201)
    res.send(produto)
})

module.exports = roteador