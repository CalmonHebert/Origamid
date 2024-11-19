const ativar = document.querySelector('.ativar');

/** @param {MouseEvent} event */
function ativarAoClick(event) {
   console.log(event);

   const elemento = event.currentTarget;
   const posicaoMouse = {
      x: event.x,
      y: event.y,
   };
   const tempoPassado = event.timeStamp;

   console.log(elemento);
   console.log(posicaoMouse);
   console.log(tempoPassado);
}

ativar.addEventListener('click', ativarAoClick);