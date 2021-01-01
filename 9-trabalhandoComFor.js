console.log(`\n Trabalhando com condicionais`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos Possiveis");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let contador = 0
let destinoExiste = false;


for (let cont = 0; cont < 3; cont++) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe:", destinoExiste);
        destinoExiste = true;
    }
}

if (podeComprar && destinoExiste) {
    console.log(`Boa viagem`);
} else {
    console.log(`Desculpe encontramos um erro`);
}