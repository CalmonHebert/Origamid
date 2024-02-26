function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Por favor digite um numero'
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}

terceiraIdade('s');