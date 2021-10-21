const ModeloTabela = require("../rotas/fornecedores/ModeloTabelaFornecedor")

ModeloTabela
    .sync()
    .then(() => console.log("Tabelas prontas"))
    .catch(console.log)