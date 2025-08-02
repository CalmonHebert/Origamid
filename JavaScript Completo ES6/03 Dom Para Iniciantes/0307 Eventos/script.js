const img = document.querySelector('img');

function callback(event) {
   console.log('clicou');
}

img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
   console.log(event.currentTarget);
   console.log(event.target);
}

animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
   event.preventDefault();
   console.log('clicou');
}

linkExterno.addEventListener('click', handleLinkExterno);

function handleKeyboard(event) {
   console.log(event.key);
}

window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelector('img');

function handleImg(event) {
   console.log(event.currentTarget.getAttribute('src'));
}

imgs.forEach((img) => {
   img.addEventListener('click', handleImg)
})