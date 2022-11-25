const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["111232131", "111232132"],
};


cliente.endereco = {
    rua: "rua tal",
    numero: 1232,
    apartamento: true,
    complemento: "ap 222",
}

console.log(cliente.endereco.rua)
