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


const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
console.error("erro. Necessário cadastrar um endereço.")
}