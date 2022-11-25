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

cliente.enderecos.push({
    rua: "rua tal2",
    numero: 1232,
    apartamento: false,
    complemento: "casa 2",
})


const listaApenasApartamentos = cliente.enderecos.filter( (endereco) => endereco.apartamento === true);

console.log(listaApenasApartamentos)