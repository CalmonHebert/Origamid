const imgs = document.querySelectorAll('img');
console.log(imgs);

imgs.forEach(function (item, index, array) {
   console.log(item, index, array);
});

console.log('--------------titulos---------------');
console.log('------------------------------------');

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item, index, array) {
   console.log(item, index, array);

});

console.log(titulosArray);

// Arrow Function

console.log('--------------Arrow Function---------------');
console.log('-------------------------------------------');

const imgs2 = document.querySelectorAll('img');
imgs2.forEach((item, index) => {
   console.log(item);
});

console.log('--------------Exercicios-----------------');
console.log('-----------------------------------------');
// Mostre no console cada parágrado do site
console.log('// Mostre no console cada parágrado do site');

const p = document.querySelectorAll('p')
console.log(p);

p.forEach((item) => {
   console.log(item);
})

// Mostre o texto dos parágrafos no console
console.log('// Mostre o texto dos parágrafos no console');

p.forEach((item) => {
   console.log(item.innerHTML);
});

// Como corrigir os erros abaixo:
console.log('// Como corrigir os erros abaixo:');
console.log('');

const imgs3 = document.querySelectorAll('img');

imgs3.forEach((item, index) => {
   console.log(item, index);
});

let i = 0;
imgs3.forEach(() => {
   console.log(i++);
});

imgs3.forEach(() => i++);

