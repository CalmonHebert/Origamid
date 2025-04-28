// Retorne o url da página atual utilizando o objeto window
const href = location.href;
console.log(href);

if (href === 'http://127.0.0.1:5500/Origamid/JavaScript%20Completo%20ES6/03%20Dom%20Para%20Iniciantes/0301%20O%20Que%20%C3%A9%20o%20Dom/index.html') {
  console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');
h1Selecionado = h1Selecionado.classList;

h1Selecionado.addEventListener('click', function () {
  console.log('clicou em ' + h1Selecionado);
})