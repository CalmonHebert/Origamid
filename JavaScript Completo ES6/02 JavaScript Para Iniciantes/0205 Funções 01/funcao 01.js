function areaQuadrado(lado) {
    return console.log(lado * lado);
}

areaQuadrado(10);

function pi() {
    return 3.14
}

var total = 5 * pi();

console.log(total.toFixed(2));
console.log(pi());

function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.80).toFixed(2));

function corFavorita(cor) {
    if (cor === 'azul') {
        return console.log('Eu gosto do ceu');
    } else if (cor === 'verde') {
        return console.log('Eu gosto de Mato');
    } else {
        return console.log('Eu não gosto de cores');
    }
}

corFavorita('verdes')
