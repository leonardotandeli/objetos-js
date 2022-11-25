const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["111232131", "111232132"],
};


cliente.enderecos = [{
    rua: "rua tal",
    numero: 1232,
    apartamento: true,
    complemento: "ap 222",
}]



for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
    console.log(`a chave ${chave} tem o valor ${cliente[chave]}`)
}};