// Retorne o url da página atual utilizando o objeto window
const href = location.href;
console.log(href);

if (href === 'http://127.0.0.1:5500/Origamid/JavaScript%20Completo%20ES6/03%20Dom%20Para%20Iniciantes/0301%20O%20Que%20%C3%A9%20o%20Dom/index.html') {
  console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function callbackh1() {
  console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1)
console.log('-----Exercício-------');

// Retorne o url da página atual utilizando o objeto window

// Seleciona o primeiro elemento da página que
// possua a classe ativo

// Retorne a linguagem do navegador

// Retorne a largura da janela 
