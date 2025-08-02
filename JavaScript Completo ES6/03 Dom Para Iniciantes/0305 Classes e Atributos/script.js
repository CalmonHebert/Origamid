const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste')
menu.classList.remove('azul')
menu.classList.toggle('azul')

if (menu.classList.contains('azul')) {
   menu.classList.add('possui-azul')
} else {
   menu.classList.add('nao-possui-azul')
}

menu.className += ' vermelho'

console.log(menu);
console.log(menu.className);

//Attributes
console.log('//Attributes');

const animais = document.querySelector('.animais');
console.log(animais.attributes[0]);

//getAttribute e setAttribute

const img = document.querySelector('img');
const srcImg = img.getAttribute('src');

img.setAttribute('alt', 'é uma raposa')

const possuiAlt = img.hasAttribute('alt')
console.log(possuiAlt);

console.log(srcImg);

console.log('---------Exercicio----------');
// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
   item.classList.add('ativo');
})

console.log(itensMenu);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
   item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
   console.log(item.hasAttribute('alt'));
});
// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');

link.setAttribute('href', 'https://www.google.com')





