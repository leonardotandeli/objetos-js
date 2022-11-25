const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["111232131", "111232132"],
    saldo: 200, 
    efetuaPagamento: function(valor) {
        if (valor > this.saldo) {
         console.log("saldo insuficiente.")
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo Saldo ${this.saldo}`)
        }
        
    }
};

cliente.efetuaPagamento(25)
