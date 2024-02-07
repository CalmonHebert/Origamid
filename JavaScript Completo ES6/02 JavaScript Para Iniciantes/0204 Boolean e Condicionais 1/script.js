var possuiGraduacao = false;
var possuiDoutorado = false

if (possuiGraduacao) {
  console.log('É Verdadeiro');
} else if (possuiDoutorado) {
  console.log('Possui Doutorado');
} else {
  console.log("não Possui nada!");
}

var nome = 'Calmon';

if (nome) {
  console.log(nome);
} else {
  console.log('O nome não existe!');
}

if (!possuiGraduacao) {
  console.log('Não possui graduação');
}

var x = 10;
console.log(x == 11);

var animal = 'Gato';
console.log(animal !== 'gato');

if ((5 - 10) && (5 >= 5)) {
  console.log('verdadeiro');
} else {
  console.log('Falso');
}

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(condicional2);

var corFavorita = 'Amarelo';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu');
    break;
  case 'Vermelho':
    console.log('Olhe para o chão');
    break;
  default:
    console.log('Feche os olhos');
}