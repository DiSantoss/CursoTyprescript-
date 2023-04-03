
//let idade: string | number = 90;

//idade = '25';

// idade = document.getElementById('idade')?.innerHTML;

//para usar mais de um tipo colocarmos o sinal de "|" para dizer quais tipos pode ser usado

//usando isso na função

function mostrarIdade(idade: string | number) {
    if(typeof idade === 'string') {
    console.log(idade.toUppersCase());
    } else {
        console.log(idade);
    }
}

mostrarIdade(90);
mostrarIdade('90');

// quando temos um parametro com mais de um tipo diferente, e estamos utilizando uma propriedade,uma função, um método agregada desse parametro, que é exclusivo só para um tipo que estamos usando, obrigatoriamente tenho que verificar o tipo desse cara, por isso criamos o exemplo com if.