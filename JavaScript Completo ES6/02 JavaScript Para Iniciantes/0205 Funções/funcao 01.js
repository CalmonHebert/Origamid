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

addEventListener('click', function () {
    console.log('oi');
})

function terceiraIdade(idade) {
    if (typeof idade != 'number') {
        return 'Por favor preencha um número'
    } else if (idade > 60) {
        return true
    } else {
        return false
    }
}
console.log(terceiraIdade(30));

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193
    return `Falta visitar ${totalPaises - paisesVisitados} países`
}

console.log(faltaVisitar(20));

var profissao = 'Designer'

function dados() {
    var nome = 'André';
    var idade = 28;
    function outrosDados() {
        var endereco = 'Rio de Janeiro';
        var idade = 29;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`
    }
    return outrosDados()
}

console.log(dados());




