var videoGames = ['Switch', 'PS4', 'Xbox'];

console.log(videoGames);

console.log(videoGames[0]);
console.log(videoGames[2]);

videoGames.push('Megadrive'); //adiciona ao Final do array
videoGames.unshift('3DS') // adiciona no começo do array

console.log(videoGames.length); // tamanho do array 
console.log(videoGames);

videoGames.pop(); // remove o ultimo valor do array
console.log(videoGames);

videoGames.shift(); // remove o primeiro valor do array
console.log(videoGames);

//For Loop

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

//While Loop

var i = 10;
while (i >= 0) {
  console.log(i);
  i--
}

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === 'PS4') {
    break
  }
}

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];

frutas.forEach(function (item, index) {
  console.log(item, index);
});





