var carro = {};
var pessoa = {};

console.log(typeof carro); // object

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2;
    }
}

var bg = menu.backgroundColor; // '#84E'
console.log(bg);

menu.backgroundColor = '#000'
menu.color = 'blue';

menu.esconder = function () {
    console.log('Escondi');

}


