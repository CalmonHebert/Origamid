var pessoa = {
    nome: 'André',
    idade: 28,
}

console.log(pessoa.idade);


var quadrado = {
    lados: 4,
    area: function (lado) { // area(lado)
        return lado * lado;
    },
    perimetro: function (lado) { // perimetro(lado) 
        return this.lados * lado;
    },
}

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.PI.toFixed(2)); // 3.14
console.log(Math.random()); // numero aleatorio

var pi = Math.PI;
console.log(pi);





