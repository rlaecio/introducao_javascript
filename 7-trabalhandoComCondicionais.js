console.log(`Trabalhando com condicionais`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 19;
const estaAcompanhado = true;
const temPassagemComprada = true;

console.log("Destinos Possiveis");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log(`Comprador Maior de idade!`)
//     listaDeDestinos.splice(1, 1); // removendo item da lista
// } else if (estaAcompanhada) {
//     console.log(`Menor de idade mas está acompanhado!`)
//     listaDeDestinos.splice(1, 1); // removendo item da lista
// } else {
//     console.log(`Comprador não é maior de idade, não posso vender!`);
// }

if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log(`Boa viagem! \n`)
    listaDeDestinos.splice(2, 1); // removendo item da lista
} else {
    console.log(`Comprador não é maior de idade, não posso vender! \n`);
}

console.log(`Embarque: \n`);
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log(`Boa viagem`);
} else {
    console.log(`Você não pode embarcar`);
}