class DadosNaoFornecidos extends Error {
    constructor(){
        super("Não foram recebidos dados válidos para atualizar fornecedor!")
        this.name = "DadosNaoFornecidos"
        this.idErro = 2
    }
}

module.exports = DadosNaoFornecidos