// basicamente é ajudar o typescript a ser um pouco mais especifico.

//colocando o as depois de selecionar um elemento e adicionando oque ele é, declaramos para os proximos comandos que esse elemento "as" alguma coisa.

let idadeField = document.getElementById('idade') as HTMLInputElement;

/// ...


console.log( idadeField.value);